import React from 'react';
import {
    Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
    Typography, IconButton, Divider, Badge, Tooltip, Avatar,
} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate, useLocation } from 'react-router-dom';

const DRAWER_WIDTH = 240;
const COLLAPSED_WIDTH = 64;

const NAV_ITEMS = [
    { label: 'Home', icon: HomeOutlinedIcon, path: '/guru-dashboard' },
    { label: 'Courses', icon: AutoStoriesOutlinedIcon, path: '/guru-dashboard/courses', badge: 1, badgeColor: 'error' },
    { label: 'Calendar', icon: CalendarMonthOutlinedIcon, path: '/guru-dashboard/calendar' },
    { label: 'Alerts', icon: NotificationsNoneOutlinedIcon, path: '/guru-dashboard/alerts', badge: 7, badgeColor: 'secondary' },
];

const BOTTOM_ITEMS = [
    { label: 'Profile', icon: PersonOutlineOutlinedIcon, path: '/guru-dashboard/profile' },
    { label: 'Preferences', icon: SettingsOutlinedIcon, path: '/guru-dashboard/preferences' },
];

export default function Sidebar({ collapsed, onToggleCollapse, darkMode, onToggleDark }) {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => {
        if (path === '/guru-dashboard') return location.pathname === '/guru-dashboard' || location.pathname === '/guru-dashboard/';
        return location.pathname.startsWith(path);
    };

    const NavButton = ({ item }) => {
        const active = isActive(item.path);
        const Icon = item.icon;
        return (
            <ListItem disablePadding sx={{ mb: 0.25 }}>
                <Tooltip title={collapsed ? item.label : ''} placement="right">
                    <ListItemButton
                        onClick={() => navigate(item.path)}
                        sx={{
                            borderRadius: 2,
                            mx: 1,
                            px: collapsed ? 1.5 : 1.5,
                            py: 0.9,
                            minHeight: 40,
                            bgcolor: active ? 'action.selected' : 'transparent',
                            color: active ? 'text.primary' : 'text.secondary',
                            fontWeight: active ? 600 : 400,
                            '&:hover': { bgcolor: 'action.hover' },
                            justifyContent: collapsed ? 'center' : 'flex-start',
                        }}
                    >
                        <ListItemIcon sx={{ minWidth: collapsed ? 0 : 36, color: 'inherit' }}>
                            <Badge
                                badgeContent={item.badge}
                                color={item.badgeColor || 'default'}
                                sx={{ '& .MuiBadge-badge': { fontSize: 10, height: 16, minWidth: 16 } }}
                            >
                                <Icon sx={{ fontSize: 20 }} />
                            </Badge>
                        </ListItemIcon>
                        {!collapsed && (
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{ fontSize: 14, fontWeight: active ? 600 : 400 }}
                            />
                        )}
                    </ListItemButton>
                </Tooltip>
            </ListItem>
        );
    };

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: collapsed ? COLLAPSED_WIDTH : DRAWER_WIDTH,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: collapsed ? COLLAPSED_WIDTH : DRAWER_WIDTH,
                    boxSizing: 'border-box',
                    bgcolor: 'background.paper',
                    borderRight: '1px solid',
                    borderColor: 'divider',
                    transition: 'width 0.2s ease',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                },
            }}
        >
            {/* Logo */}
            <Box
                sx={{
                    px: collapsed ? 1.5 : 2,
                    py: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    minHeight: 64,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <Avatar
                    sx={{
                        width: 32,
                        height: 32,
                        bgcolor: 'primary.main',
                        fontSize: 14,
                        fontWeight: 700,
                        flexShrink: 0,
                    }}
                >
                    G
                </Avatar>
                {!collapsed && (
                    <Box>
                        <Typography variant="body2" fontWeight={700} lineHeight={1.2}>
                            Great Learning
                        </Typography>
                        <Typography variant="caption" color="text.secondary" lineHeight={1.2}>
                            Guru Dashboard
                        </Typography>
                    </Box>
                )}
            </Box>

            {/* Navigation label */}
            {!collapsed && (
                <Typography
                    variant="caption"
                    color="text.disabled"
                    sx={{ px: 2.5, pt: 2, pb: 0.5, textTransform: 'uppercase', letterSpacing: 0.5, fontWeight: 600 }}
                >
                    Navigation
                </Typography>
            )}

            {/* Main nav */}
            <List disablePadding sx={{ pt: collapsed ? 1 : 0.5 }}>
                {NAV_ITEMS.map((item) => (
                    <NavButton key={item.label} item={item} />
                ))}
            </List>

            {/* Spacer */}
            <Box flex={1} />

            <Divider sx={{ mx: 2 }} />

            {/* Dark mode toggle */}
            <List disablePadding sx={{ pt: 0.5 }}>
                <ListItem disablePadding sx={{ mb: 0.25 }}>
                    <Tooltip title={collapsed ? (darkMode ? 'Light mode' : 'Dark mode') : ''} placement="right">
                        <ListItemButton
                            onClick={onToggleDark}
                            sx={{
                                borderRadius: 2,
                                mx: 1,
                                px: 1.5,
                                py: 0.9,
                                minHeight: 40,
                                color: 'text.secondary',
                                '&:hover': { bgcolor: 'action.hover' },
                                justifyContent: collapsed ? 'center' : 'flex-start',
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: collapsed ? 0 : 36, color: 'inherit' }}>
                                {darkMode ? <LightModeOutlinedIcon sx={{ fontSize: 20 }} /> : <DarkModeOutlinedIcon sx={{ fontSize: 20 }} />}
                            </ListItemIcon>
                            {!collapsed && (
                                <ListItemText
                                    primary={darkMode ? 'Light mode' : 'Dark mode'}
                                    primaryTypographyProps={{ fontSize: 14 }}
                                />
                            )}
                        </ListItemButton>
                    </Tooltip>
                </ListItem>

                {BOTTOM_ITEMS.map((item) => (
                    <NavButton key={item.label} item={item} />
                ))}
            </List>

            {/* Collapse button */}
            <Box
                sx={{
                    p: 1,
                    display: 'flex',
                    justifyContent: collapsed ? 'center' : 'flex-end',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <Tooltip title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'} placement="right">
                    <IconButton size="small" onClick={onToggleCollapse}>
                        {collapsed ? <ChevronRightIcon fontSize="small" /> : <ChevronLeftIcon fontSize="small" />}
                    </IconButton>
                </Tooltip>
            </Box>
        </Drawer>
    );
}
