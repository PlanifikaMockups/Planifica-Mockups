export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'professor' | 'researcher' | 'institution_admin' | 'super_admin';
  avatar?: string;
  institution?: string;
  faculty?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  type: 'academic' | 'research' | 'social' | 'admin';
  status: 'planning' | 'active' | 'review' | 'completed';
  progress: number;
  startDate: string;
  endDate: string;
  supervisor?: User;
  members: User[];
  macroProject?: Project;
  microProjects?: Project[];
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in_progress' | 'review' | 'completed';
  priority: 'low' | 'medium' | 'high';
  assignee: User;
  dueDate: string;
  projectId: string;
  projectName: string;
}

export interface Institution {
  id: string;
  name: string;
  domain: string;
  activeProjects: number;
  totalUsers: number;
  completionRate: number;
}