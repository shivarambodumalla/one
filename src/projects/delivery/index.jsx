import React, { useState } from 'react';
import {
    Box, Typography, Chip, Button, IconButton, Divider, Avatar, Collapse,
} from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { TEMPLATE, DELIVERIES } from './data';

// ─── Helpers ─────────────────────────────────────────────────────────────────

const ITEM_STYLE = {
    Video: { icon: PlayCircleOutlineIcon, label: 'Video', bg: '#EFF6FF', color: '#1d4ed8' },
    Slides: { icon: SlideshowOutlinedIcon, label: 'Slides', bg: '#F5F3FF', color: '#6d28d9' },
    Assessment: { icon: AssignmentOutlinedIcon, label: 'Assessment', bg: '#FFF7ED', color: '#c2410c' },
    Doc: { icon: DescriptionOutlinedIcon, label: 'Doc', bg: '#F0FDF4', color: '#15803d' },
    Quiz: { icon: QuizOutlinedIcon, label: 'Quiz', bg: '#FEF9C3', color: '#92400e' },
    Page: { icon: LinkOutlinedIcon, label: 'Page', bg: '#F8FAFC', color: '#475569' },
};

const totalItems = (courses) =>
    courses.reduce((acc, c) => acc + c.modules.reduce((a, m) => a + m.items.length, 0), 0);

// ─── Sub-components ──────────────────────────────────────────────────────────

function TopNav() {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', px: 2.5, borderBottom: '1px solid #E5E7EB', bgcolor: '#fff', height: 48, flexShrink: 0 }}>
            {['Engagement', 'Activities', 'Learners', 'Courses', 'Groups/Cohorts', 'Feedback'].map((tab) => (
                <Button key={tab} size="small" sx={{ textTransform: 'none', color: '#6B7280', fontWeight: 500, fontSize: 14, px: 1.5, borderRadius: 0, minHeight: 48, '&:hover': { bgcolor: '#F9FAFB' } }}>
                    {tab}
                </Button>
            ))}
            <Button size="small" sx={{ textTransform: 'none', color: '#1d4ed8', fontWeight: 700, fontSize: 14, px: 1.5, borderRadius: 0, minHeight: 48, borderBottom: '2px solid #1d4ed8' }}>
                Delivery Plan
            </Button>
            <Button size="small" endIcon={<KeyboardArrowDownIcon sx={{ fontSize: 16 }} />} sx={{ textTransform: 'none', color: '#6B7280', fontWeight: 500, fontSize: 14, px: 1.5, borderRadius: 0, minHeight: 48, '&:hover': { bgcolor: '#F9FAFB' } }}>
                More
            </Button>
        </Box>
    );
}

function DeliveryCard({ item, selected, onClick }) {
    const meta = `${item.courseCount} ${item.courseCount === 1 ? 'Course' : 'Courses'} · ${item.weeks} ${item.weeks === 1 ? 'Week' : 'Weeks'}`;
    return (
        <Box
            onClick={onClick}
            sx={{
                px: 2, py: 1.5, cursor: 'pointer',
                borderLeft: selected ? '3px solid #1d4ed8' : '3px solid transparent',
                bgcolor: selected ? '#EFF6FF' : 'transparent',
                '&:hover': { bgcolor: selected ? '#EFF6FF' : '#F9FAFB' },
                transition: 'background 0.1s',
            }}
        >
            <Typography variant="body2" fontWeight={selected ? 700 : 500} color="text.primary" sx={{ fontSize: 14 }}>
                {item.name}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ fontSize: 12 }}>{meta}</Typography>
        </Box>
    );
}

function ItemRow({ item }) {
    const style = ITEM_STYLE[item.type] || ITEM_STYLE.Page;
    const Icon = style.icon;
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, py: 0.75, px: 1, borderRadius: 1, '&:hover': { bgcolor: '#F9FAFB' } }}>
            <Box sx={{ width: 28, height: 28, borderRadius: 1, bgcolor: style.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon sx={{ fontSize: 15, color: style.color }} />
            </Box>
            <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography variant="body2" sx={{ fontSize: 13, color: '#374151', lineHeight: 1.4 }}>{item.title}</Typography>
            </Box>
            <Chip label={item.type} size="small" sx={{ bgcolor: style.bg, color: style.color, fontWeight: 600, fontSize: 10, height: 18, borderRadius: 1, flexShrink: 0 }} />
        </Box>
    );
}

function ModuleAccordion({ module }) {
    const [open, setOpen] = useState(true);
    return (
        <Box sx={{ mb: 1, border: '1px solid #E5E7EB', borderRadius: 1.5, overflow: 'hidden', bgcolor: '#fff' }}>
            <Box
                onClick={() => setOpen(!open)}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, py: 1.25, cursor: 'pointer', bgcolor: '#FAFAFA', '&:hover': { bgcolor: '#F3F4F6' } }}
            >
                <Box>
                    <Typography variant="body2" fontWeight={700} sx={{ fontSize: 14 }}>{module.name}</Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ fontSize: 11 }}>{module.items.length} items</Typography>
                </Box>
                <IconButton size="small" sx={{ p: 0.25 }}>
                    {open ? <ExpandLessIcon sx={{ fontSize: 18 }} /> : <ExpandMoreIcon sx={{ fontSize: 18 }} />}
                </IconButton>
            </Box>
            <Collapse in={open}>
                <Box sx={{ px: 1.5, py: 1 }}>
                    {module.items.map((item, i) => (
                        <ItemRow key={i} item={item} />
                    ))}
                </Box>
            </Collapse>
        </Box>
    );
}

function CourseSection({ course }) {
    const [open, setOpen] = useState(true);
    return (
        <Box sx={{ mb: 3 }}>
            {/* Course header */}
            <Box
                onClick={() => setOpen(!open)}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5, cursor: 'pointer' }}
            >
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography sx={{ fontSize: 14 }}>📘</Typography>
                        <Typography variant="subtitle2" fontWeight={800} sx={{ fontSize: 15 }}>{course.title}</Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary" sx={{ pl: 3, fontSize: 12 }}>
                        {course.moduleCount} {course.moduleCount === 1 ? 'Module' : 'Modules'}
                    </Typography>
                </Box>
                <IconButton size="small">
                    {open ? <ExpandLessIcon sx={{ fontSize: 18 }} /> : <ExpandMoreIcon sx={{ fontSize: 18 }} />}
                </IconButton>
            </Box>

            <Collapse in={open}>
                <Typography variant="caption" sx={{ fontWeight: 800, fontSize: 11, letterSpacing: 0.8, color: '#1d4ed8', textTransform: 'uppercase', display: 'block', mb: 1 }}>
                    Contents
                </Typography>
                {course.modules.map((mod) => (
                    <ModuleAccordion key={mod.id} module={mod} />
                ))}
            </Collapse>
        </Box>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ContentDeliveryApp() {
    const [selectedId, setSelectedId] = useState(0);
    const selected = DELIVERIES.find((d) => d.id === selectedId) || DELIVERIES[0];
    const totalDeliveries = DELIVERIES.length;

    const sidebarItems = [
        { icon: '⊞', label: 'Dashboard' },
        { icon: '👥', label: 'Batches', active: true },
        { icon: '🎓', label: 'Programs' },
        { icon: '👤', label: 'Learners' },
        { icon: '📹', label: 'Gurus' },
        { icon: '⚙', label: 'Admin' },
        { icon: '💳', label: 'Payments' },
        { icon: '❓', label: 'Support' },
        { icon: '💬', label: 'Community' },
        { icon: '📊', label: 'Reports' },
        { icon: '📄', label: 'Content' },
        { icon: '🚀', label: 'Excelerate' },
    ];

    return (
        <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: '#F5F7FA' }}>

            {/* ── Icon Sidebar ── */}
            <Box sx={{ width: 72, flexShrink: 0, bgcolor: '#fff', borderRight: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 1.5, gap: 0.5, overflowY: 'auto' }}>
                {sidebarItems.map((item) => (
                    <Box
                        key={item.label}
                        sx={{ width: 56, py: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.25, borderRadius: 1.5, bgcolor: item.active ? '#EFF6FF' : 'transparent', cursor: 'pointer', '&:hover': { bgcolor: item.active ? '#DBEAFE' : '#F9FAFB' } }}
                    >
                        <Typography sx={{ fontSize: 18, lineHeight: 1 }}>{item.icon}</Typography>
                        <Typography variant="caption" sx={{ fontSize: 10, color: item.active ? '#1d4ed8' : '#6B7280', fontWeight: item.active ? 700 : 400, textAlign: 'center', lineHeight: 1.2 }}>
                            {item.label}
                        </Typography>
                    </Box>
                ))}
            </Box>

            {/* ── Main area ── */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

                {/* Header */}
                <Box sx={{ px: 3, py: 1.5, bgcolor: '#fff', borderBottom: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', gap: 2, flexShrink: 0 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexShrink: 0 }}>
                        <Avatar sx={{ width: 22, height: 22, bgcolor: '#1d4ed8', fontSize: 12 }}>G</Avatar>
                        <Typography variant="body2" fontWeight={700} sx={{ fontSize: 14 }}>{TEMPLATE.name}</Typography>
                    </Box>
                    <Box sx={{ flex: 1 }} />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 1.5, py: 0.5, border: '1px solid #E5E7EB', borderRadius: 5, minWidth: 180 }}>
                        <Typography variant="caption" color="text.disabled" sx={{ fontSize: 13 }}>Search</Typography>
                    </Box>
                    <Avatar sx={{ width: 28, height: 28, bgcolor: '#E5E7EB', color: '#374151', fontSize: 12, cursor: 'pointer' }}>S</Avatar>
                </Box>

                {/* Tabs */}
                <TopNav />

                {/* Title bar */}
                <Box sx={{ px: 3, py: 1.5, bgcolor: '#fff', borderBottom: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', gap: 2, flexShrink: 0, flexWrap: 'wrap' }}>
                    <Typography variant="h6" fontWeight={800} sx={{ fontSize: 20 }}>Delivery Plan</Typography>
                    <Button
                        size="small"
                        endIcon={<KeyboardArrowDownIcon sx={{ fontSize: 14 }} />}
                        sx={{ textTransform: 'none', bgcolor: '#F3F4F6', color: '#374151', fontWeight: 600, fontSize: 13, borderRadius: 5, px: 1.5, py: 0.25, minHeight: 0, '&:hover': { bgcolor: '#E5E7EB' } }}
                    >
                        Latest
                    </Button>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1, flexWrap: 'wrap' }}>
                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: 13 }}>{totalDeliveries} Deliveries</Typography>
                        <Typography variant="caption" color="text.disabled">·</Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ fontSize: 13 }}>{TEMPLATE.totalWeeks} Weeks</Typography>
                        <Typography variant="caption" color="text.disabled">·</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <WarningAmberIcon sx={{ fontSize: 14, color: '#F97316' }} />
                            <Typography variant="caption" sx={{ fontSize: 13, color: '#F97316' }}>Some Untagged Modules</Typography>
                        </Box>
                        <Typography variant="caption" color="text.disabled">·</Typography>
                        <Typography variant="caption" sx={{ fontSize: 13, color: '#1d4ed8', cursor: 'pointer', fontWeight: 600 }}>VIEW</Typography>
                    </Box>
                    <Button
                        variant="contained"
                        size="small"
                        startIcon={<EditOutlinedIcon sx={{ fontSize: 15 }} />}
                        sx={{ bgcolor: '#1d4ed8', '&:hover': { bgcolor: '#1e40af' }, textTransform: 'none', fontWeight: 700, fontSize: 13, borderRadius: 1.5, px: 2 }}
                    >
                        EDIT
                    </Button>
                </Box>

                {/* Two-column workspace */}
                <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

                    {/* Left: Delivery list */}
                    <Box sx={{ width: 240, flexShrink: 0, borderRight: '1px solid #E5E7EB', bgcolor: '#fff', overflowY: 'auto' }}>
                        {DELIVERIES.map((item, i) => (
                            <React.Fragment key={item.id}>
                                <DeliveryCard
                                    item={item}
                                    selected={selectedId === item.id}
                                    onClick={() => setSelectedId(item.id)}
                                />
                                {i < DELIVERIES.length - 1 && <Divider />}
                            </React.Fragment>
                        ))}
                    </Box>

                    {/* Right: Detail view */}
                    <Box sx={{ flex: 1, overflowY: 'auto', px: 3, py: 2.5 }}>
                        {/* Delivery header */}
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 0.5 }}>
                            <Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.25 }}>
                                    <Typography variant="h6" fontWeight={800} sx={{ fontSize: 18 }}>{selected.name}</Typography>
                                    <Chip label={`${selected.weeks} ${selected.weeks === 1 ? 'Week' : 'Weeks'}`} size="small" sx={{ fontWeight: 600, fontSize: 11, height: 22 }} />
                                    <Chip label={`${selected.courseCount} ${selected.courseCount === 1 ? 'Course' : 'Courses'}`} size="small" sx={{ fontWeight: 600, fontSize: 11, height: 22 }} />
                                </Box>
                                <Typography variant="caption" color="text.secondary">
                                    {totalItems(selected.courses)} total items
                                </Typography>
                            </Box>
                        </Box>

                        <Divider sx={{ my: 2 }} />

                        {/* Courses */}
                        {selected.courses.map((course) => (
                            <CourseSection key={course.id} course={course} />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
