// NCAIML Template — Content Delivery Schedule
// 20 Weeks · 11 Deliveries (Delivery 0–10)

const iconMap = {
    Video: '▶',
    Slides: '📑',
    Assessment: '📝',
    Doc: '📄',
    Quiz: '🧩',
    Page: '🔗',
};

export const TEMPLATE = {
    name: 'NCAIML Template',
    totalWeeks: 20,
    totalDeliveries: 11,
};

export const DELIVERIES = [
    {
        id: 0,
        name: 'Delivery 0',
        weeks: 1,
        courseCount: 1,
        courses: [
            {
                id: 'c0-1',
                title: 'Prework',
                moduleCount: 8,
                modules: [
                    {
                        id: 'm0-1',
                        name: 'RapidMiner',
                        items: [
                            { type: 'Video', title: '2.1 Agenda' },
                            { type: 'Video', title: '2.2 Introduction to RapidMiner' },
                            { type: 'Slides', title: '2.2 Lecture Slides' },
                            { type: 'Assessment', title: '2.2 Test Your Understanding' },
                            { type: 'Doc', title: 'Installing RapidMiner 9.10' },
                            { type: 'Doc', title: 'RapidMiner UI Walkthrough' },
                            { type: 'Video', title: '2.3 Exploring the Interface' },
                            { type: 'Assessment', title: '2.3 Test Your Understanding' },
                        ],
                    },
                    {
                        id: 'm0-2',
                        name: 'Dataiku',
                        items: [
                            { type: 'Video', title: '3.1 Agenda' },
                            { type: 'Video', title: '3.2 Installation' },
                            { type: 'Assessment', title: '3.2 Test Your Understanding' },
                            { type: 'Video', title: '3.3 Introduction' },
                            { type: 'Assessment', title: '3.3 Test Your Understanding' },
                        ],
                    },
                    {
                        id: 'm0-3',
                        name: 'KNIME',
                        items: [
                            { type: 'Video', title: '4.1 Introduction' },
                            { type: 'Doc', title: 'Installation Guide' },
                            { type: 'Doc', title: 'Extensions Guide' },
                            { type: 'Doc', title: 'UI Walkthrough' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 1,
        name: 'Delivery 1',
        weeks: 1,
        courseCount: 2,
        courses: [
            {
                id: 'c1-1',
                title: 'Program Overview',
                moduleCount: 1,
                modules: [
                    {
                        id: 'm1-1',
                        name: 'Program Overview',
                        items: [
                            { type: 'Slides', title: 'Program Orientation Slides' },
                            { type: 'Page', title: 'Connect With Us' },
                        ],
                    },
                ],
            },
            {
                id: 'c1-2',
                title: 'Introduction to Data Science & AI',
                moduleCount: 10,
                modules: [
                    {
                        id: 'm1-2',
                        name: 'Beyond the Numbers',
                        items: [
                            { type: 'Video', title: '1.1 Agenda' },
                            { type: 'Video', title: '1.2 Origin of Decisions' },
                            { type: 'Assessment', title: '1.2 Test' },
                            { type: 'Video', title: 'Evolution of Data Science (1940s–2020+)' },
                            { type: 'Quiz', title: 'Week 1 Practice Quiz' },
                        ],
                    },
                    {
                        id: 'm1-3',
                        name: 'Transforming Industries',
                        items: [
                            { type: 'Video', title: 'Retail, Healthcare, Banking Case Studies' },
                            { type: 'Assessment', title: 'Test Your Understanding' },
                            { type: 'Quiz', title: 'Week 2 Practice Quiz' },
                        ],
                    },
                    {
                        id: 'm1-4',
                        name: 'Data Science Essentials',
                        items: [
                            { type: 'Video', title: 'Bayes Rule' },
                            { type: 'Video', title: 'Descriptive Statistics' },
                            { type: 'Video', title: 'Recommendation System Basics' },
                            { type: 'Assessment', title: 'Test Your Understanding' },
                            { type: 'Quiz', title: 'Week 3 Practice Quiz' },
                        ],
                    },
                    {
                        id: 'm1-5',
                        name: 'Data Science Lifecycle',
                        items: [
                            { type: 'Video', title: 'Solution Lifecycle' },
                            { type: 'Video', title: 'Data Preprocessing' },
                            { type: 'Video', title: 'Model Deployment' },
                            { type: 'Quiz', title: 'Week 4 Practice Quiz' },
                        ],
                    },
                    {
                        id: 'm1-6',
                        name: 'Introduction to Generative AI',
                        items: [
                            { type: 'Video', title: 'Generative vs Discriminative AI' },
                            { type: 'Video', title: 'LLMs' },
                            { type: 'Video', title: 'ChatGPT Hands-on' },
                            { type: 'Slides', title: 'Generative AI Primer' },
                            { type: 'Assessment', title: 'Test' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        name: 'Delivery 2',
        weeks: 1,
        courseCount: 2,
        courses: [
            {
                id: 'c2-1',
                title: 'Introduction to AI Landscape',
                moduleCount: 2,
                modules: [
                    {
                        id: 'm2-1',
                        name: 'AI Landscape',
                        items: [
                            { type: 'Video', title: 'History & Context' },
                            { type: 'Assessment', title: 'Test' },
                            { type: 'Slides', title: 'Lecture Slides' },
                            { type: 'Assessment', title: 'Final Assessment' },
                        ],
                    },
                ],
            },
            {
                id: 'c2-2',
                title: 'Data Exploration – Structured Data',
                moduleCount: 3,
                modules: [
                    {
                        id: 'm2-2',
                        name: 'Structured Data',
                        items: [
                            { type: 'Video', title: 'Hypothesis Testing' },
                            { type: 'Video', title: 'PCA & t-SNE' },
                            { type: 'Video', title: 'Clustering' },
                            { type: 'Slides', title: 'Lecture Slides' },
                            { type: 'Assessment', title: 'Assessment' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        name: 'Delivery 3',
        weeks: 2,
        courseCount: 2,
        courses: [
            {
                id: 'c3-1',
                title: 'Prediction Methods – Regression',
                moduleCount: 4,
                modules: [
                    {
                        id: 'm3-1',
                        name: 'Regression',
                        items: [
                            { type: 'Video', title: 'Linear Regression I–VIII' },
                            { type: 'Video', title: 'Feature Engineering' },
                            { type: 'Video', title: 'Cross Validation' },
                            { type: 'Doc', title: 'Dataset – Advertising Sales' },
                            { type: 'Slides', title: 'Lecture Slides' },
                            { type: 'Assessment', title: 'Assessment' },
                        ],
                    },
                ],
            },
            {
                id: 'c3-2',
                title: 'Decision Systems',
                moduleCount: 3,
                modules: [
                    {
                        id: 'm3-2',
                        name: 'Decision Systems',
                        items: [
                            { type: 'Video', title: 'Classification Concepts' },
                            { type: 'Video', title: 'Decision Trees' },
                            { type: 'Video', title: 'Random Forest' },
                            { type: 'Slides', title: 'Lecture Slides' },
                            { type: 'Assessment', title: 'Assessment' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 4,
        name: 'Delivery 4',
        weeks: 1,
        courseCount: 2,
        courses: [
            {
                id: 'c4-1',
                title: 'Data Exploration – Unstructured Data',
                moduleCount: 3,
                modules: [
                    {
                        id: 'm4-1',
                        name: 'NLP',
                        items: [
                            { type: 'Video', title: 'NLP Basics' },
                            { type: 'Video', title: 'TF-IDF' },
                            { type: 'Video', title: 'Word2Vec' },
                            { type: 'Slides', title: 'Lecture Slides' },
                            { type: 'Assessment', title: 'Assessment' },
                        ],
                    },
                ],
            },
            {
                id: 'c4-2',
                title: 'Recommendation Systems',
                moduleCount: 2,
                modules: [
                    {
                        id: 'm4-2',
                        name: 'Recommendation Systems',
                        items: [
                            { type: 'Video', title: 'Collaborative Filtering' },
                            { type: 'Video', title: 'Clustering' },
                            { type: 'Slides', title: 'Lecture Slides' },
                            { type: 'Assessment', title: 'Assessment' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 5,
        name: 'Delivery 5',
        weeks: 2,
        courseCount: 2,
        courses: [
            {
                id: 'c5-1',
                title: 'Data Exploration – Temporal Data',
                moduleCount: 3,
                modules: [
                    {
                        id: 'm5-1',
                        name: 'Time Series',
                        items: [
                            { type: 'Video', title: 'Time Series' },
                            { type: 'Video', title: 'ARIMA Concepts' },
                            { type: 'Slides', title: 'Lecture Slides' },
                            { type: 'Assessment', title: 'Assessment' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 6,
        name: 'Delivery 6',
        weeks: 1,
        courseCount: 1,
        courses: [
            {
                id: 'c6-1',
                title: 'Prediction Methods – Neural Networks',
                moduleCount: 3,
                modules: [
                    {
                        id: 'm6-1',
                        name: 'Deep Learning',
                        items: [
                            { type: 'Video', title: 'Deep Learning Basics' },
                            { type: 'Video', title: 'Backpropagation' },
                            { type: 'Video', title: 'Optimizers' },
                            { type: 'Slides', title: 'Lecture Slides' },
                            { type: 'Assessment', title: 'Assessment' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 7,
        name: 'Delivery 7',
        weeks: 1,
        courseCount: 1,
        courses: [
            {
                id: 'c7-1',
                title: 'Prompt Engineering',
                moduleCount: 3,
                modules: [
                    {
                        id: 'm7-1',
                        name: 'Prompt Engineering',
                        items: [
                            { type: 'Video', title: 'Prompt Engineering Basics' },
                            { type: 'Video', title: 'Zero/Few-Shot Prompting' },
                            { type: 'Video', title: 'Chain-of-Thought' },
                            { type: 'Slides', title: 'Lecture Slides' },
                            { type: 'Assessment', title: 'Assessment' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 8,
        name: 'Delivery 8',
        weeks: 2,
        courseCount: 1,
        courses: [
            {
                id: 'c8-1',
                title: 'Introduction to Generative AI (Advanced)',
                moduleCount: 3,
                modules: [
                    {
                        id: 'm8-1',
                        name: 'Advanced Gen-AI',
                        items: [
                            { type: 'Video', title: 'Neural Networks' },
                            { type: 'Video', title: 'Fashion MNIST Case Study' },
                            { type: 'Slides', title: 'Lecture Slides' },
                            { type: 'Assessment', title: 'Assessment' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 9,
        name: 'Delivery 9',
        weeks: 1,
        courseCount: 1,
        courses: [
            {
                id: 'c9-1',
                title: 'Gen-AI-2',
                moduleCount: 1,
                modules: [
                    {
                        id: 'm9-1',
                        name: 'Module 1',
                        items: [
                            { type: 'Page', title: 'Module 1' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 10,
        name: 'Delivery 10',
        weeks: 1,
        courseCount: 1,
        courses: [
            {
                id: 'c10-1',
                title: 'Gen-AI-2',
                moduleCount: 1,
                modules: [
                    {
                        id: 'm10-1',
                        name: 'Module 2',
                        items: [
                            { type: 'Page', title: 'Module 2' },
                        ],
                    },
                ],
            },
        ],
    },
];

export { iconMap };
