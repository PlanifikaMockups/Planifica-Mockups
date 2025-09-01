import React from 'react';
import { Users, BookOpen, TrendingUp, AlertTriangle, UserPlus, BarChart3, Building, Award } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ProgressBar } from '../ui/ProgressBar';

export function InstitutionAdminDashboard() {
  const institutionStats = {
    totalUsers: 847,
    activeProjects: 156,
    completionRate: 89,
    avgProjectDuration: 4.2
  };

  const facultyStats = [
    { name: 'Computer Science', projects: 45, students: 180, completion: 92 },
    { name: 'Engineering', projects: 38, students: 220, completion: 87 },
    { name: 'Mathematics', projects: 25, students: 125, completion: 95 },
    { name: 'Physics', projects: 22, students: 98, completion: 91 }
  ];

  const recentActivity = [
    { type: 'new_user', message: '15 new students joined this week', time: '2 hours ago' },
    { type: 'project_completed', message: '3 thesis projects completed', time: '1 day ago' },
    { type: 'milestone', message: 'Computer Science hit 95% completion rate', time: '2 days ago' }
  ];

  const pendingActions = [
    { type: 'approval', message: '8 new user registrations awaiting approval', count: 8 },
    { type: 'review', message: '12 project reports pending review', count: 12 },
    { type: 'budget', message: '3 budget requests for equipment', count: 3 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#222831] font-['Poppins']">
            Institution Dashboard
          </h1>
          <p className="text-gray-600 mt-2 font-['Inter']">Monitor and manage your institution's projects and users.</p>
        </div>
        <Button className="flex items-center space-x-2">
          <UserPlus className="h-4 w-4" />
          <span>Invite Users</span>
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="text-center">
          <Users className="h-8 w-8 text-[#3A6EA5] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#222831] font-['Poppins']">{institutionStats.totalUsers}</div>
          <div className="text-sm text-gray-600">Total Users</div>
        </Card>
        
        <Card className="text-center">
          <BookOpen className="h-8 w-8 text-[#FFD369] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#222831] font-['Poppins']">{institutionStats.activeProjects}</div>
          <div className="text-sm text-gray-600">Active Projects</div>
        </Card>
        
        <Card className="text-center">
          <TrendingUp className="h-8 w-8 text-[#4CAF50] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#222831] font-['Poppins']">{institutionStats.completionRate}%</div>
          <div className="text-sm text-gray-600">Completion Rate</div>
        </Card>
        
        <Card className="text-center">
          <Award className="h-8 w-8 text-[#FFA726] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#222831] font-['Poppins']">{institutionStats.avgProjectDuration}</div>
          <div className="text-sm text-gray-600">Avg Duration (months)</div>
        </Card>
      </div>

      {/* Faculty Performance & Pending Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[#222831] font-['Poppins']">Faculty Performance</h2>
            <Button variant="outline" size="sm">
              <BarChart3 className="h-4 w-4 mr-1" />
              Full Report
            </Button>
          </div>
          
          <div className="space-y-4">
            {facultyStats.map((faculty) => (
              <div key={faculty.name} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-[#222831] font-['Inter']">{faculty.name}</h3>
                  <span className="text-sm font-medium text-[#4CAF50]">{faculty.completion}%</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                  <span>Projects: {faculty.projects}</span>
                  <span>Students: {faculty.students}</span>
                </div>
                <ProgressBar progress={faculty.completion} color="success" />
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[#222831] font-['Poppins']">Pending Actions</h2>
            <AlertTriangle className="h-5 w-5 text-[#FFA726]" />
          </div>
          
          <div className="space-y-4">
            {pendingActions.map((action, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-[#222831] font-['Inter']">{action.message}</p>
                  <span className="bg-[#E53935] text-white text-xs px-2 py-1 rounded-full">
                    {action.count}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm">Review</Button>
                  <Button variant="outline" size="sm">Details</Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <h2 className="text-xl font-semibold text-[#222831] mb-6 font-['Poppins']">Recent Activity</h2>
        <div className="space-y-3">
          {recentActivity.map((activity) => (
            <div key={activity.type} className="flex items-start space-x-3 p-3 border-l-4 border-[#3A6EA5] bg-[#3A6EA5]/5 rounded-r-lg">
              <div className="flex-1">
                <p className="text-sm text-gray-900 font-['Inter']">{activity.message}</p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}