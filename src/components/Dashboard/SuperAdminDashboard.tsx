import React from 'react';
import { Building, Users, TrendingUp, DollarSign, Globe, Activity, AlertCircle, Plus } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export function SuperAdminDashboard() {
  const platformStats = {
    totalInstitutions: 24,
    totalUsers: 12847,
    monthlyRevenue: 48500,
    systemUptime: 99.9
  };

  const institutions = [
    { 
      id: '1', 
      name: 'Stanford University', 
      users: 2847, 
      projects: 456, 
      status: 'active',
      plan: 'enterprise',
      health: 95 
    },
    { 
      id: '2', 
      name: 'MIT', 
      users: 3200, 
      projects: 623, 
      status: 'active',
      plan: 'enterprise',
      health: 98 
    },
    { 
      id: '3', 
      name: 'UC Berkeley', 
      users: 2156, 
      projects: 387, 
      status: 'active',
      plan: 'professional',
      health: 92 
    },
    { 
      id: '4', 
      name: 'Harvard University', 
      users: 1890, 
      projects: 298, 
      status: 'trial',
      plan: 'trial',
      health: 89 
    }
  ];

  const systemAlerts = [
    { type: 'performance', message: 'Database query performance degraded', severity: 'warning', time: '30 min ago' },
    { type: 'capacity', message: 'Storage usage at 85% capacity', severity: 'info', time: '2 hours ago' },
    { type: 'security', message: 'Failed login attempts from Stanford University', severity: 'high', time: '4 hours ago' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#222831] font-['Poppins']">
            Platform Overview
          </h1>
          <p className="text-gray-600 mt-2 font-['Inter']">Monitor all institutions and platform performance.</p>
        </div>
        <Button className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add Institution</span>
        </Button>
      </div>

      {/* Platform Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="text-center">
          <Building className="h-8 w-8 text-[#3A6EA5] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#222831] font-['Poppins']">{platformStats.totalInstitutions}</div>
          <div className="text-sm text-gray-600">Institutions</div>
        </Card>
        
        <Card className="text-center">
          <Users className="h-8 w-8 text-[#FFD369] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#222831] font-['Poppins']">{platformStats.totalUsers.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Total Users</div>
        </Card>
        
        <Card className="text-center">
          <DollarSign className="h-8 w-8 text-[#4CAF50] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#222831] font-['Poppins']">${platformStats.monthlyRevenue.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Monthly Revenue</div>
        </Card>
        
        <Card className="text-center">
          <Activity className="h-8 w-8 text-[#E53935] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#222831] font-['Poppins']">{platformStats.systemUptime}%</div>
          <div className="text-sm text-gray-600">System Uptime</div>
        </Card>
      </div>

      {/* Institutions Table */}
      <Card>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-[#222831] font-['Poppins']">Institution Overview</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">Export Report</Button>
            <Button variant="outline" size="sm">
              <Globe className="h-4 w-4 mr-1" />
              Analytics
            </Button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Institution</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Users</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Projects</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Plan</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Health</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {institutions.map((institution) => (
                <tr key={institution.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <Building className="h-4 w-4 text-[#3A6EA5]" />
                      <span className="font-medium text-[#222831]">{institution.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{institution.users.toLocaleString()}</td>
                  <td className="py-3 px-4 text-gray-600">{institution.projects}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full capitalize ${
                      institution.plan === 'enterprise' ? 'bg-purple-100 text-purple-800' :
                      institution.plan === 'professional' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {institution.plan}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-16">
                        <ProgressBar 
                          progress={institution.health} 
                          size="sm" 
                          color={institution.health >= 95 ? 'success' : institution.health >= 85 ? 'warning' : 'error'} 
                        />
                      </div>
                      <span className="text-sm text-gray-600">{institution.health}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      institution.status === 'active' ? 'bg-green-100 text-green-800' :
                      institution.status === 'trial' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {institution.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Button variant="outline" size="sm">Manage</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* System Alerts & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[#222831] font-['Poppins']">System Alerts</h2>
            <AlertTriangle className="h-5 w-5 text-[#FFA726]" />
          </div>
          
          <div className="space-y-3">
            {systemAlerts.map((alert, index) => (
              <div key={index} className={`border rounded-lg p-4 ${
                alert.severity === 'high' ? 'border-red-200 bg-red-50' :
                alert.severity === 'warning' ? 'border-yellow-200 bg-yellow-50' :
                'border-blue-200 bg-blue-50'
              }`}>
                <div className="flex items-center justify-between mb-1">
                  <p className="font-medium text-[#222831] font-['Inter']">{alert.message}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    alert.severity === 'high' ? 'bg-red-100 text-red-800' :
                    alert.severity === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {alert.severity}
                  </span>
                </div>
                <p className="text-xs text-gray-500">{alert.time}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold text-[#222831] mb-6 font-['Poppins']">Recent Activity</h2>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 border-l-4 border-[#3A6EA5] bg-[#3A6EA5]/5 rounded-r-lg">
                <div className="flex-1">
                  <p className="text-sm text-gray-900 font-['Inter']">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}