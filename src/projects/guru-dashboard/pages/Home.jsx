import React, { useState } from 'react';
import {
    Box, Typography, Card, CardContent, Chip, Button, Tabs, Tab, Divider, Stack,
    Accordion, AccordionSummary, AccordionDetails, IconButton, Link,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { sessions, guruProfile } from '../data/guruData';

const PRIORITY_COLOR = { high: '#fef9c3', medium: '#eff6ff', low: '#f8fafc' };

function ImpactAccordion() {
    const [open, setOpen] = useState(false);
    const { avgRating, hoursTaught, sessions: sessionCount } = guruProfile.stats;
    return (
        <Card variant="outlined" sx={{ mb: 2, borderRadius: 2 }}>
            <Box
                onClick={() => setOpen(!open)}
                sx={{ px: 2.5, py: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
            >
                <Box>
                    <Typography variant="subtitle2" fontWeight={700}>Your Impact</Typography>
                    <Typography variant="caption" color="text.secondary">
                        Avg Ratings: {avgRating} · Hours taught: {hoursTaught} · Sessions: {sessionCount}
                    </Typography>
                </Box>
                <ExpandMoreIcon sx={{ transform: open ? 'rotate(180deg)' : 'none', transition: '0.2s', color: 'text.secondary' }} />
            </Box>
            {open && (
                <Box sx={{ px: 2.5, pb: 2, display: 'flex', gap: 3 }}>
                    {[
                        { label: 'Avg rating', value: avgRating, sub: '+0.26 MoM', color: '#16a34a' },
                        { label: 'Hours taught', value: hoursTaught, sub: 'This cycle' },
                        { label: 'Sessions', value: sessionCount, sub: 'Confirmed' },
                        { label: 'Coverage', value: `${guruProfile.stats.coverage}%`, sub: 'No gaps' },
                        { label: 'NPS proxy', value: `${guruProfile.stats.npsProxy}`, sub: 'Top quartile' },
                    ].map((item) => (
                        <Box key={item.label}>
                            <Typography variant="h5" fontWeight={700}>{item.value}</Typography>
                            <Typography variant="caption" color="text.secondary">{item.label}</Typography>
                            {item.sub && <Typography variant="caption" sx={{ display: 'block', color: item.color || 'text.disabled', fontSize: 11 }}>{item.sub}</Typography>}
                        </Box>
                    ))}
                </Box>
            )}
        </Card>
    );
}

function SessionCard({ session, type }) {
    const isFirst = type === 'upcoming' && session.priority === 'high';
    return (
        <Card
            variant="outlined"
            sx={{
                mb: 2,
                borderRadius: 2,
                bgcolor: isFirst ? '#ffffff' : 'background.paper',
                boxShadow: isFirst ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
            }}
        >
            <CardContent sx={{ p: 2.5, '&:last-child': { pb: 2.5 } }}>
                {/* Label row */}
                {type === 'upcoming' && (
                    <Typography variant="caption" color="text.disabled" sx={{ display: 'block', mb: 0.5 }}>
                        {session.id === 's1' ? 'Next session' : 'Up next'}
                    </Typography>
                )}
                <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 0.25 }}>
                    {session.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                    {session.date} · {session.time}{session.group ? ` · ${session.group}` : ''}{session.note ? ` (${session.note})` : ''}
                </Typography>

                {/* Tags */}
                <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap', mb: 2 }}>
                    {session.tags?.map((tag) => (
                        <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{ bgcolor: 'action.hover', fontSize: 11, height: 22 }}
                        />
                    ))}
                </Box>

                {type === 'upcoming' ? (
                    <>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <Button
                                    variant="contained"
                                    size="small"
                                    startIcon={<VideoCallOutlinedIcon />}
                                    href={session.joinUrl}
                                    sx={{
                                        bgcolor: '#1d4ed8',
                                        '&:hover': { bgcolor: '#1e40af' },
                                        borderRadius: 5,
                                        textTransform: 'none',
                                        fontSize: 13,
                                        fontWeight: 600,
                                        px: 2,
                                    }}
                                >
                                    Join link
                                </Button>
                            </Box>
                            <Link
                                href={session.groupUrl}
                                underline="hover"
                                sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary', fontSize: 13 }}
                            >
                                <ArticleOutlinedIcon sx={{ fontSize: 16 }} /> Group profile
                            </Link>
                        </Box>

                        {/* Session polls */}
                        {session.id === 's1' && (
                            <Box
                                sx={{
                                    mt: 2,
                                    pt: 2,
                                    borderTop: '1px solid',
                                    borderColor: 'divider',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Box>
                                    <Typography variant="body2" fontWeight={600}>Session polls</Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        Create quick polls and queue them to Zoom for release during the session.
                                    </Typography>
                                </Box>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    startIcon={<PollOutlinedIcon />}
                                    sx={{ textTransform: 'none', borderRadius: 2, fontSize: 13 }}
                                >
                                    Create poll
                                </Button>
                            </Box>
                        )}
                    </>
                ) : (
                    <Typography variant="body2" color="text.secondary">Completed</Typography>
                )}
            </CardContent>
        </Card>
    );
}

function ScheduledSection() {
    return (
        <Box sx={{ mt: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography variant="subtitle2" fontWeight={700}>Scheduled sessions</Typography>
                <Chip label="5 scheduled" size="small" sx={{ bgcolor: 'action.hover', fontSize: 11 }} />
            </Box>
            <Box
                sx={{
                    px: 2,
                    py: 1,
                    mb: 2,
                    bgcolor: '#fffbeb',
                    border: '1px solid #fde68a',
                    borderRadius: 1.5,
                }}
            >
                <Typography variant="caption" sx={{ color: '#b45309', fontWeight: 500 }}>
                    Confirm by Wednesday, 6:00 PM to help ops finalize allocations.
                </Typography>
            </Box>
            {sessions.upcoming.map((s) => (
                <Card key={s.id} variant="outlined" sx={{ mb: 2, borderRadius: 2 }}>
                    <CardContent sx={{ p: 2.5, '&:last-child': { pb: 2.5 } }}>
                        <Typography variant="subtitle2" fontWeight={700}>{s.title}</Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                            {s.date} · {s.time}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 0.75, mb: 2 }}>
                            {s.tags?.slice(0, 2).map((t) => (
                                <Chip key={t} label={t} size="small" sx={{ bgcolor: 'action.hover', fontSize: 11, height: 22 }} />
                            ))}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <Button
                                    variant="contained"
                                    size="small"
                                    startIcon={<CheckCircleOutlineIcon />}
                                    sx={{
                                        bgcolor: '#1d4ed8',
                                        '&:hover': { bgcolor: '#1e40af' },
                                        borderRadius: 5,
                                        textTransform: 'none',
                                        fontSize: 13,
                                    }}
                                >
                                    Confirm
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    startIcon={<AccessTimeIcon />}
                                    sx={{ borderRadius: 5, textTransform: 'none', fontSize: 13, color: 'text.secondary', borderColor: 'divider' }}
                                >
                                    I'm unavailable
                                </Button>
                            </Box>
                            <Link underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary', fontSize: 13 }}>
                                <ArticleOutlinedIcon sx={{ fontSize: 16 }} /> Group profile
                            </Link>
                        </Box>
                    </CardContent>
                </Card>
            ))}

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography variant="subtitle2" fontWeight={700}>Confirmed sessions</Typography>
                <Chip label="0 confirmed" size="small" sx={{ bgcolor: 'action.hover', fontSize: 11 }} />
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ py: 1 }}>No confirmed sessions.</Typography>
        </Box>
    );
}

function TasksSidebar() {
    const tasks = [
        {
            id: 1,
            tag: 'Needs update',
            tagColor: '#ef4444',
            title: 'Add your availability',
            desc: 'Keep availability up-to-date for next 60 days. Suggestion: add your availability to start receiving matching session slots.',
            cta: 'Update availability',
            ctaVariant: 'contained',
        },
        {
            id: 2,
            tag: 'Action needed',
            tagColor: '#f97316',
            meta: 'Confirmed 0 / 7',
            title: 'Confirm sessions by Wednesday',
            desc: 'Ops needs clarity ~72 hours before weekend sessions.',
            cta: 'Review confirmations',
            ctaVariant: 'contained',
        },
        {
            id: 3,
            badge: 3,
            title: 'Respond to upcoming requests',
            desc: 'Indicate availability against real upcoming slots.',
            cta: 'Review calendar',
            ctaVariant: 'contained',
        },
    ];

    return (
        <Box sx={{ width: 280, flexShrink: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <TrendingUpIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                <Typography variant="subtitle2" fontWeight={700}>Tasks</Typography>
            </Box>
            <Stack spacing={1.5}>
                {tasks.map((task) => (
                    <Card key={task.id} variant="outlined" sx={{ borderRadius: 2 }}>
                        <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 0.75 }}>
                                {task.tag && (
                                    <Chip
                                        label={task.tag}
                                        size="small"
                                        sx={{ bgcolor: `${task.tagColor}15`, color: task.tagColor, fontWeight: 600, fontSize: 11, height: 20 }}
                                    />
                                )}
                                {task.badge && (
                                    <Chip
                                        label={task.badge}
                                        size="small"
                                        sx={{ bgcolor: '#7c3aed', color: '#fff', fontWeight: 700, fontSize: 12, height: 22, width: 22, borderRadius: '50%' }}
                                    />
                                )}
                                {task.meta && (
                                    <Typography variant="caption" color="text.disabled">{task.meta}</Typography>
                                )}
                            </Box>
                            <Typography variant="body2" fontWeight={700} sx={{ mb: 0.5 }}>{task.title}</Typography>
                            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1.5, lineHeight: 1.4 }}>
                                {task.desc}
                            </Typography>
                            <Button
                                variant={task.ctaVariant}
                                size="small"
                                fullWidth
                                sx={{
                                    textTransform: 'none',
                                    fontSize: 13,
                                    fontWeight: 600,
                                    borderRadius: 5,
                                    bgcolor: task.ctaVariant === 'contained' ? '#111827' : undefined,
                                    '&:hover': { bgcolor: task.ctaVariant === 'contained' ? '#1f2937' : undefined },
                                }}
                            >
                                {task.cta}
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Box>
    );
}

export default function Home() {
    const [tab, setTab] = useState(0);

    return (
        <Box sx={{ px: 4, pt: 3, pb: 6 }}>
            <ImpactAccordion />

            {/* Tabs row */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Box sx={{ display: 'flex', gap: 0.5 }}>
                    {['Upcoming (5)', 'Completed (2)', 'Declined (0)'].map((label, i) => (
                        <Button
                            key={label}
                            onClick={() => setTab(i)}
                            variant={tab === i ? 'contained' : 'text'}
                            size="small"
                            sx={{
                                textTransform: 'none',
                                borderRadius: 5,
                                fontSize: 13,
                                fontWeight: tab === i ? 700 : 500,
                                bgcolor: tab === i ? '#111827' : 'transparent',
                                color: tab === i ? '#fff' : 'text.secondary',
                                '&:hover': { bgcolor: tab === i ? '#1f2937' : 'action.hover' },
                                px: 2,
                            }}
                        >
                            {label}
                        </Button>
                    ))}
                </Box>
                <Button
                    variant="outlined"
                    size="small"
                    sx={{ textTransform: 'none', borderRadius: 2, fontSize: 13 }}
                >
                    View calendar
                </Button>
            </Box>

            {/* Sessions + Tasks two-column layout */}
            <Box>
                <Typography variant="subtitle1" fontWeight={700}>Sessions</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Quick access to upcoming, confirmations, and history.
                </Typography>

                <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
                    {/* Left: session details */}
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                        {tab === 0 && (
                            <>
                                <SessionCard session={sessions.upcoming[0]} type="upcoming" />
                                <ScheduledSection />
                            </>
                        )}
                        {tab === 1 && sessions.completed.map((s) => (
                            <SessionCard key={s.id} session={s} type="completed" />
                        ))}
                        {tab === 2 && (
                            <Typography variant="body2" color="text.secondary">No declined sessions.</Typography>
                        )}
                    </Box>

                    {/* Right: Tasks sidebar */}
                    <TasksSidebar />
                </Box>
            </Box>
        </Box>
    );
}
