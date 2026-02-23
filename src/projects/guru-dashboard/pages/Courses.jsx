import React from 'react';
import {
    Box, Typography, Card, CardContent, Chip, Button, Link,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { courses, sessions } from '../data/guruData';

// Map course to sessions that reference it
const sessionMap = {
    co1: [],
    co2: ['Mentor Session: Python Q&A'],
    co3: ['Mentor Session: SQL Basics'],
    co4: ['Mentor Session: Statistics'],
    co5: ['Mentor Session: Statistics', 'Mentor Session: ML Basics', 'Q&A Session: Python', 'Mentor Session: SQL Basics'],
};

const watchedMap = {
    co1: null,
    co2: 72,
    co3: null,
    co4: null,
    co5: 100,
};

const programColors = {
    AIML: { bg: '#f5f3ff', text: '#6d28d9' },
    'PGP-DS': { bg: '#eff6ff', text: '#1d4ed8' },
    'PGP-SE': { bg: '#f0fdf4', text: '#15803d' },
    All: { bg: '#fef3c7', text: '#b45309' },
    Core: { bg: '#fce7f3', text: '#9d174d' },
    PGDM: { bg: '#e0f2fe', text: '#0369a1' },
};

export default function Courses() {
    return (
        <Box sx={{ px: 4, pt: 3, pb: 6 }}>
            <Typography variant="h6" fontWeight={700} sx={{ mb: 0.5 }}>Courses</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Quick refreshers to watch before you teach upcoming sessions.
            </Typography>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' },
                    gap: 2,
                }}
            >
                {courses.map((course) => {
                    const mapped = sessionMap[course.id] || [];
                    const watched = watchedMap[course.id];
                    const isNew = course.id === 'co1';
                    const pColor = programColors[course.program] || { bg: '#f8fafc', text: '#475569' };

                    return (
                        <Card
                            key={course.id}
                            variant="outlined"
                            sx={{ borderRadius: 2, display: 'flex', flexDirection: 'column' }}
                        >
                            <CardContent sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column', '&:last-child': { pb: 3 } }}>
                                {/* Top tag row */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                                    <Box sx={{ display: 'flex', gap: 0.75 }}>
                                        {isNew && (
                                            <Chip
                                                label="New"
                                                size="small"
                                                sx={{ bgcolor: '#fef9c3', color: '#b45309', fontWeight: 700, fontSize: 11, height: 22, border: '1px solid #fde68a' }}
                                            />
                                        )}
                                        <Chip
                                            label={course.program}
                                            size="small"
                                            sx={{ bgcolor: pColor.bg, color: pColor.text, fontWeight: 600, fontSize: 11, height: 22 }}
                                        />
                                    </Box>
                                    {watched !== null && (
                                        <Chip
                                            label={`Watched ${watched}%`}
                                            size="small"
                                            sx={{
                                                bgcolor: watched === 100 ? '#f0fdf4' : '#eff6ff',
                                                color: watched === 100 ? '#15803d' : '#1d4ed8',
                                                border: `1px solid ${watched === 100 ? '#bbf7d0' : '#bfdbfe'}`,
                                                fontWeight: 600,
                                                fontSize: 11,
                                                height: 22,
                                            }}
                                        />
                                    )}
                                </Box>

                                {/* Title */}
                                <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 0.25, lineHeight: 1.4 }}>
                                    {course.title}
                                </Typography>
                                <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
                                    {course.level} · {course.duration}
                                </Typography>

                                {/* Mapped sessions box */}
                                <Box
                                    sx={{
                                        flex: 1,
                                        bgcolor: 'action.hover',
                                        borderRadius: 1.5,
                                        p: 1.5,
                                        mb: 2,
                                        minHeight: 72,
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 1 }}>
                                        <CalendarTodayOutlinedIcon sx={{ fontSize: 13, color: 'text.secondary' }} />
                                        <Typography variant="caption" color="text.secondary" fontWeight={600}>Mapped sessions</Typography>
                                    </Box>
                                    {mapped.length === 0 ? (
                                        <Typography variant="caption" color="text.disabled">No upcoming sessions mapped yet.</Typography>
                                    ) : (
                                        <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap' }}>
                                            {mapped.slice(0, 1).map((s) => (
                                                <Chip key={s} label={s} size="small" sx={{ bgcolor: 'background.paper', fontSize: 11, height: 24 }} />
                                            ))}
                                            {mapped.length > 1 && (
                                                <Chip label={`+${mapped.length - 1}`} size="small" sx={{ bgcolor: 'background.paper', fontSize: 11, height: 24 }} />
                                            )}
                                        </Box>
                                    )}
                                </Box>

                                {/* Watch button */}
                                <Button
                                    variant="contained"
                                    fullWidth
                                    startIcon={<PlayArrowIcon />}
                                    sx={{
                                        bgcolor: '#111827',
                                        '&:hover': { bgcolor: '#1f2937' },
                                        borderRadius: 5,
                                        textTransform: 'none',
                                        fontWeight: 700,
                                        fontSize: 14,
                                    }}
                                >
                                    Watch
                                </Button>
                            </CardContent>
                        </Card>
                    );
                })}
            </Box>

            {/* Footer tip */}
            <Box
                sx={{
                    mt: 3,
                    px: 2,
                    py: 1.5,
                    bgcolor: 'action.hover',
                    borderRadius: 2,
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <Typography variant="caption" color="text.secondary">
                    Tip: We'll recommend the right course automatically based on your next session topic.
                </Typography>
            </Box>
        </Box>
    );
}
