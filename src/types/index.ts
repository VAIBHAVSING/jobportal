export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  requirements: string[];
  postedDate: string;
  type: 'full-time' | 'part-time' | 'contract' | 'freelance';
  level: 'entry' | 'mid' | 'senior' | 'executive';
}

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string; // Only used on backend
}

export interface UserProfile extends User {
  bio?: string;
  skills?: string[];
  resumeUrl?: string;
  savedJobs?: string[]; // Array of job IDs
  appliedJobs?: string[]; // Array of job IDs
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}