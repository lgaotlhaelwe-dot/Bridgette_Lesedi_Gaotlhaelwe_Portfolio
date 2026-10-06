import {
  Award,
  Brain,
  Briefcase,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Layout,
  Lightbulb,
  MessageSquare,
  Server,
  Smartphone,
  Target,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react';

export const profile = {
  name: 'Bridgette Lesedi Gaotlhaelwe',
  role: 'IT Support & Administration Professional',
  tagline:
    'Reliable, adaptable, and learner-focused support professional with CCNA networking training and hands-on school administration experience.',
  email: 'gaotlhaelwe@gmail.com',
  phone: '081 533 3115 / 078 196 6493',
  location: 'Riverlea, Johannesburg, 2093',
  github: '',
  linkedin: '',
  cvUrl: '/cv/Bridgette_Gaotlhaelwe_CV.pdf',
  presentationUrl: '/Bridgette_Gaotlhaelwe_Portfolio_Presentation.pptx',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const aboutParagraphs = [
  'I am an administrator and IT-trained support professional with a CCNA networking qualification and more than a year of experience in a fast-paced school administration and learner support environment.',
  'I am comfortable with computer hardware, software, and systems analysis. I am known for reliability, clear communication, and the ability to learn new processes quickly while maintaining accurate records and supporting learners, staff, and families.',
  'I am looking for an entry-level IT support, data capturing, or office administration opportunity where I can contribute dependable technical support, organised administration, and a positive service mindset.',
];

export const stats = [
  { value: '17', label: 'Month Fixed-Term Contract' },
  { value: 'CCNA', label: 'Networking Qualification' },
  { value: '3', label: 'Languages Fluent In' },
  { value: '0', label: 'Criminal Record' },
];

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: { name: string; level: number }[];
}

export const technicalSkills: SkillCategory[] = [
  {
    title: 'IT Support',
    icon: Server,
    skills: [
      { name: 'Computer hardware troubleshooting', level: 88 },
      { name: 'Computer software troubleshooting', level: 88 },
      { name: 'Systems analysis', level: 80 },
      { name: 'Computer programming basics', level: 68 },
    ],
  },
  {
    title: 'Networking',
    icon: Cloud,
    skills: [
      { name: 'CCNA networking fundamentals', level: 86 },
      { name: 'Network concepts', level: 82 },
      { name: 'Systems and connectivity support', level: 78 },
      { name: 'IT troubleshooting', level: 84 },
    ],
  },
  {
    title: 'Administration',
    icon: Database,
    skills: [
      { name: 'Administrative support', level: 92 },
      { name: 'Record-keeping', level: 92 },
      { name: 'Data capturing', level: 88 },
      { name: 'Filing and document maintenance', level: 90 },
    ],
  },
  {
    title: 'Learner & Classroom Support',
    icon: Layout,
    skills: [
      { name: 'Learner support', level: 90 },
      { name: 'Classroom support', level: 88 },
      { name: 'Staff and parent communication', level: 86 },
      { name: 'Daily operations support', level: 90 },
    ],
  },
];

export const softSkills = [
  { name: 'Communication', icon: MessageSquare },
  { name: 'Problem Solving', icon: Lightbulb },
  { name: 'Reliability', icon: Target },
  { name: 'Teamwork', icon: Users },
  { name: 'Adaptability', icon: Zap },
  { name: 'Attention to Detail', icon: Cpu },
  { name: 'Organisation', icon: Briefcase },
  { name: 'Learner Support', icon: Brain },
];

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  repoUrl?: string;
  image: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: 'School Administration Support',
    description: 'Administrative support across filing, record-keeping, and daily school operations.',
    longDescription:
      'During a 17-month fixed-term contract, I supported the Intermediate Phase department with filing, record-keeping, learner documentation, and day-to-day administrative operations.',
    technologies: ['Administrative Support', 'Record-Keeping', 'Data Capturing'],
    features: [
      'Maintained accurate learner documentation',
      'Supported filing and record-keeping processes',
      'Helped keep daily department operations running smoothly',
      'Communicated with staff, parents, and the HOD',
    ],
    image:
      'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    title: 'Learner & Classroom Support',
    description: 'Practical support for classroom activities and learner-focused school operations.',
    longDescription:
      'Provided hands-on classroom and learner support, assisting teachers and helping maintain a positive, organised learning environment.',
    technologies: ['Learner Support', 'Classroom Support', 'Communication'],
    features: [
      'Assisted teachers with classroom supervision',
      'Provided learner-focused day-to-day support',
      'Helped maintain a structured learning environment',
      'Worked collaboratively with staff and families',
    ],
    image:
      'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    title: 'IT Support Foundation',
    description: 'CCNA networking training combined with computer hardware and software troubleshooting knowledge.',
    longDescription:
      'My ICT training provides a foundation in networking fundamentals, computer hardware and software, systems analysis and design, and programming basics for entry-level technical support roles.',
    technologies: ['CCNA', 'Hardware Support', 'Software Support', 'Systems Analysis'],
    features: [
      'National Certificate: Vocational Level 4 — ICT',
      'CCNA7 (Networking) qualification',
      'Hardware and software troubleshooting knowledge',
      'Foundational programming and systems analysis skills',
    ],
    image:
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    role: 'Assistant Teacher and Administrator',
    company: 'Department of Education',
    period: 'Feb 2023 — Jul 2024',
    description:
      'Supported the Intermediate Phase department with administration, learner support, classroom assistance, and daily operational coordination.',
    achievements: [
      'Provided day-to-day administrative support, including filing and record-keeping',
      'Kept learner documentation accurate and maintained department records',
      'Assisted teaching staff with classroom supervision and learner support',
      'Acted as a point of contact between staff, parents, and the HOD',
      'Completed a 17-month fixed-term contract',
    ],
  },
];

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string;
  gpa?: string;
}

export const education: Education[] = [
  {
    degree: 'National Certificate (Vocational) Level 4 — ICT',
    institution: 'South West Gauteng College',
    period: '2023',
    details: 'Vocational ICT qualification supporting an entry-level IT support career path.',
  },
  {
    degree: 'CCNA7 (Networking)',
    institution: 'South West Gauteng College',
    period: '2022',
    details: 'Networking qualification covering core networking fundamentals.',
  },
  {
    degree: 'National Certificate (Vocational) Level 3 — ICT',
    institution: 'South West Gauteng College',
    period: '2021',
    details: 'Covered computer hardware and software, systems analysis and design, and principles of computer programming.',
  },
  {
    degree: 'Fourth Industrial Revolution short course',
    institution: 'South West Gauteng College',
    period: '2021',
    details: 'Covered robotics, 3D printing, coding, and programming.',
  },
  {
    degree: 'National Certificate (Vocational) Level 2 — ICT',
    institution: 'South West Gauteng College',
    period: '2019',
    details: 'Foundational ICT studies.',
  },
  {
    degree: 'Matric (National Senior Certificate)',
    institution: 'Riverlea Secondary School',
    period: '2017',
    details: 'National Senior Certificate.',
  },
];

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  url?: string;
}

export const certifications: Certification[] = [
  {
    title: 'CCNA7 (Networking)',
    issuer: 'South West Gauteng College',
    date: '2022',
    credentialId: 'Listed on CV',
  },
  {
    title: 'Fourth Industrial Revolution Short Course',
    issuer: 'South West Gauteng College',
    date: '2021',
    credentialId: 'Listed on CV',
  },
  {
    title: 'National Certificate (Vocational) Level 4 — ICT',
    issuer: 'South West Gauteng College',
    date: '2023',
    credentialId: 'Listed on CV',
  },
];

export { Code2, GitBranch, Smartphone };
