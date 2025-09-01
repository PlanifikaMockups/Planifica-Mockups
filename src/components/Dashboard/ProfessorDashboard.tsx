import React from 'react';
import { BookOpen, Users, Clock, TrendingUp, CheckCircle, AlertTriangle } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ProgressBar } from '../ui/ProgressBar';
import { useAuth } from '../../contexts/AuthContext';

export function ProfessorDashboard() {
  const { user } = useAuth();

  const supervisedProjects = [
    { id: '1', name: 'AI Ethics Research', student: 'Alice Johnson', progress: 75, status: 'active' },
    { id: '2', name: 'Machine Learning Applications', student: 'Bob Smith', progress: 45, status: 'active' },
    { id: '3', name: 'Database Optimization', student: 'Carol Davis', progress: 90, status: 'review' }
  ];

  const pendingEvaluations = [
    { id: '1', title: 'Literature Review - AI Ethics', student: 'Alice Johnson', submitted: '2025-02-10' },
    { id: '2', title: 'Final Thesis Draft', student: 'Bob Smith', submitted: '2025-02-12' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#222831] font-['Poppins']">
          Professor Dashboard
        </h1>
        <p className="text-gray-600 mt-2 font-['Inter']">Manage your supervised projects and evaluations.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="text-center">
          <BookOpen className="h-8 w-8 text-[#3A6EA5] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#222831] font-['Poppins']">8</div>
          <div className="text-sm text-gray-600">Supervised Projects</div>
        </Card>
        
        <Card className="text-center">
          <Users className="h-8 w-8 text-[#FFD369] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#222831] font-['Poppins']">15</div>
          <div className="text-sm text-gray-600">Students</div>
        </Card>
        
        <Card className="text-center">
          <Clock className="h-8 w-8 text-[#FFA726] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#222831] font-['Poppins']">3</div>
          <div className="text-sm text-gray-600">Pending Reviews</div>
        </Card>
        
        <Card className="text-center">
          <TrendingUp className="h-8 w-8 text-[#4CAF50] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#222831] font-['Poppins']">94%</div>
          <div className="text-sm text-gray-600">Completion Rate</div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Supervised Projects */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[#222831] font-['Poppins']">Supervised Projects</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          
          <div className="space-y-4">
            {supervisedProjects.map((project) => (
              <div key={project.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-[#222831] font-['Inter']">{project.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.status === 'active' ? 'bg-green-100 text-green-800' :
                    project.status === 'review' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">Student: {project.student}</p>
                <ProgressBar progress={project.progress} showLabel />
                <div className="mt-3">
                  <Button variant="outline" size="sm">Review Progress</Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Pending Evaluations */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[#222831] font-['Poppins']">Pending Evaluations</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          
          <div className="space-y-4">
            {pendingEvaluations.map((evaluation) => (
              <div key={evaluation.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-[#222831] font-['Inter']">{evaluation.title}</h3>
                  <AlertTriangle className="h-4 w-4 text-[#FFA726]" />
                </div>
                <p className="text-sm text-gray-600 mb-2">By: {evaluation.student}</p>
                <p className="text-xs text-gray-500 mb-3">Submitted: {new Date(evaluation.submitted).toLocaleDateString()}</p>
                <div className="flex space-x-2">
                  <Button size="sm">Review</Button>
                  <Button variant="outline" size="sm">Download</Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <h2 className="text-xl font-semibold text-[#222831] mb-4 font-['Poppins']">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="flex items-center justify-center space-x-2 py-8">
            <BookOpen className="h-5 w-5" />
            <span>Create New Project</span>
          </Button>
          <Button variant="outline" className="flex items-center justify-center space-x-2 py-8">
            <Users className="h-5 w-5" />
            <span>Invite Students</span>
          </Button>
          <Button variant="outline" className="flex items-center justify-center space-x-2 py-8">
            <Calendar className="h-5 w-5" />
            <span>Schedule Meeting</span>
          </Button>
        </div>
      </Card>
    </div>
  );
}