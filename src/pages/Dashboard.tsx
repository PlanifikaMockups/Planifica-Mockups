import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { StudentDashboard } from '../components/Dashboard/StudentDashboard';
import { ProfessorDashboard } from '../components/Dashboard/ProfessorDashboard';
import { ResearcherDashboard } from '../components/Dashboard/ResearcherDashboard';
import { InstitutionAdminDashboard } from '../components/Dashboard/InstitutionAdminDashboard';
import { SuperAdminDashboard } from '../components/Dashboard/SuperAdminDashboard';

export function Dashboard() {
  const { user } = useAuth();

  if (!user) return null;

  const dashboardComponents = {
    student: StudentDashboard,
    professor: ProfessorDashboard,
    researcher: ResearcherDashboard,
    institution_admin: InstitutionAdminDashboard,
    super_admin: SuperAdminDashboard
  };

  const DashboardComponent = dashboardComponents[user.role] || StudentDashboard;

  return <DashboardComponent />;
}