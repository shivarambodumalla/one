const BASE = process.env.PUBLIC_URL || 'https://shivarambodumalla.github.io/one';

export const PROTOTYPES = [
    {
        id: '1',
        name: 'GL Guru Dashboard',
        slug: 'guru-dashboard',
        image: null,
        updatedAt: '2026-02-23T17:07:54+05:30',   // auto-filled by scripts/update-timestamps.js
        routePath: '/guru-dashboard',              // SPA navigation (react-router)
        url: `${BASE}/guru-dashboard`,             // public share / copy-link URL
    },
    {
        id: '2',
        name: 'Content Delivery',
        slug: 'delivery',
        image: null,
        updatedAt: '2026-02-23T17:07:54+05:30',
        routePath: '/delivery',
        url: `${BASE}/delivery`,
    },
];

