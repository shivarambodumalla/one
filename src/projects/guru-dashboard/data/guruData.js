// Guru Dashboard – all static/mock data
export const guruProfile = {
    name: 'Shome',
    timezone: 'Asia/Calcutta',
    primaryMode: 'Online',
    programs: ['PGP-DS'],
    availability: { days: 60, through: '2026-04-17' },
    stats: {
        avgRating: 4.81,
        momChange: +0.26,
        coverage: 100,
        npsProxy: 91,
        hoursTaught: 42,
        sessions: 7,
    },
};

export const sessions = {
    upcoming: [
        {
            id: 's1',
            title: 'Mentor Session: Statistics',
            date: 'Sat, 21 Feb',
            time: '18:00–20:00',
            group: 'Group 07',
            note: 'High work, mixed prog',
            tags: ['PGP-DS', 'Cohort Feb', 'Online'],
            joinUrl: '#',
            groupUrl: '#',
            priority: 'high',
        },
        {
            id: 's2',
            title: 'Mentor Session: ML Basics',
            date: 'Mon, 23 Feb',
            time: '10:00–12:00',
            group: 'Group 03',
            note: 'Beginner cohort',
            tags: ['AIML', 'Cohort Jan', 'Online'],
            joinUrl: '#',
            groupUrl: '#',
            priority: 'medium',
        },
        {
            id: 's3',
            title: 'Q&A Session: Python',
            date: 'Tue, 24 Feb',
            time: '15:00–16:00',
            group: 'Group 11',
            note: '',
            tags: ['PGP-DS', 'Online'],
            joinUrl: '#',
            groupUrl: '#',
            priority: 'low',
        },
        {
            id: 's4',
            title: 'Doubt Clearing: SQL',
            date: 'Wed, 25 Feb',
            time: '17:00–18:00',
            group: 'Group 07',
            note: '',
            tags: ['PGP-DS', 'Online'],
            joinUrl: '#',
            groupUrl: '#',
            priority: 'low',
        },
        {
            id: 's5',
            title: 'Capstone Review',
            date: 'Thu, 26 Feb',
            time: '19:00–21:00',
            group: 'Group 05',
            note: 'Capstone mid-check',
            tags: ['PGP-DS', 'Cohort Feb', 'Hybrid'],
            joinUrl: '#',
            groupUrl: '#',
            priority: 'high',
        },
    ],
    completed: [
        {
            id: 'c1',
            title: 'Mentor Session: EDA',
            date: 'Mon, 17 Feb',
            time: '10:00–12:00',
            group: 'Group 03',
            tags: ['AIML'],
        },
        {
            id: 'c2',
            title: 'Intro to ML Pipelines',
            date: 'Wed, 19 Feb',
            time: '14:00–16:00',
            group: 'Group 07',
            tags: ['PGP-DS'],
        },
    ],
    declined: [],
};

export const courses = [
    {
        id: 'co1',
        title: 'ML essentials: Model evaluation & overfitting',
        program: 'AIML',
        level: 'Intermediate',
        duration: '20 min',
        color: '#e0f2fe',
    },
    {
        id: 'co2',
        title: 'Python refresher: Data structures & functions',
        program: 'PGP-DS',
        level: 'Beginner',
        duration: '22 min',
        color: '#ede9fe',
    },
    {
        id: 'co3',
        title: 'SQL recap: Joins, aggregations, window functions',
        program: 'PGP-DS',
        level: 'Intermediate',
        duration: '18 min',
        color: '#fef9c3',
    },
    {
        id: 'co4',
        title: 'Statistics primer: Distributions & hypothesis testing',
        program: 'AIML',
        level: 'Intermediate',
        duration: '25 min',
        color: '#dcfce7',
    },
    {
        id: 'co5',
        title: 'Mentor skills: Running effective sessions',
        program: 'All',
        level: 'All levels',
        duration: '12 min',
        color: '#ffe4e6',
    },
];

export const alerts = {
    now: [
        {
            id: 'a1',
            icon: 'clock',
            title: 'Join reminder',
            description: 'Session starts in 30 minutes',
            action: 'Join session',
        },
    ],
    unread: [
        {
            id: 'a2',
            icon: 'check',
            title: 'Confirmations pending',
            description: 'You have upcoming sessions that need confirmation',
            action: 'Review confirmations',
        },
        {
            id: 'a3',
            icon: 'bell',
            title: 'New slot request',
            description: 'Ops added a new slot request',
            action: 'View requests',
        },
        {
            id: 'a4',
            icon: 'book',
            title: 'Content update',
            description: "This week's session content is now available",
            action: 'Open courses',
        },
    ],
};

export const preferences = [
    { id: 'p1', label: 'Essential system updates', description: 'Critical alerts you cannot miss', enabled: true },
    {
        id: 'p2', label: 'Learner communication CC', description: "Get CC'd on learner messages", enabled: false
    },
    { id: 'p3', label: 'Batch chatter', description: 'Notifications from batch group chats', enabled: false },
    { id: 'p4', label: 'Reminders', description: 'Session & availability reminders', enabled: true },
];

export const calendarEvents = [
    { day: 6, hour: 18, duration: 2, title: 'Extra Session Request: Doubt', type: 'request' },
    { day: 1, hour: 10, duration: 2, title: 'Mentor Session: ML Basics', type: 'session' },
    { day: 2, hour: 15, duration: 1, title: 'Q&A: Python', type: 'session' },
];
