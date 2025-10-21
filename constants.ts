
import { SkillCategory, Experience, Project } from './types';

export const skillsData: SkillCategory[] = [
  {
    category: 'Backend',
    skills: [
      { name: 'PHP 8.4' }, { name: 'CodeIgniter 3 & 4' }, { name: 'Laravel 12' }, { name: 'MySQL' }, { name: 'MariaDB' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML/CSS' }, { name: 'JavaScript' }, { name: 'jQuery' }, { name: 'Bootstrap 5' }, { name: 'ReactJS' }, { name: 'Tailwind CSS' }, { name: 'Shadcn UI' },
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Docker' }, { name: 'AWS' }, { name: 'GitLab CI/CD' }, { name: 'Apache' }, { name: 'Nginx' }, { name: 'Plesk' },
    ],
  },
  {
    category: 'Other Skills',
    skills: [
      { name: 'SDLC' }, { name: 'Agile Methodologies' }, { name: 'SOAP/XML' }, { name: 'REST API Design' },
    ],
  },
];

export const experienceData: Experience[] = [
  {
    role: 'Programmer/Analyst II',
    company: 'Vertere Global Solutions Inc.',
    period: '2019 – Present',
    description: 'Led full-stack development of web applications, integrated third-party APIs, and implemented CI/CD pipelines to streamline deployment processes.',
    technologies: ['PHP', 'CodeIgniter', 'ReactJS', 'Docker', 'GitLab CI/CD', 'AWS'],
  },
  {
    role: 'PHP Programmer',
    company: 'Diversified Technology Solutions Inc.',
    period: '2018 – 2019',
    description: 'Developed and maintained recruitment automation and HR management systems, significantly reducing manual data entry and improving workflow efficiency.',
    technologies: ['PHP', 'CodeIgniter', 'jQuery', 'MySQL', 'Bootstrap'],
  },
  {
    role: 'System Developer Intern',
    company: 'RHU Abuyog',
    period: '2017',
    description: 'Designed and implemented a healthcare automation system for patient registration, medical records management, and reporting.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  },
];

export const projectsData: Project[] = [
  {
    title: 'Order Entry Application',
    description: 'A comprehensive system for managing sales orders with seamless integration with Oracle databases.',
    imageUrl: 'https://picsum.photos/seed/order-entry/500/300',
    technologies: ['PHP', 'CodeIgniter', 'Oracle DB', 'ReactJS', 'REST API'],
  },
  {
    title: 'Recruitment Process Automation',
    description: 'An automated platform to streamline candidate sourcing, application tracking, and interview scheduling.',
    imageUrl: 'https://picsum.photos/seed/recruitment-automation/500/300',
    technologies: ['PHP', 'Laravel', 'MySQL', 'jQuery', 'Bootstrap'],
  },
  {
    title: 'Contract Automation System',
    description: 'A tool that generates and manages legal contracts automatically, including PDF generation.',
    imageUrl: 'https://picsum.photos/seed/contract-system/500/300',
    technologies: ['PHP', 'CodeIgniter', 'TCPDF', 'JavaScript', 'Tailwind CSS'],
  },
   {
    title: 'HR Information System',
    description: 'A centralized HRIS for employee data management, payroll, and leave tracking.',
    imageUrl: 'https://picsum.photos/seed/hris/500/300',
    technologies: ['PHP', 'MySQL', 'ReactJS', 'Docker', 'Nginx'],
  },
  {
    title: 'Healthcare Records Portal',
    description: 'A secure web portal for patients to access their medical records and communicate with providers.',
    imageUrl: 'https://picsum.photos/seed/healthcare-portal/500/300',
    technologies: ['PHP', 'CodeIgniter', 'Bootstrap', 'jQuery', 'AWS'],
  },
    {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product management, shopping cart, and payment gateway integration.',
    imageUrl: 'https://picsum.photos/seed/ecommerce/500/300',
    technologies: ['Laravel', 'ReactJS', 'Stripe API', 'Tailwind CSS', 'MariaDB'],
  },
];
