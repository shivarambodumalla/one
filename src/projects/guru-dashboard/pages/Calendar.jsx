import React, { useState } from 'react';
import {
    Box, Typography, Button, IconButton, Chip, Card, CardContent,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { guruProfile, calendarEvents } from '../data/guruData';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const DAY_DATES = ['16 Feb', '17 Feb', '18 Feb', '19 Feb', '20 Feb', '21 Feb', '22 Feb'];
const HOURS = Array.from({ length: 12 }, (_, i) => i + 8); // 08 - 19

const EVENT_STYLES = {
    session: { bgcolor: '#ede9fe', border: '2px solid #7c3aed', color: '#4c1d95', label: 'Session' },
    request: { bgcolor: '#f5f3ff', border: '2px solid #a78bfa', color: '#5b21b6', label: 'Request' },
    available: { bgcolor: '#f0fdf4', border: '2px solid #86efac', color: '#15803d', label: 'Available' },
};

// Add availability blocks Mon-Fri 18:00-20:00
const AVAILABILITY_BLOCKS = [0, 1, 2, 3, 4].map((dayIdx) => ({
    day: dayIdx,
    hour: 18,
    duration: 2,
    title: 'Available\n18:00–20:00',
    type: 'available',
}));

const ALL_EVENTS = [...AVAILABILITY_BLOCKS, ...calendarEvents];

const CELL_HEIGHT = 56;

function CalendarGrid() {
    const getEvent = (dayIdx, hour) =>
        ALL_EVENTS.find((e) => e.day === dayIdx && e.hour === hour);

    const isOccupied = (dayIdx, hour) =>
        ALL_EVENTS.some((e) => e.day === dayIdx && e.hour < hour && e.hour + e.duration > hour);

    return (
        <Box sx={{ overflowX: 'auto' }}>
            <Box sx={{ minWidth: 700 }}>
                {/* Header row */}
                <Box sx={{ display: 'grid', gridTemplateColumns: '64px repeat(7, 1fr)', borderBottom: '1px solid', borderColor: 'divider', pb: 1, mb: 0.5 }}>
                    <Box />
                    {DAYS.map((day, i) => (
                        <Box key={day} sx={{ textAlign: 'center', pb: 0.5 }}>
                            <Typography variant="caption" color="text.secondary" fontWeight={600}>{day}</Typography>
                            <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>{DAY_DATES[i]}</Typography>
                        </Box>
                    ))}
                </Box>

                {/* Time rows */}
                {HOURS.map((hour) => (
                    <Box
                        key={hour}
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: '64px repeat(7, 1fr)',
                            borderBottom: '1px solid',
                            borderColor: 'divider',
                            minHeight: CELL_HEIGHT,
                        }}
                    >
                        {/* Time label */}
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', pt: 0.5 }}>
                            <Typography
                                variant="caption"
                                color={hour === 15 ? 'primary.main' : 'text.disabled'}
                                fontWeight={hour === 15 ? 700 : 400}
                                sx={{ fontSize: 11 }}
                            >
                                {String(hour).padStart(2, '0')}:00
                            </Typography>
                        </Box>

                        {/* Day cells */}
                        {DAYS.map((_, dayIdx) => {
                            const ev = getEvent(dayIdx, hour);
                            const occupied = !ev && isOccupied(dayIdx, hour);
                            const style = ev ? EVENT_STYLES[ev.type] : null;

                            if (occupied) return <Box key={dayIdx} />;

                            return (
                                <Box
                                    key={dayIdx}
                                    sx={{
                                        p: 0.5,
                                        gridRow: ev ? `span ${ev.duration}` : undefined,
                                    }}
                                >
                                    {ev && style && (
                                        <Box
                                            sx={{
                                                height: '100%',
                                                minHeight: CELL_HEIGHT * ev.duration - 4,
                                                bgcolor: style.bgcolor,
                                                border: style.border,
                                                borderRadius: 1.5,
                                                px: 1,
                                                py: 0.75,
                                            }}
                                        >
                                            <Typography variant="caption" sx={{ color: style.color, fontWeight: 700, display: 'block', fontSize: 11 }}>
                                                {style.label}
                                            </Typography>
                                            <Typography variant="caption" sx={{ color: style.color, fontSize: 11, lineHeight: 1.3, whiteSpace: 'pre-line' }}>
                                                {ev.title}
                                            </Typography>
                                        </Box>
                                    )}
                                </Box>
                            );
                        })}
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default function Calendar() {
    const [view, setView] = useState('Week');

    const KEY_ITEMS = [
        { color: '#a78bfa', label: 'Scheduled / Requests' },
        { color: '#818cf8', label: 'Confirmed sessions' },
        { color: '#4ade80', label: 'Availability' },
        { color: '#f87171', label: 'Not available' },
    ];

    const ACTION_CARDS = [
        {
            title: 'Wednesday confirmation',
            desc: 'Confirm or flag unavailable for each session.',
            cta: 'Review confirmations',
        },
        {
            title: 'Respond to requests',
            desc: 'Click purple blocks to mark availability.',
            cta: 'View requests',
        },
        {
            title: 'Noise control',
            desc: 'Turn off learner CC without missing essentials.',
            cta: 'Preferences',
        },
    ];

    return (
        <Box sx={{ px: 4, pt: 3, pb: 6 }}>
            <Card variant="outlined" sx={{ borderRadius: 2 }}>
                <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                    {/* Header */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CalendarMonthOutlinedIcon sx={{ fontSize: 22, color: 'text.primary' }} />
                            <Typography variant="h6" fontWeight={800}>Calendar</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <Button variant="outlined" size="small" sx={{ textTransform: 'none', borderRadius: 2, fontSize: 13 }}>
                                Mark leave
                            </Button>
                            <Button
                                variant="contained"
                                size="small"
                                sx={{
                                    textTransform: 'none',
                                    borderRadius: 2,
                                    fontSize: 13,
                                    bgcolor: '#111827',
                                    '&:hover': { bgcolor: '#1f2937' },
                                }}
                            >
                                Add availability
                            </Button>
                        </Box>
                    </Box>

                    {/* Stats row */}
                    <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mb: 2 }}>
                        {[
                            { label: 'Max sessions/week', value: `${guruProfile.stats.sessions}` },
                            { label: 'Availability through', value: guruProfile.availability.through },
                            { label: 'Requests this week', value: '1' },
                        ].map((item) => (
                            <Chip
                                key={item.label}
                                label={`${item.label}  ${item.value}`}
                                size="small"
                                variant="outlined"
                                sx={{ fontSize: 12, borderRadius: 1.5, fontWeight: 500 }}
                            />
                        ))}
                    </Box>

                    {/* View switcher + nav */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                        <Box
                            sx={{
                                display: 'inline-flex',
                                bgcolor: 'action.hover',
                                borderRadius: 5,
                                p: 0.5,
                            }}
                        >
                            {['Week', 'Month'].map((v) => (
                                <Button
                                    key={v}
                                    size="small"
                                    onClick={() => setView(v)}
                                    sx={{
                                        textTransform: 'none',
                                        fontSize: 13,
                                        fontWeight: view === v ? 700 : 400,
                                        bgcolor: view === v ? '#111827' : 'transparent',
                                        color: view === v ? '#fff' : 'text.secondary',
                                        '&:hover': { bgcolor: view === v ? '#1f2937' : 'action.selected' },
                                        borderRadius: 5,
                                        px: 2,
                                        minHeight: 30,
                                    }}
                                >
                                    {v}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <IconButton size="small"><ChevronLeftIcon /></IconButton>
                            <IconButton size="small"><ChevronRightIcon /></IconButton>
                        </Box>
                    </Box>

                    {/* Date range */}
                    <Chip label="Feb 16–22, 2026" size="small" sx={{ mb: 2, fontWeight: 600 }} />

                    {/* Grid */}
                    <CalendarGrid />

                    {/* Key */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1.5, flexWrap: 'wrap' }}>
                        <Typography variant="caption" color="text.secondary" fontWeight={600}>Key</Typography>
                        {KEY_ITEMS.map((k) => (
                            <Box key={k.label} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: k.color }} />
                                <Typography variant="caption" color="text.secondary">{k.label}</Typography>
                            </Box>
                        ))}
                    </Box>
                </CardContent>
            </Card>

            {/* Action cards */}
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 2, mt: 2 }}>
                {ACTION_CARDS.map((card) => (
                    <Card key={card.title} variant="outlined" sx={{ borderRadius: 2 }}>
                        <CardContent sx={{ p: 2.5, '&:last-child': { pb: 2.5 } }}>
                            <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 0.5 }}>{card.title}</Typography>
                            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1.5 }}>{card.desc}</Typography>
                            <Button
                                variant="contained"
                                size="small"
                                sx={{
                                    textTransform: 'none',
                                    borderRadius: 5,
                                    fontSize: 13,
                                    fontWeight: 600,
                                    bgcolor: '#111827',
                                    '&:hover': { bgcolor: '#1f2937' },
                                }}
                            >
                                {card.cta}
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}
