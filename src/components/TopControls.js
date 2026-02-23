import React from 'react';
import { Box, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const TopControls = ({ search, onSearch }) => {
    return (
        <Box
            sx={{
                mb: 6,
            }}
        >
            {/* Search */}
            <TextField
                fullWidth
                placeholder="Search prototypes…"
                value={search}
                onChange={(e) => onSearch(e.target.value)}
                variant="outlined"
                size="small"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon fontSize="small" sx={{ color: 'text.disabled' }} />
                        </InputAdornment>
                    ),
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '999px',
                        fontSize: '0.9rem',
                        '& fieldset': { borderColor: 'divider' },
                        '&:hover fieldset': { borderColor: 'text.primary' },
                        '&.Mui-focused fieldset': { borderColor: 'primary.main' },
                    },
                }}
            />
        </Box>
    );
};
