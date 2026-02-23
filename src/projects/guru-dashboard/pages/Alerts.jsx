import React from 'react';
import {
    Box, Typography, Card, CardContent, Button, Chip, IconButton,
} from '@mui/material';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import BellIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const NOTIFICATIONS = {
    now: [
        {
            id: 'n1',
            icon: AccessTimeOutlinedIcon,
            iconBg: '#ede9fe',
            iconColor: '#7c3aed',
            title: 'Join reminder: session in 30 minutes',
            badge: 'Starts in 30m',
            badgeBg: '#7c3aed',
            desc: 'Your session starts in 30 minutes. Join now to test audio/video and be ready for learners.',
            date: 'Mon, 16 Feb',
            cta: 'Join session',
            unread: true,
        },
    ],
    unread: [
        {
            id: 'n2',
            icon: CheckCircleOutlineIcon,
            iconBg: '#eff6ff',
            iconColor: '#2563eb',
            title: 'Confirm upcoming sessions',
            desc: 'You have upcoming sessions that need confirmation by Wednesday.',
            date: 'Mon, 16 Feb',
            cta: 'Review confirmations',
            unread: true,
        },
        {
            id: 'n3',
            icon: CalendarMonthOutlinedIcon,
            iconBg: '#eff6ff',
            iconColor: '#2563eb',
            title: 'New session request',
            desc: 'Ops added a new slot request for you to respond to.',
            date: 'Mon, 16 Feb',
            cta: 'View requests',
            unread: true,
        },
        {
            id: 'n4',
            icon: AutoStoriesOutlinedIcon,
            iconBg: '#eff6ff',
            iconColor: '#2563eb',
            title: 'Reminder: content is live',
            desc: "This week's session content is now available. Please review before you teach.",
            date: 'Mon, 16 Feb',
            cta: 'Open courses',
            unread: true,
        },
        {
            id: 'n5',
            icon: CalendarMonthOutlinedIcon,
            iconBg: '#eff6ff',
            iconColor: '#2563eb',
            title: 'Schedule updated',
            desc: 'One session time changed. Please re-check your calendar and confirm availability.',
            date: 'Mon, 16 Feb',
            cta: 'View weekly view',
            unread: true,
        },
        {
            id: 'n6',
            icon: WarningAmberOutlinedIcon,
            iconBg: '#fef9c3',
            iconColor: '#b45309',
            title: 'Action needed: mark availability',
            desc: 'Your availability window is ending soon. Extend it to keep getting assigned sessions.',
            date: 'Sun, 15 Feb',
            cta: 'Update availability',
            unread: true,
        },
        {
            id: 'n7',
            icon: WarningAmberOutlinedIcon,
            iconBg: '#fee2e2',
            iconColor: '#dc2626',
            title: 'Conflict detected',
            desc: 'We detected a potential conflict with your connected calendar. Review busy slots.',
            date: 'Sun, 15 Feb',
            cta: 'Review busy',
            unread: true,
        },
    ],
    read: [
        {
            id: 'n8',
            icon: WarningAmberOutlinedIcon,
            iconBg: '#fee2e2',
            iconColor: '#dc2626',
            title: 'Calendar sync tip',
            desc: 'Connect Google Calendar to avoid double-booking.',
            date: 'Sun, 15 Feb',
            cta: 'Open availability',
        },
        {
            id: 'n9',
            icon: PaymentOutlinedIcon,
            iconBg: '#f0fdf4',
            iconColor: '#15803d',
            title: 'Payment update',
            desc: 'An invoice is pending for one of your completed sessions. Check status in the session details.',
            date: 'Sun, 15 Feb',
            cta: 'Open sessions',
        },
        {
            id: 'n10',
            icon: AccessTimeOutlinedIcon,
            iconBg: '#eff6ff',
            iconColor: '#2563eb',
            title: 'Reminder: 30 minutes to go',
            desc: 'Your next session starts in 30 minutes. Join early to set up polls and check chat.',
            date: 'Sat, 14 Feb',
            cta: 'Go to session',
        },
        {
            id: 'n11',
            icon: PeopleOutlinedIcon,
            iconBg: '#faf5ff',
            iconColor: '#7c3aed',
            title: 'New cohort starting soon',
            desc: 'A new cohort begins next month. Keep your availability updated if you want more sessions.',
            date: 'Sat, 14 Feb',
            cta: 'Extend window',
        },
        {
            id: 'n12',
            icon: NotificationsNoneOutlinedIcon,
            iconBg: '#f8fafc',
            iconColor: '#64748b',
            title: 'Ops note',
            desc: 'Please confirm/unavailable by Wednesday so we can reassign in time if needed.',
            date: 'Fri, 13 Feb',
            cta: 'Review confirmations',
        },
        {
            id: 'n13',
            icon: SettingsOutlinedIcon,
            iconBg: '#f8fafc',
            iconColor: '#64748b',
            title: 'Preferences suggestion',
            desc: 'Want fewer emails? Turn off learner CC and batch chatter in Preferences.',
            date: 'Fri, 13 Feb',
            cta: 'Open preferences',
        },
        {
            id: 'n14',
            icon: CheckCircleOutlineIcon,
            iconBg: '#f0fdf4',
            iconColor: '#15803d',
            title: "You're all set",
            desc: 'Nice work — your availability and confirmations look up to date for this week.',
            date: 'Thu, 12 Feb',
            cta: null,
        },
    ],
};

function NotifCard({ notif }) {
    const Icon = notif.icon;
    return (
        <Card
            variant="outlined"
            sx={{
                borderRadius: 2,
                mb: 1.5,
                bgcolor: notif.unread ? 'background.paper' : 'action.hover',
                '&:hover': { bgcolor: 'action.selected' },
                transition: 'background 0.15s',
            }}
        >
            <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {/* Icon */}
                    <Box
                        sx={{
                            width: 38,
                            height: 38,
                            borderRadius: '50%',
                            bgcolor: notif.iconBg,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                        }}
                    >
                        <Icon sx={{ fontSize: 18, color: notif.iconColor }} />
                    </Box>

                    {/* Content */}
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.25 }}>
                            <Typography variant="body2" fontWeight={700}>{notif.title}</Typography>
                            {notif.badge && (
                                <Chip
                                    label={notif.badge}
                                    size="small"
                                    sx={{ bgcolor: notif.badgeBg, color: '#fff', fontWeight: 600, fontSize: 11, height: 20 }}
                                />
                            )}
                            {notif.unread && (
                                <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: '#7c3aed', ml: 'auto', flexShrink: 0 }} />
                            )}
                        </Box>
                        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.25 }}>
                            {notif.desc}
                        </Typography>
                        <Typography variant="caption" color="text.disabled">{notif.date}</Typography>
                    </Box>

                    {/* CTA */}
                    {notif.cta && (
                        <Button
                            variant="contained"
                            size="small"
                            sx={{
                                flexShrink: 0,
                                textTransform: 'none',
                                fontSize: 13,
                                fontWeight: 600,
                                borderRadius: 5,
                                bgcolor: '#111827',
                                '&:hover': { bgcolor: '#1f2937' },
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {notif.cta}
                        </Button>
                    )}
                </Box>
            </CardContent>
        </Card>
    );
}

export default function Alerts() {
    return (
        <Box sx={{ px: 4, pt: 3, pb: 6 }}>
            {/* Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <NotificationsNoneOutlinedIcon sx={{ fontSize: 24 }} />
                    <Typography variant="h6" fontWeight={800}>Notifications</Typography>
                    <Chip label="7 unread" size="small" sx={{ bgcolor: '#7c3aed', color: '#fff', fontWeight: 700, fontSize: 11, height: 22, ml: 0.5 }} />
                </Box>
                <IconButton size="small" title="Mark all read">
                    <DoneAllIcon fontSize="small" />
                </IconButton>
            </Box>

            {/* Happening now */}
            <Typography variant="caption" color="text.secondary" fontWeight={600} sx={{ display: 'block', mb: 1, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                Happening now
            </Typography>
            {NOTIFICATIONS.now.map((n) => <NotifCard key={n.id} notif={n} />)}

            {/* Unread */}
            <Typography variant="caption" color="text.secondary" fontWeight={600} sx={{ display: 'block', mt: 2, mb: 1, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                Unread
            </Typography>
            {NOTIFICATIONS.unread.map((n) => <NotifCard key={n.id} notif={n} />)}

            {/* Read */}
            <Typography variant="caption" color="text.secondary" fontWeight={600} sx={{ display: 'block', mt: 2, mb: 1, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                Read
            </Typography>
            {NOTIFICATIONS.read.map((n) => <NotifCard key={n.id} notif={n} />)}
        </Box>
    );
}
