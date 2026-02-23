import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export const HeroSection = () => {
    return (
        <Box
            sx={{
                pt: { xs: 8, md: 12 },
                pb: { xs: 6, md: 10 },
                textAlign: 'left',
                bgcolor: 'background.paper',
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h1"
                    fontWeight={700}
                    color="text.primary"
                    gutterBottom
                    sx={{
                        fontSize: { xs: '3rem', md: '5rem' },
                        lineHeight: 1.1,
                        letterSpacing: '-0.02em',
                    }}
                >
                    Prototypes using AI
                </Typography>
                <Typography
                    variant="h5"
                    color="text.secondary"
                    sx={{
                        maxWidth: '600px',
                        lineHeight: 1.5,
                        fontWeight: 400,
                        fontSize: { xs: '1.25rem', md: '1.5rem' },
                        mt: 3,
                    }}
                >
                    Browse intelligent UI prototypes instantly.
                </Typography>
            </Container>
        </Box>
    );
};
