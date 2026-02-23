import React, { useState } from 'react';
import { Box, Typography, Card, IconButton, Tooltip, Fade } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useNavigate } from 'react-router-dom';

const generateColor = (name) => {
    const hue = [...name].reduce((acc, char) => acc + char.charCodeAt(0), 0) % 360;
    // High saturation + moderate lightness → vivid color, still legible with dark text
    return `hsl(${hue}, 95%, 82%)`;
};

const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
};

export const PrototypeCard = ({ prototype }) => {
    const [copied, setCopied] = useState(false);
    const navigate = useNavigate();
    const fallbackBgColor = generateColor(prototype.name);

    const handleCardClick = () => {
        if (prototype.routePath) {
            navigate(prototype.routePath);
        } else if (prototype.url) {
            window.open(prototype.url, '_blank', 'noopener noreferrer');
        }
    };

    const handleCopy = (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(prototype.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Fade in timeout={800}>
            <Card
                variant="outlined"
                onClick={handleCardClick}
                sx={{
                    border: '1px solid',
                    borderColor: 'divider',
                    backgroundColor: 'background.paper',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: 'none',
                    transition: 'border-color 0.15s'
                }}
            >
                {/* Thumbnail (16:9) */}
                <Box
                    sx={{
                        width: '100%',
                        paddingTop: '56.25%',
                        position: 'relative',
                        overflow: 'hidden',
                        backgroundColor: prototype.image ? 'transparent' : fallbackBgColor,
                        backgroundImage: prototype.image ? `url(${prototype.image})` : 'none',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    {prototype.image && (
                        <Box
                            sx={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.1) 100%)',
                            }}
                        />
                    )}
                    {!prototype.image && (
                        <Box
                            sx={{
                                position: 'absolute',
                                inset: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                p: 2,
                            }}
                        >
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                textAlign="center"
                                sx={{ color: 'text.primary', letterSpacing: '-0.5px', lineHeight: 1.2 }}
                            >
                                {prototype.name}
                            </Typography>
                        </Box>
                    )}
                </Box>

                {/* Meta */}
                <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Typography variant="subtitle1" fontWeight={600} color="text.primary" noWrap>
                            {prototype.name}
                        </Typography>
                        <Tooltip title={copied ? 'Copied!' : 'Copy Link'} placement="top">
                            <IconButton
                                onClick={handleCopy}
                                size="small"
                                sx={{
                                    ml: 1, mt: -0.5, mr: -1,
                                    color: 'text.secondary',
                                    '&:hover': { backgroundColor: 'action.hover', color: 'text.primary' },
                                }}
                            >
                                <ContentCopyIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                        Last updated {formatDate(prototype.updatedAt)}
                    </Typography>
                </Box>
            </Card>
        </Fade>
    );
};
