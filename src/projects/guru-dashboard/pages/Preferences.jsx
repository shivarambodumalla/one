import React, { useState } from 'react';
import {
    Box, Typography, Card, CardContent, Switch, Divider,
} from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const PREFS = [
    {
        id: 'p1',
        label: 'Essential system updates',
        desc: 'Session reminders, schedule changes, confirmations.',
        defaultOn: true,
    },
    {
        id: 'p2',
        label: 'Learner communication CC',
        desc: 'Bulk learner updates and cohort chatter (high volume).',
        defaultOn: false,
    },
    {
        id: 'p3',
        label: 'Batch chatter',
        desc: 'Forum/activity digests and routine announcements.',
        defaultOn: false,
    },
    {
        id: 'p4',
        label: 'System noise',
        desc: 'Low-value automated messages.',
        defaultOn: false,
    },
    {
        id: 'p5',
        label: 'Reminders',
        desc: '1 day before + 30 min before session.',
        defaultOn: true,
    },
];

export default function Preferences() {
    const [enabled, setEnabled] = useState(
        Object.fromEntries(PREFS.map((p) => [p.id, p.defaultOn]))
    );

    const toggle = (id) => setEnabled((prev) => ({ ...prev, [id]: !prev[id] }));

    return (
        <Box sx={{ px: 4, pt: 3, pb: 6 }}>
            <Card variant="outlined" sx={{ borderRadius: 2 }}>
                <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                    {/* Header */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2.5 }}>
                        <SettingsOutlinedIcon sx={{ fontSize: 22 }} />
                        <Typography variant="h6" fontWeight={800}>Communication preferences</Typography>
                    </Box>

                    {/* Reduce noise section */}
                    <Card variant="outlined" sx={{ borderRadius: 2, mb: 2 }}>
                        <CardContent sx={{ p: 2.5, '&:last-child': { pb: 2.5 } }}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 2 }}>
                                <Box
                                    sx={{
                                        width: 36,
                                        height: 36,
                                        borderRadius: '50%',
                                        bgcolor: 'action.hover',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                    }}
                                >
                                    <MailOutlineIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                                </Box>
                                <Box>
                                    <Typography variant="subtitle2" fontWeight={700}>Reduce noise</Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        Shield from bulk learner notifications while keeping essentials.
                                    </Typography>
                                </Box>
                            </Box>

                            <Box>
                                {PREFS.map((pref, i) => (
                                    <React.Fragment key={pref.id}>
                                        {i > 0 && <Divider />}
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                py: 1.5,
                                                px: 1,
                                            }}
                                        >
                                            <Box sx={{ flex: 1, pr: 2 }}>
                                                <Typography variant="body2" fontWeight={600}>{pref.label}</Typography>
                                                <Typography variant="caption" color="text.secondary">{pref.desc}</Typography>
                                            </Box>
                                            <Switch
                                                checked={enabled[pref.id]}
                                                onChange={() => toggle(pref.id)}
                                                sx={{
                                                    '& .MuiSwitch-thumb': { bgcolor: '#fff' },
                                                    '& .MuiSwitch-track': {
                                                        bgcolor: enabled[pref.id] ? '#111827 !important' : undefined,
                                                    },
                                                }}
                                            />
                                        </Box>
                                    </React.Fragment>
                                ))}
                            </Box>

                            {/* Target cadence */}
                            <Box sx={{ mt: 1.5, px: 1.5, py: 1.25, border: '1px solid', borderColor: 'divider', borderRadius: 1.5 }}>
                                <Typography variant="caption" color="text.secondary">
                                    Target cadence: Mon content → Wed confirmation → reminders.
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>
        </Box>
    );
}
