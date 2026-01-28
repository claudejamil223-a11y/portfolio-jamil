
import React from 'react';
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Appendicitis Prediction System',
    description: 'Developed a clinical decision-support tool for medical diagnostics.\n• Engineered a high-precision ML model using XGBoost and scikit-learn for early detection.\n• Deployed an interactive Streamlit UI, enabling healthcare professionals to interpret results instantly.\n• Streamlined clinical workflows by reducing diagnosis latency through data-driven insights.',
    tags: ['Python', 'XGBoost', 'scikit-learn', 'Streamlit'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
    link: '#'
  },
  {
    id: '2',
    title: 'IoT Dashboard (Coca-Cola)',
    description: 'Spearheaded an industrial digitalization project to optimize resource consumption.\n• Architected real-time IoT dashboards for monitoring hydrique flows in bottling plants.\n• Pinpointed critical waste points using data analysis, leading to significant water savings.\n• Integrated heterogeneous data streams into a unified visualization platform.',
    tags: ['Power BI', 'IoT', 'Data Analysis', 'Industrial'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda536ad3a?q=80&w=800&auto=format&fit=crop',
    link: '#'
  },
  {
    id: '3',
    title: 'Macro-Economic Crisis Modeler',
    description: 'Advanced financial modeling project analyzing systemic risks in emerging markets.\n• Modeled precursors of economic instability by correlating inflation and sovereign debt.\n• Developed complex DAX measures in Power BI to visualize African banking crises over three decades.\n• Provided actionable predictive indicators for fiscal policy evaluation.',
    tags: ['Power BI', 'DAX', 'Python', 'Economics'],
    imageUrl: 'https://images.unsplash.com/photo-1611974717482-482d85404764?q=80&w=800&auto=format&fit=crop',
    link: '#'
  },
  {
    id: '4',
    title: 'Bottling Line Optimization',
    description: 'Strategic optimization of manufacturing performance through advanced simulation.\n• Modeled 3D bottling lines in FlexSim to maximize the Taux de Rendement Synthétique (TRS/OEE).\n• Conducted scientific vibratory studies for predictive maintenance on TGV axle bearings.\n• Leveraged Scilab for complex mathematical modeling of physical system constraints.',
    tags: ['FlexSim', 'Scilab', 'Optimization', 'Simulation'],
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    link: '#'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Python (ML/DS)', level: 90, category: 'Backend' },
  { name: 'Power BI / DAX', level: 95, category: 'Frontend' },
  { name: 'Machine Learning (XGBoost)', level: 85, category: 'Backend' },
  { name: 'FlexSim / Scilab', level: 80, category: 'Other' },
  { name: 'MATLAB / Python', level: 85, category: 'Backend' },
  { name: 'SQL (MySQL)', level: 80, category: 'Backend' },
  { name: 'UI/UX (Streamlit)', level: 75, category: 'Design' },
  { name: 'Project Management (Agile)', level: 85, category: 'Other' },
  { name: 'Business Intelligence', level: 90, category: 'Backend' },
];

export const PORTFOLIO_OWNER = {
  name: 'Jamil Claude MAIGA',
  title: 'Data Analytics & Business Intelligence Engineering Student',
  bio: 'Student Engineer at École Centrale Casablanca & ESSEC Business School. Passionate about AI, Machine Learning, and Industrial Optimization. I specialize in turning complex data into strategic business insights.',
  email: 'jamilclaude.maiga@centrale-casablanca.ma',
  github: 'https://github.com/jamilmaiga',
  linkedin: 'https://linkedin.com/in/maiga-jamil-claude',
  location: 'Casablanca, Morocco / France'
};
