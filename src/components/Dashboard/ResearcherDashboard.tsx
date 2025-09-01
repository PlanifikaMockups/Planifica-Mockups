import React from 'react';
import { BookOpen, Users, Clock, TrendingUp, FileText, Calendar } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ProgressBar } from '../ui/ProgressBar';
import { useAuth } from '../../contexts/AuthContext';

export function ResearcherDashboard() {
  const { user } = useAuth();

  const researchProjects = [
    { id: '1', name: 'Neural Networks in Climate Modeling', type: 'research', progress: 65, team: 4, publications: 2 },
    { id: '2', name: 'Sustainable Computing Solutions', type: 'research', progress: 40, team: 6, publications: 1 },
    { id: '3', name: 'Educational AI Applications', type: 'collaborative', progress: 80, team: 8, publications: 3 }
  ];

  const milestones = [
    { id: '1', title: 'Submit paper to ACM Conference', project: 'Neural Networks', dueDate: '2025-03-15', status: 'pending' },
    { id: '2', title: 'Complete data collection phase', project: 'Sustainable Computing', dueDate: '2025-02-28', status: 'in_progress' },
    { id: '3', title: 'Peer review feedback incorporation', project: 'Educational AI', dueDate: '2025-02-20', status: 'completed' }
  ];

  const publications = [
    { title: 'Machine Learning Approaches to Climate Data', journal: 'Environmental Computing', status: 'published' },
    { title: 'Sustainable Software Architecture', journal: 'Green Computing Review', status: 'under_review' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#222831] font-['Poppins']">
          Research Dashboard
        </h1>
        <p className="text-gray-600 mt-2 font-['Inter']">Track your research projects, publications, and collaborations.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="text-center">
          <BookOpen className="h-8 w-8 text-[#3A6EA5] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#222831] font-['Poppins']">3</div>
          <div className="text-sm text-gray-600">Active Research</div>
        </Card>
        
        <Card className="text-center">
          <Users className="h-8 w-8 text-[#FFD369] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#222831] font-['Poppins']">18</div>
          <div className="text-sm text-gray-600">Collaborators</div>
        </Card>
        
        <Card className="text-center">
          <FileText className="h-8 w-8 text-[#4CAF50] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#222831] font-['Poppins']">6</div>
          <div className="text-sm text-gray-600">Publications</div>
        </Card>
        
        <Card className="text-center">
          <TrendingUp className="h-8 w-8 text-[#FFA726] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#222831] font-['Poppins']">85%</div>
          <div className="text-sm text-gray-600">Grant Success</div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Research Projects */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[#222831] font-['Poppins']">Active Research Projects</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          
          <div className="space-y-4">
            {researchProjects.map((project) => (
              <div key={project.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-[#222831] font-['Inter']">{project.name}</h3>
                  <span className="text-xs px-2 py-1 bg-[#3A6EA5]/10 text-[#3A6EA5] rounded-full">
                    {project.type}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <span>Team: {project.team} members</span>
                  <span>Publications: {project.publications}</span>
                </div>
                <ProgressBar progress={project.progress} showLabel />
                <div className="mt-3">
                  <Button variant="outline" size="sm">View Project</Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Milestones & Deadlines */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[#222831] font-['Poppins']">Upcoming Milestones</h2>
            <Button variant="outline" size="sm">View Calendar</Button>
          </div>
          
          <div className="space-y-4">
            {milestones.map((milestone) => (
              <div key={milestone.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-[#222831] font-['Inter']">{milestone.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    milestone.status === 'completed' ? 'bg-green-100 text-green-800' :
                    milestone.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {milestone.status.replace('_', ' ')}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{milestone.project}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Due: {new Date(milestone.dueDate).toLocaleDateString()}</span>
                  <Button variant="outline" size="sm">Update</Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Publications & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-xl font-semibold text-[#222831] mb-4 font-['Poppins']">Recent Publications</h2>
          <div className="space-y-3">
            {publications.map((pub, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-[#222831] font-['Inter'] mb-1">{pub.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{pub.journal}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  pub.status === 'published' ? 'bg-green-100 text-green-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {pub.status.replace('_', ' ')}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold text-[#222831] mb-4 font-['Poppins']">Quick Actions</h2>
          <div className="grid grid-cols-1 gap-4">
            <Button variant="outline" className="flex items-center justify-center space-x-2 py-6">
              <BookOpen className="h-5 w-5" />
              <span>New Research Project</span>
            </Button>
            <Button variant="outline" className="flex items-center justify-center space-x-2 py-6">
              <FileText className="h-5 w-5" />
              <span>Submit Publication</span>
            </Button>
            <Button variant="outline" className="flex items-center justify-center space-x-2 py-6">
              <Calendar className="h-5 w-5" />
              <span>Schedule Lab Meeting</span>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}