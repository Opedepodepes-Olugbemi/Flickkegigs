export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Hourly';
  description: string;
  requirements: string[];
  posted: string;
  expires: string;
  votes: number;
  category: string[];
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  categories: string[];
  schedule: string[];
  skills: string[];
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  jobId?: string;
}

export interface Chat {
  id: string;
  participants: string[];
  lastMessage: string;
  timestamp: string;
  unread: number;
}