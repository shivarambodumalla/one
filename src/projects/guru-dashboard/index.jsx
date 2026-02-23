import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box, Typography, Button, IconButton, Chip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { getTheme } from '../../theme';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Calendar from './pages/Calendar';
import Alerts from './pages/Alerts';
import Profile from './pages/Profile';
import Preferences from './pages/Preferences';

function StatusBadges() {
    return (
        <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mt: 1.5 }}>
            <Chip
                icon={<CalendarTodayOutlinedIcon sx={{ fontSize: '14px !important' }} />}
                label="Availability window: next 60 days"
                size="small"
                sx={{
                    bgcolor: '#f0fdf4',
                    color: '#15803d',
                    border: '1px solid #bbf7d0',
                    fontWeight: 500,
                    fontSize: 12,
                    '& .MuiChip-icon': { color: '#15803d' },
                }}
            />
            <Chip
                icon={<StarBorderOutlinedIcon sx={{ fontSize: '14px !important' }} />}
                label="8 requests pending"
                size="small"
                sx={{
                    bgcolor: '#faf5ff',
                    color: '#7c3aed',
                    border: '1px solid #e9d5ff',
                    fontWeight: 500,
                    fontSize: 12,
                    '& .MuiChip-icon': { color: '#7c3aed' },
                }}
            />
            <Chip
                icon={<CheckCircleOutlineIcon sx={{ fontSize: '14px !important' }} />}
                label="Calendar connected"
                size="small"
                sx={{
                    bgcolor: '#f0fdf4',
                    color: '#15803d',
                    border: '1px solid #bbf7d0',
                    fontWeight: 500,
                    fontSize: 12,
                    '& .MuiChip-icon': { color: '#15803d' },
                }}
            />
        </Box>
    );
}

export default function GuruDashboardApp() {
    const [darkMode, setDarkMode] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [bannerOpen, setBannerOpen] = useState(true);
    const theme = getTheme(darkMode ? 'dark' : 'light');
    const navigate = useNavigate();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
                <Sidebar
                    collapsed={collapsed}
                    onToggleCollapse={() => setCollapsed((c) => !c)}
                    darkMode={darkMode}
                    onToggleDark={() => setDarkMode((d) => !d)}
                />

                {/* Main content area */}
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    {/* Alert Banner */}
                    {bannerOpen && (
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                px: 3,
                                py: 1,
                                bgcolor: darkMode ? '#1e1b4b' : '#eef2ff',
                                borderBottom: '1px solid',
                                borderColor: darkMode ? '#312e81' : '#c7d2fe',
                                flexShrink: 0,
                            }}
                        >
                            <Typography variant="body2" sx={{ color: darkMode ? '#a5b4fc' : '#4338ca', fontWeight: 500 }}>
                                You have 5 scheduled sessions that need your attention
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Button
                                    size="small"
                                    onClick={() => navigate('/guru-dashboard')}
                                    sx={{ color: darkMode ? '#a5b4fc' : '#4338ca', fontWeight: 600, fontSize: 13, textTransform: 'none', minWidth: 0 }}
                                >
                                    View sessions
                                </Button>
                                <IconButton size="small" onClick={() => setBannerOpen(false)}>
                                    <CloseIcon sx={{ fontSize: 16, color: darkMode ? '#a5b4fc' : '#4338ca' }} />
                                </IconButton>
                            </Box>
                        </Box>
                    )}

                    {/* Page header (always visible) */}
                    <Box sx={{ px: 4, pt: 3, pb: 0, flexShrink: 0, bgcolor: 'background.default' }}>
                        <Typography variant="h5" fontWeight={700} color="text.primary">
                            Welcome Shome
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.25 }}>
                            Mark availability, respond to requests, and confirm by Wednesday.
                        </Typography>
                        <StatusBadges />
                    </Box>

                    {/* Page content */}
                    <Box sx={{ flex: 1, overflow: 'auto', bgcolor: 'background.default' }}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/courses" element={<Courses />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/alerts" element={<Alerts />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/preferences" element={<Preferences />} />
                        </Routes>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
