export type Technology = {
  id: string
  title: string
  category: string
  type: 'Software' | 'Platform' | 'AI' | 'Hardware' | 'SaaS'
  availability: 'For Sale' | 'For License' | 'Partnership'
  description: string
  demo: true
}

export const technologies: Technology[] = [
  // AI & MACHINE LEARNING
  {
    id: 'ai-001',
    title: 'AI Document Intelligence',
    category: 'AI & Machine Learning',
    type: 'AI',
    availability: 'For License',
    description: 'Demo technology for extracting and classifying information from business documents.',
    demo: true,
  },
  {
    id: 'ai-002',
    title: 'Predictive Analytics Engine',
    category: 'AI & Machine Learning',
    type: 'AI',
    availability: 'Partnership',
    description: 'Demo predictive analytics technology for forecasting business and operational trends.',
    demo: true,
  },
  {
    id: 'ai-003',
    title: 'Intelligent Recommendation Platform',
    category: 'AI & Machine Learning',
    type: 'Platform',
    availability: 'For Sale',
    description: 'Demo recommendation platform for personalized digital experiences.',
    demo: true,
  },

  // CYBERSECURITY
  {
    id: 'cyber-001',
    title: 'Adaptive Security Gateway',
    category: 'Cybersecurity',
    type: 'Platform',
    availability: 'For License',
    description: 'Demo security gateway designed to monitor and control application access.',
    demo: true,
  },
  {
    id: 'cyber-002',
    title: 'Threat Detection Engine',
    category: 'Cybersecurity',
    type: 'Software',
    availability: 'For Sale',
    description: 'Demo cybersecurity engine for identifying suspicious activity and security events.',
    demo: true,
  },
  {
    id: 'cyber-003',
    title: 'Identity Protection Platform',
    category: 'Cybersecurity',
    type: 'SaaS',
    availability: 'Partnership',
    description: 'Demo identity security platform for authentication and access protection.',
    demo: true,
  },

  // FINTECH
  {
    id: 'fintech-001',
    title: 'Digital Payment Platform',
    category: 'FinTech',
    type: 'Platform',
    availability: 'For License',
    description: 'Demo platform architecture for modern digital payment experiences.',
    demo: true,
  },
  {
    id: 'fintech-002',
    title: 'Financial Risk Analytics',
    category: 'FinTech',
    type: 'AI',
    availability: 'Partnership',
    description: 'Demo analytics technology for financial risk assessment and decision support.',
    demo: true,
  },
  {
    id: 'fintech-003',
    title: 'Digital Finance SaaS',
    category: 'FinTech',
    type: 'SaaS',
    availability: 'For Sale',
    description: 'Demo SaaS platform for digital financial operations and workflows.',
    demo: true,
  },

  // HEALTHTECH
  {
    id: 'health-001',
    title: 'Digital Care Platform',
    category: 'HealthTech',
    type: 'Platform',
    availability: 'For License',
    description: 'Demo digital platform for organizing healthcare-related workflows.',
    demo: true,
  },
  {
    id: 'health-002',
    title: 'Health Analytics Engine',
    category: 'HealthTech',
    type: 'AI',
    availability: 'Partnership',
    description: 'Demo analytics technology for healthcare data and operational insights.',
    demo: true,
  },
  {
    id: 'health-003',
    title: 'Remote Care SaaS',
    category: 'HealthTech',
    type: 'SaaS',
    availability: 'For Sale',
    description: 'Demo SaaS concept for supporting remote healthcare service workflows.',
    demo: true,
  },

  // AGRITECH
  {
    id: 'agri-001',
    title: 'Smart Farm Management',
    category: 'AgriTech',
    type: 'Software',
    availability: 'For License',
    description: 'Demo technology for managing farm operations and agricultural workflows.',
    demo: true,
  },
  {
    id: 'agri-002',
    title: 'Crop Intelligence Engine',
    category: 'AgriTech',
    type: 'AI',
    availability: 'Partnership',
    description: 'Demo AI technology for agricultural analysis and decision support.',
    demo: true,
  },
  {
    id: 'agri-003',
    title: 'Connected Agriculture Platform',
    category: 'AgriTech',
    type: 'Platform',
    availability: 'For Sale',
    description: 'Demo connected platform concept for modern agricultural operations.',
    demo: true,
  },

  // EDTECH
  {
    id: 'edu-001',
    title: 'Digital Learning Platform',
    category: 'EdTech',
    type: 'Platform',
    availability: 'For License',
    description: 'Demo technology for delivering structured digital learning experiences.',
    demo: true,
  },
  {
    id: 'edu-002',
    title: 'AI Learning Assistant',
    category: 'EdTech',
    type: 'AI',
    availability: 'Partnership',
    description: 'Demo AI assistant concept for personalized learning support.',
    demo: true,
  },
  {
    id: 'edu-003',
    title: 'Education Management SaaS',
    category: 'EdTech',
    type: 'SaaS',
    availability: 'For Sale',
    description: 'Demo SaaS platform for managing educational operations and services.',
    demo: true,
  },

  // SOFTWARE & SAAS
  {
    id: 'saas-001',
    title: 'Business Operations Platform',
    category: 'Software & SaaS',
    type: 'SaaS',
    availability: 'For License',
    description: 'Demo SaaS platform for managing business operations and workflows.',
    demo: true,
  },
  {
    id: 'saas-002',
    title: 'Enterprise Workflow Engine',
    category: 'Software & SaaS',
    type: 'Software',
    availability: 'Partnership',
    description: 'Demo workflow technology for automating organizational processes.',
    demo: true,
  },
  {
    id: 'saas-003',
    title: 'Cloud Collaboration Suite',
    category: 'Software & SaaS',
    type: 'SaaS',
    availability: 'For Sale',
    description: 'Demo cloud software concept for team collaboration and productivity.',
    demo: true,
  },

  // HARDWARE & IOT
  {
    id: 'iot-001',
    title: 'Smart Environment Sensor',
    category: 'Hardware & IoT',
    type: 'Hardware',
    availability: 'For Sale',
    description: 'Demo IoT sensor concept for monitoring connected environments.',
    demo: true,
  },
  {
    id: 'iot-002',
    title: 'Connected Asset Tracker',
    category: 'Hardware & IoT',
    type: 'Hardware',
    availability: 'For License',
    description: 'Demo connected-device technology for asset monitoring and tracking.',
    demo: true,
  },
  {
    id: 'iot-003',
    title: 'Industrial IoT Gateway',
    category: 'Hardware & IoT',
    type: 'Hardware',
    availability: 'Partnership',
    description: 'Demo IoT gateway concept for connecting industrial devices and systems.',
    demo: true,
  },
]
