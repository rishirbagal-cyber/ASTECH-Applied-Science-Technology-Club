
import { TeamMember, Domain, Event } from './types';

export const TEAM_MEMBERS: TeamMember[] = [
  { name: 'Nirbhay Choudhary', role: 'President' },
  { name: 'Sujal Kawadkar', role: 'Vice-President' },
  { name: 'Jitesh Dange', role: 'Vice-President' },
  { name: 'Neil', role: 'General Secretary' },
  { name: 'Divya Gorde', role: 'Joint Secretary' },
  { name: 'Om Sahane', role: 'Management Lead' },
  { name: 'Shahu Hage', role: 'Management Co-Lead' },
  { name: 'Rudra Denge', role: 'Design Lead' },
  { name: 'Devyani Chavan', role: 'Design & Social Media Co-Lead' },
  { name: 'Avantika Soni', role: 'Science Lead' },
  { name: 'Varad Shahane', role: 'Science Co-Lead' },
  { name: 'Gayatri Girwale', role: 'Promotion Lead' },
  { name: 'Samarth Bundela', role: 'Promotions Co-Lead' },
  { name: 'Yuvraj Suryawanshi', role: 'Discipline Lead' },
  { name: 'Viraj Darekar', role: 'Discipline Co-Lead' },
  { name: 'Purv Dua', role: 'Documentation Head' },
  { name: 'Gajanam Gutte', role: 'Treasurer' },
  { name: 'Suraj Kale', role: 'Treasurer' },
  { name: 'Aakarshi Chauhan', role: 'Content Lead' }
];

export const DOMAINS: Domain[] = [
  { title: 'Management', iconName: 'Briefcase', description: 'Orchestrating seamless events and club operations with strategic planning.' },
  { title: 'Design', iconName: 'Palette', description: 'Creating visual excellence through branding, UI/UX, and creative media.' },
  { title: 'Science', iconName: 'Atom', description: 'Driving technical innovation and research-oriented projects.' },
  { title: 'Promotions', iconName: 'Megaphone', description: 'Expanding our reach and connecting with the student community.' },
  { title: 'Discipline', iconName: 'ShieldCheck', description: 'Maintaining the professional standards and decorum of the association.' },
  { title: 'Content', iconName: 'FileText', description: 'Crafting compelling narratives and informative content for our audience.' },
  { title: 'Documentation', iconName: 'Database', description: 'Ensuring meticulous record-keeping and historical data preservation.' },
  { title: 'Finance', iconName: 'Coins', description: 'Strategic budgeting and resource allocation for club sustainability.' }
];

export const EVENTS: Event[] = [
  { title: 'Tech Pulse 2024', date: 'Sept 15, 2024', description: 'Annual flagship technology summit featuring industry leaders.', image: 'https://picsum.photos/seed/tech1/600/400' },
  { title: 'Code Wars', date: 'Oct 10, 2024', description: 'Intense competitive programming challenge for engineering minds.', image: 'https://picsum.photos/seed/code1/600/400' },
  { title: 'Innovation Workshop', date: 'Nov 05, 2024', description: 'Hands-on session on emerging technologies and rapid prototyping.', image: 'https://picsum.photos/seed/workshop1/600/400' }
];
