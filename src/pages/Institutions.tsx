import React, { useState } from 'react';
import { Building, Users, TrendingUp, Plus, Search, Filter, Globe, Settings } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';

export function Institutions() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const institutions = [
    {
      id: '1',
      name: 'Stanford University',
      domain: 'stanford.edu',
      plan: 'enterprise',
      status: 'active',
      users: 2847,
      projects: 456,
      completionRate: 92,
      health: 98,
      joinDate: '2024-01-15',
      lastActivity: '2025-02-14',
      admin: 'Sarah Chen',
      adminEmail: 'admin@stanford.edu'
    },
    {
      id: '2',
      name: 'MIT',
      domain: 'mit.edu',
      plan: 'enterprise',
      status: 'active',
      users: 3200,
      projects: 623,
      completionRate: 89,
      health: 95,
      joinDate: '2023-09-01',
      lastActivity: '2025-02-14',
      admin: 'Michael Johnson',
      adminEmail: 'admin@mit.edu'
    },
    {
      id: '3',
      name: 'UC Berkeley',
      domain: 'berkeley.edu',
      plan: 'professional',
      status: 'active',
      users: 2156,
      projects: 387,
      completionRate: 91,
      health: 93,
      joinDate: '2024-03-10',
      lastActivity: '2025-02-13',
      admin: 'Lisa Park',
      adminEmail: 'admin@berkeley.edu'
    },
    {
      id: '4',
      name: 'Harvard University',
      domain: 'harvard.edu',
      plan: 'trial',
      status: 'trial',
      users: 1890,
      projects: 298,
      completionRate: 87,
      health: 89,
      joinDate: '2025-01-20',
      lastActivity: '2025-02-14',
      admin: 'David Wilson',
      adminEmail: 'admin@harvard.edu'
    },
    {
      id: '5',
      name: 'Carnegie Mellon',
      domain: 'cmu.edu',
      plan: 'professional',
      status: 'suspended',
      users: 1654,
      projects: 234,
      completionRate: 78,
      health: 45,
      joinDate: '2024-05-15',
      lastActivity: '2025-01-28',
      admin: 'Emily Davis',
      adminEmail: 'admin@cmu.edu'
    }
  ];

  const filteredInstitutions = institutions.filter(institution => {
    const matchesSearch = institution.name.toLowerCase().includes(search.toLowerCase()) ||
                         institution.domain.toLowerCase().includes(search.toLowerCase()) ||
                         institution.admin.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'all' || 
                         institution.status === filter || 
                         institution.plan === filter;
    return matchesSearch && matchesFilter;
  });

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case 'enterprise': return 'bg-purple-100 text-purple-800';
      case 'professional': return 'bg-blue-100 text-blue-800';
      case 'trial': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'trial': return 'bg-yellow-100 text-yellow-800';
      case 'suspended': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const platformStats = {
    totalInstitutions: institutions.length,
    totalUsers: institutions.reduce((sum, inst) => sum + inst.users, 0),
    avgCompletion: Math.round(institutions.reduce((sum, inst) => sum + inst.completionRate, 0) / institutions.length),
    activeInstitutions: institutions.filter(inst => inst.status === 'active').length
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-[#222831] font-['Poppins']">Institutions</h1>
          <p className="text-gray-600 mt-2 font-['Inter']">
            Manage educational institutions on the Planifika platform
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Institution
        </Button>
      </div>

      {/* Platform Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="text-center">
          <Building className="h-8 w-8 text-[#3A6EA5] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#222831] font-['Poppins']">{platformStats.totalInstitutions}</div>
          <div className="text-sm text-gray-600">Total Institutions</div>
        </Card>
        
        <Card className="text-center">
          <Users className="h-8 w-8 text-[#FFD369] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#222831] font-['Poppins']">{platformStats.totalUsers.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Total Users</div>
        </Card>
        
        <Card className="text-center">
          <TrendingUp className="h-8 w-8 text-[#4CAF50] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#222831] font-['Poppins']">{platformStats.avgCompletion}%</div>
          <div className="text-sm text-gray-600">Avg Completion</div>
        </Card>
        
        <Card className="text-center">
          <Globe className="h-8 w-8 text-[#FFA726] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#222831] font-['Poppins']">{platformStats.activeInstitutions}</div>
          <div className="text-sm text-gray-600">Active</div>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search institutions, domains, or administrators..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A6EA5] focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex space-x-2">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A6EA5] focus:border-transparent"
            >
              <option value="all">All Institutions</option>
              <option value="active">Active</option>
              <option value="trial">Trial</option>
              <option value="suspended">Suspended</option>
              <option value="enterprise">Enterprise Plan</option>
              <option value="professional">Professional Plan</option>
            </select>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-1" />
              More Filters
            </Button>
          </div>
        </div>
      </Card>

      {/* Institutions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredInstitutions.map((institution) => (
          <Card key={institution.id} className="hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-[#3A6EA5]/10 rounded-lg">
                  <Building className="h-6 w-6 text-[#3A6EA5]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#222831] font-['Poppins']">
                    {institution.name}
                  </h3>
                  <p className="text-sm text-gray-600">{institution.domain}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <span className={`px-2 py-1 text-xs rounded-full ${getPlanColor(institution.plan)}`}>
                  {institution.plan}
                </span>
                <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(institution.status)}`}>
                  {institution.status}
                </span>
              </div>
            </div>

            {/* Institution Stats */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="text-lg font-bold text-[#222831] font-['Poppins']">{institution.users.toLocaleString()}</div>
                <div className="text-xs text-gray-600">Users</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-[#222831] font-['Poppins']">{institution.projects}</div>
                <div className="text-xs text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-[#222831] font-['Poppins']">{institution.completionRate}%</div>
                <div className="text-xs text-gray-600">Completion</div>
              </div>
            </div>

            {/* Health Score */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Institution Health</span>
                <span className="text-sm font-bold text-[#222831]">{institution.health}%</span>
              </div>
              <ProgressBar 
                progress={institution.health} 
                color={institution.health >= 90 ? 'success' : institution.health >= 70 ? 'warning' : 'error'}
              />
            </div>

            {/* Admin Info */}
            <div className="border-t border-gray-200 pt-4 mb-4">
              <div className="text-sm text-gray-600">
                <p><span className="font-medium">Administrator:</span> {institution.admin}</p>
                <p><span className="font-medium">Email:</span> {institution.adminEmail}</p>
                <p><span className="font-medium">Last Activity:</span> {new Date(institution.lastActivity).toLocaleDateString()}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-2">
              <Button size="sm" className="flex-1">View Details</Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Globe className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredInstitutions.length === 0 && (
        <Card className="text-center py-12">
          <Building className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No institutions found</h3>
          <p className="text-gray-500 mb-4">
            {search ? 'Try adjusting your search terms or filters.' : 'No institutions match the selected criteria.'}
          </p>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add First Institution
          </Button>
        </Card>
      )}
    </div>
  );
}