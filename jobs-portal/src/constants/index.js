import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import sprite from '../assets/sprite.svg';

export const BASE_URL = 'https://www.themuse.com/api/public/jobs';

export const categories = [
  'Accounting',
  'Accounting and Finance',
  'Account Management',
  'Account Management/Customer Success',
  'Administration and Office',
  'Advertising and Marketing',
  'AnimalCare',
  'Arts',
  'Business Operations',
  'Cleaning and Facilities',
  'Computer and IT',
  'Construction',
  'Corporate',
  'Customer Service',
  'Data and Analytics',
  'Data Science',
  'Design',
  'Design and UX',
  'Editor',
  'Education',
  'Energy Generation and Mining',
  'Entertainment and Travel Services',
  'Farming and Outdoors',
  'Food and Hospitality Services',
  'Healthcare',
  'HR',
  'Human Resources and Recruitment',
  'Installation, Maintenance, and Repairs',
  'IT',
  'Law',
  'Legal Services',
  'Management',
  'Manufacturing and Warehouse',
  'Marketing',
  'Mechanic',
  'Media, PR, and Communications',
  'Mental Health',
  'Nurses',
  'Office Administration',
  'Personal Care and Services',
  'Physical Assistant',
  'Product',
  'Product Management',
  'Project Management',
  'Protective Services',
  'Public Relations',
  'Real Estate',
  'Recruiting',
  'Retail',
  'Sales',
  'Science and Engineering',
  'Social Services',
  'Software Engineer',
  'Software Engineering',
  'Sports, Fitness, and Recreation',
  'Transportation and Logistics',
  'Unknown',
  'UX',
  'Videography',
  'Writer',
  'Writing and Editing',
];

export const popularCategories = [
  { id: 1, title: 'Arts', icon: `${sprite + '#icon-art'}` },
  { id: 2, title: 'Business Operations', icon: `${sprite + '#icon-business'}` },
  {
    id: 3,
    title: 'Computer and IT',
    icon: `${sprite + '#icon-code-computer'}`,
  },
  { id: 4, title: 'Management', icon: `${sprite + '#icon-user-business'}` },
  {
    id: 5,
    title: 'Data and Analytics',
    icon: `${sprite + '#icon-data'}`,
  },
  { id: 6, title: 'Design and UX', icon: `${sprite + '#icon-design'}` },
  { id: 7, title: 'Healthcare', icon: `${sprite + '#icon-health'}` },
  {
    id: 8,
    title: 'Software Engineering',
    icon: `${sprite + '#icon-software'}`,
  },
  { id: 9, title: 'Education', icon: `${sprite + '#icon-student'}` },
  {
    id: 10,
    title: 'Human Resources and Recruitment',
    icon: `${sprite + '#icon-people'}`,
  },
];

export const partners = [
  { id: 'p-1', logo: '/images/clickup.svg' },
  { id: 'p-2', logo: '/images/dropbox.svg' },
  { id: 'p-3', logo: '/images/elastic.svg' },
  { id: 'p-4', logo: '/images/google.svg' },
  { id: 'p-5', logo: '/images/helpscout.svg' },
  { id: 'p-6', logo: '/images/hubspot.svg' },
  { id: 'p-7', logo: '/images/intuit.svg' },
  { id: 'p-8', logo: '/images/paychecks.svg' },
  { id: 'p-9', logo: '/images/servicenow.svg' },
  { id: 'p-10', logo: '/images/shopify.svg' },
  { id: 'p-11', logo: '/images/twilio.svg' },
];

export const statistics = [
  {
    id: 'stats-1',
    title: 'Jobs',
    value: '123k',
  },
  {
    id: 'stats-2',
    title: 'Companies',
    value: '1.3k',
  },
  {
    id: 'stats-3',
    title: 'Applications',
    value: '103k',
  },
];

export const socials = [
  {
    id: 'facebook',
    link: 'https://www.facebook.com/',
    icon: FaFacebookF,
  },
  {
    id: 'linkedin',
    link: 'https://www.linkedin.com/',
    icon: FaLinkedinIn,
  },
  {
    id: 'twitter',
    link: 'https://twitter.com/',
    icon: BsTwitter,
  },
  {
    id: 'instagram',
    link: 'https://www.instagram.com/',
    icon: BsInstagram,
  },
];

export const sortByDateOptions = [
  'Show from Older ones',
  'Show from Newer ones',
];

export const levels = [
  { id: 'A0/A1', name: '(Beginner/Elementary)' },
  { id: 'A2', name: '(Pre Intermediate)' },
  { id: 'B1', name: '(Intermediate)' },
  { id: 'B2', name: '(Upper Intermediate)' },
  { id: 'C1', name: '(Advanced)' },
  { id: 'C2', name: '(Proficient)' },
];
