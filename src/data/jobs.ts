import { Job } from '@/types';

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    salary: '$110,000 - $140,000',
    description: 'We are looking for an experienced Frontend Developer to join our team. You will be responsible for building user interfaces for our web applications using React, TypeScript, and modern frontend technologies.',
    requirements: [
      'At least 3 years of experience with React',
      'Strong TypeScript skills',
      'Experience with state management (Redux, Context API)',
      'Knowledge of modern CSS and responsive design',
      'Understanding of web accessibility standards'
    ],
    postedDate: '2023-04-15',
    type: 'full-time',
    level: 'mid'
  },
  {
    id: '2',
    title: 'Backend Engineer',
    company: 'DataSystems Inc.',
    location: 'Remote',
    salary: '$120,000 - $150,000',
    description: 'Join our backend team to develop scalable and reliable APIs and services. You will work with Node.js, Express, MongoDB, and AWS to build high-performance systems.',
    requirements: [
      'At least 4 years of experience with Node.js',
      'Strong understanding of RESTful API design',
      'Experience with MongoDB or similar NoSQL databases',
      'Knowledge of AWS services (Lambda, S3, EC2)',
      'Understanding of microservice architecture'
    ],
    postedDate: '2023-04-18',
    type: 'full-time',
    level: 'senior'
  },
  {
    id: '3',
    title: 'UX/UI Designer',
    company: 'Creative Solutions',
    location: 'New York, NY',
    salary: '$90,000 - $120,000',
    description: 'We are seeking a talented UX/UI Designer to create beautiful and functional user interfaces for our products. You will be responsible for the entire design process from user research to high-fidelity mockups.',
    requirements: [
      'At least 2 years of experience in UX/UI design',
      'Proficiency with design tools (Figma, Sketch)',
      'Understanding of user research methodologies',
      'Knowledge of design systems and component libraries',
      'Portfolio showcasing previous work'
    ],
    postedDate: '2023-04-20',
    type: 'full-time',
    level: 'mid'
  },
  {
    id: '4',
    title: 'DevOps Engineer',
    company: 'CloudTech Solutions',
    location: 'Chicago, IL',
    salary: '$130,000 - $160,000',
    description: 'Join our DevOps team to implement and manage our CI/CD pipelines, infrastructure as code, and cloud resources. You will work with Kubernetes, Docker, and various cloud platforms.',
    requirements: [
      'At least 3 years of experience in DevOps role',
      'Strong knowledge of Docker and Kubernetes',
      'Experience with CI/CD tools (Jenkins, GitHub Actions)',
      'Knowledge of infrastructure as code (Terraform, CloudFormation)',
      'Experience with multiple cloud providers (AWS, GCP, Azure)'
    ],
    postedDate: '2023-04-22',
    type: 'full-time',
    level: 'senior'
  },
  {
    id: '5',
    title: 'Machine Learning Engineer',
    company: 'AI Innovations',
    location: 'Remote',
    salary: '$140,000 - $180,000',
    description: 'We are looking for a talented Machine Learning Engineer to join our AI team. You will be responsible for developing and deploying machine learning models for our products.',
    requirements: [
      'At least 3 years of experience in ML engineering',
      'Strong Python skills and experience with ML frameworks (TensorFlow, PyTorch)',
      'Understanding of data preprocessing and feature engineering',
      'Knowledge of model deployment and MLOps',
      'Experience with NLP or computer vision is a plus'
    ],
    postedDate: '2023-04-25',
    type: 'full-time',
    level: 'senior'
  },
  {
    id: '6',
    title: 'Junior Web Developer',
    company: 'WebStarters',
    location: 'Austin, TX',
    salary: '$70,000 - $90,000',
    description: 'Great opportunity for junior developers to join our team! You will work on various web development projects using modern technologies and frameworks.',
    requirements: [
      '0-2 years of experience in web development',
      'Knowledge of HTML, CSS, and JavaScript',
      'Familiarity with React or similar framework',
      'Basic understanding of version control (Git)',
      'Willingness to learn and grow'
    ],
    postedDate: '2023-04-27',
    type: 'full-time',
    level: 'entry'
  },
  {
    id: '7',
    title: 'Product Manager',
    company: 'ProductSoft',
    location: 'Seattle, WA',
    salary: '$125,000 - $155,000',
    description: 'We are seeking an experienced Product Manager to lead our product development efforts. You will be responsible for defining product strategy, gathering requirements, and working with cross-functional teams.',
    requirements: [
      'At least 4 years of experience in product management',
      'Strong understanding of product lifecycle management',
      'Experience with agile methodologies',
      'Excellent communication and leadership skills',
      'Technical background is a plus'
    ],
    postedDate: '2023-04-28',
    type: 'full-time',
    level: 'senior'
  },
  {
    id: '8',
    title: 'QA Engineer',
    company: 'QualityFirst',
    location: 'Remote',
    salary: '$90,000 - $120,000',
    description: 'Join our QA team to ensure the quality of our software products. You will be responsible for manual and automated testing, creating test plans, and working with developers to fix issues.',
    requirements: [
      'At least 2 years of experience in software testing',
      'Experience with test automation frameworks',
      'Knowledge of testing methodologies and best practices',
      'Understanding of web and mobile technologies',
      'Good communication and collaboration skills'
    ],
    postedDate: '2023-04-29',
    type: 'full-time',
    level: 'mid'
  }
];