import React from 'react';
import { Box } from '@mui/material';
import { PrototypeCard } from './PrototypeCard';

export const PrototypeGrid = ({ prototypes }) => {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    lg: 'repeat(3, 1fr)',
                },
                gap: '24px',
                pb: 12,
            }}
        >
            {prototypes.map((prototype, index) => (
                <PrototypeCard key={prototype.id} prototype={prototype} />
            ))}
        </Box>
    );
};
