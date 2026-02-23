import React from 'react';
import {
    Box, Typography, Card, CardContent, Button, Chip, Divider,
} from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { guruProfile } from '../data/guruData';

const STATS = [
    { label: 'Avg rating', value: '4.81', sub: null },
    { label: 'MoM change', value: '+0.26', sub: null, color: '#16a34a' },
    { label: 'Rated sessions', value: '4', sub: null },
    { label: 'Coverage', value: '100%', sub: null, color: '#16a34a' },
    { label: 'NPS (proxy)', value: '91', sub: null, color: '#2563eb' },
];

const MONTHS = ['Sept 25', 'Oct 25', 'Nov 25', 'Dec 25', 'Jan 26', 'Feb 26'];
const RATINGS = [4.3, 4.35, 4.4, 4.45, 4.55, 4.81];

const COURSES_PERF = [
    { name: 'Excel Foundations', rating: 4.90, pct: 100 },
    { name: 'Intro & Orientation', rating: 4.85, pct: 98 },
    { name: 'Python Basics', rating: 4.80, pct: 96 },
    { name: 'SQL Practice', rating: 4.70, pct: 94 },
    { name: 'Statistics Foundations', rating: 4.65, pct: 92 },
    { name: 'Data Viz Deep Dive', rating: 4.60, pct: 90 },
    { name: 'Regression Essentials', rating: 4.50, pct: 86 },
    { name: 'Probability Refresher', rating: 4.45, pct: 83 },
];

const HEATMAP_COURSES = [
    'Excel Foundations', 'Intro & Orientation', 'Python Basics', 'SQL Practice',
    'Statistics Foundations', 'Data Viz Deep Dive', 'Regression Essentials',
    'Probability Refresher', 'Exploratory Data Analysis', 'Feature Engineering',
];

const HEATMAP_DATA = {
    'Excel Foundations': { 'Feb 26': 4.90 },
    'Intro & Orientation': { 'Feb 26': 4.85 },
    'Python Basics': { 'Feb 26': 4.80 },
    'SQL Practice': { 'Feb 26': 4.70 },
    'Statistics Foundations': { 'Jan 26': 4.65 },
    'Data Viz Deep Dive': { 'Jan 26': 4.60 },
    'Regression Essentials': { 'Jan 26': 4.50 },
    'Probability Refresher': { 'Jan 26': 4.45 },
    'Exploratory Data Analysis': { 'Dec 25': 4.40 },
    'Feature Engineering': { 'Dec 25': 4.35 },
};

function ratingColor(r) {
    if (r >= 4.8) return '#15803d';
    if (r >= 4.6) return '#22c55e';
    if (r >= 4.4) return '#86efac';
    if (r >= 4.2) return '#fde68a';
    return '#fca5a5';
}

function RatingChart() {
    const W = 540;
    const H = 140;
    const PAD = { top: 16, bottom: 32, left: 36, right: 16 };
    const chartW = W - PAD.left - PAD.right;
    const chartH = H - PAD.top - PAD.bottom;
    const minR = 4.2;
    const maxR = 5.0;

    const x = (i) => PAD.left + (i / (MONTHS.length - 1)) * chartW;
    const y = (r) => PAD.top + chartH - ((r - minR) / (maxR - minR)) * chartH;

    const pts = RATINGS.map((r, i) => `${x(i)},${y(r)}`).join(' ');
    const areaPath = `M${x(0)},${y(RATINGS[0])} ` +
        RATINGS.map((r, i) => `L${x(i)},${y(r)}`).join(' ') +
        ` L${x(RATINGS.length - 1)},${H - PAD.bottom} L${x(0)},${H - PAD.bottom} Z`;

    return (
        <Box sx={{ overflowX: 'auto', mt: 1 }}>
            <svg width={W} height={H} style={{ display: 'block' }}>
                {/* Grid lines */}
                {[4.3, 4.5, 4.8].map((r) => (
                    <g key={r}>
                        <line x1={PAD.left} y1={y(r)} x2={W - PAD.right} y2={y(r)} stroke="#e2e8f0" strokeWidth={1} />
                        <text x={PAD.left - 4} y={y(r) + 4} fill="#94a3b8" fontSize={10} textAnchor="end">{r}</text>
                    </g>
                ))}
                {/* Area fill */}
                <path d={areaPath} fill="#bfdbfe" opacity={0.4} />
                {/* Line */}
                <polyline points={pts} fill="none" stroke="#2563eb" strokeWidth={2} />
                {/* Points */}
                {RATINGS.map((r, i) => (
                    <circle key={i} cx={x(i)} cy={y(r)} r={4} fill="#fff" stroke="#2563eb" strokeWidth={2} />
                ))}
                {/* X labels */}
                {MONTHS.map((m, i) => (
                    <text key={m} x={x(i)} y={H - 4} fill="#94a3b8" fontSize={10} textAnchor="middle">{m}</text>
                ))}
                {/* Avg label */}
                <text x={W - PAD.right} y={y(4.4) - 4} fill="#64748b" fontSize={10} textAnchor="end">Avg 4.4</text>
            </svg>
            <Typography variant="caption" color="text.disabled" sx={{ mt: 0.5, display: 'block' }}>
                Insight: Biggest gain: Jan 26 → Feb 26 (+0.26)
            </Typography>
        </Box>
    );
}

function CoursePerformance() {
    return (
        <Box>
            {COURSES_PERF.map((c) => (
                <Box key={c.name} sx={{ mb: 1.25 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.25 }}>
                        <Typography variant="caption" color="text.secondary">{c.name}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography variant="caption" fontWeight={700}>{c.rating.toFixed(2)}</Typography>
                            <Typography variant="caption" color="text.disabled" sx={{ fontSize: 10 }}>≈ +0.00</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ height: 8, bgcolor: 'action.hover', borderRadius: 1 }}>
                        <Box
                            sx={{
                                height: '100%',
                                width: `${c.pct}%`,
                                bgcolor: '#2563eb',
                                borderRadius: 1,
                            }}
                        />
                    </Box>
                </Box>
            ))}
        </Box>
    );
}

function HeatmapTable() {
    const months = ['Sept 25', 'Oct 25', 'Nov 25', 'Dec 25', 'Jan 26', 'Feb 26'];
    return (
        <Box sx={{ overflowX: 'auto', mt: 1 }}>
            <Box sx={{ minWidth: 600 }}>
                {/* Header */}
                <Box sx={{ display: 'grid', gridTemplateColumns: `160px repeat(${months.length}, 1fr)`, mb: 0.5 }}>
                    <Typography variant="caption" color="text.disabled" fontWeight={600}>Course</Typography>
                    {months.map((m) => (
                        <Typography key={m} variant="caption" color="text.disabled" fontWeight={600} sx={{ textAlign: 'center' }}>{m}</Typography>
                    ))}
                </Box>
                <Divider sx={{ mb: 1 }} />
                {HEATMAP_COURSES.map((course) => (
                    <Box
                        key={course}
                        sx={{ display: 'grid', gridTemplateColumns: `160px repeat(${months.length}, 1fr)`, mb: 0.75, alignItems: 'center' }}
                    >
                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: 11 }}>{course}</Typography>
                        {months.map((m) => {
                            const val = HEATMAP_DATA[course]?.[m];
                            return (
                                <Box key={m} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    {val ? (
                                        <Box
                                            sx={{
                                                px: 1.5,
                                                py: 0.5,
                                                borderRadius: 1,
                                                bgcolor: ratingColor(val),
                                                minWidth: 48,
                                                textAlign: 'center',
                                            }}
                                        >
                                            <Typography variant="caption" fontWeight={700} sx={{ color: val >= 4.6 ? '#fff' : '#1e293b', fontSize: 11 }}>
                                                {val.toFixed(2)}
                                            </Typography>
                                        </Box>
                                    ) : (
                                        <Typography variant="caption" color="text.disabled">–</Typography>
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

export default function Profile() {
    return (
        <Box sx={{ px: 4, pt: 3, pb: 6 }}>
            {/* Your details */}
            <Card variant="outlined" sx={{ borderRadius: 2, mb: 2 }}>
                <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                        <PersonOutlineOutlinedIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
                        <Typography variant="subtitle1" fontWeight={700}>Your details</Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
                        Basic info used for sessions and ops coordination.
                    </Typography>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
                        {[
                            { label: 'Name', value: guruProfile.name },
                            { label: 'Timezone', value: 'Asia/Calcutta (GMT+5:30)' },
                            { label: 'Primary mode', value: guruProfile.primaryMode },
                            { label: 'Programs', value: guruProfile.programs.join(', ') },
                        ].map((f) => (
                            <Box
                                key={f.label}
                                sx={{ py: 1.5, px: 2, border: '1px solid', borderColor: 'divider', '&:nth-of-type(odd)': { borderRight: 0 } }}
                            >
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.25 }}>{f.label}</Typography>
                                <Typography variant="body2" fontWeight={700}>{f.value}</Typography>
                            </Box>
                        ))}
                    </Box>
                    <Box sx={{ mt: 2, px: 2, py: 1, bgcolor: 'action.hover', borderRadius: 1.5 }}>
                        <Typography variant="caption" color="text.disabled">
                            Prototype note: profile editing is not implemented here.
                        </Typography>
                    </Box>
                </CardContent>
            </Card>

            {/* Performance */}
            <Card variant="outlined" sx={{ borderRadius: 2 }}>
                <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.25 }}>
                        <TrendingUpIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
                        <Typography variant="subtitle1" fontWeight={700}>Performance</Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
                        Understand trends quickly and drill into course-level patterns.
                    </Typography>

                    {/* Stat row */}
                    <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', mb: 3 }}>
                        {STATS.map((s) => (
                            <Box key={s.label}>
                                <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>{s.label}</Typography>
                                <Typography variant="h5" fontWeight={700} sx={{ color: s.color || 'text.primary' }}>{s.value}</Typography>
                            </Box>
                        ))}
                    </Box>

                    {/* Rating trend */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Typography variant="subtitle2" fontWeight={700}>Rating trend (last 6 months)</Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <Chip label="Course" size="small" sx={{ bgcolor: '#eff6ff', color: '#2563eb', fontWeight: 600, fontSize: 11, height: 22 }} />
                            <Chip label="Program" size="small" sx={{ bgcolor: 'action.hover', fontWeight: 600, fontSize: 11, height: 22 }} />
                        </Box>
                    </Box>
                    <RatingChart />

                    <Divider sx={{ my: 3 }} />

                    {/* Course performance */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography variant="subtitle2" fontWeight={700}>Course performance (top 8)</Typography>
                        <Button size="small" sx={{ textTransform: 'none', fontSize: 13, color: 'text.secondary' }}>View full</Button>
                    </Box>
                    <CoursePerformance />

                    <Divider sx={{ my: 3 }} />

                    {/* Heatmap */}
                    <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 1 }}>Monthly matrix (compact heatmap)</Typography>
                    <HeatmapTable />
                </CardContent>
            </Card>
        </Box>
    );
}
