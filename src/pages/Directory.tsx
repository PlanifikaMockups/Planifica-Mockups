import React, { useState } from 'react';
import { Search, Filter, Mail, Phone, MapPin, GraduationCap, Users, UserPlus, Settings } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';

export function Directory() {
  const { user } = useAuth();
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('todos');
  const [facultyFilter, setFacultyFilter] = useState('todas');

  const usuarios = [
    {
      id: '1',
      name: 'Dra. Sarah Johnson',
      email: 'sarah.johnson@stanford.edu',
      role: 'profesor',
      faculty: 'Ciencias de la Computación',
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=100&h=100&fit=crop&crop=face',
      projects: 8,
      students: 15,
      office: 'Gates 392',
      phone: '+1 (650) 723-4567'
    },
    {
      id: '2',
      name: 'Alice Chen',
      email: 'alice.chen@stanford.edu',
      role: 'estudiante',
      faculty: 'Ciencias de la Computación',
      avatar: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?w=100&h=100&fit=crop&crop=face',
      projects: 2,
      year: 'Candidata a PhD',
      advisor: 'Dra. Sarah Johnson'
    },
    {
      id: '3',
      name: 'Prof. Michael Chen',
      email: 'michael.chen@stanford.edu',
      role: 'profesor',
      faculty: 'Ingeniería',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?w=100&h=100&fit=crop&crop=face',
      projects: 12,
      students: 23,
      office: 'Huang 241',
      phone: '+1 (650) 723-5678'
    },
    {
      id: '4',
      name: 'Dra. Emily Rodriguez',
      email: 'emily.rodriguez@stanford.edu',
      role: 'investigador',
      faculty: 'Psicología',
      avatar: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?w=100&h=100&fit=crop&crop=face',
      projects: 5,
      specialization: 'Psicología Educativa'
    },
    {
      id: '5',
      name: 'Robert Kim',
      email: 'robert.kim@stanford.edu',
      role: 'estudiante',
      faculty: 'Ingeniería',
      avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?w=100&h=100&fit=crop&crop=face',
      projects: 1,
      year: 'Senior',
      advisor: 'Prof. Michael Chen'
    },
    {
      id: '6',
      name: 'Lisa Park',
      email: 'lisa.park@stanford.edu',
      role: 'admin_institución',
      faculty: 'Administración',
      avatar: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?w=100&h=100&fit=crop&crop=face',
      department: 'Asuntos Académicos'
    }
  ];

  const usuariosFiltrados = usuarios.filter(person => {
    const matchesSearch = person.name.toLowerCase().includes(search.toLowerCase()) ||
                         person.email.toLowerCase().includes(search.toLowerCase()) ||
                         person.faculty.toLowerCase().includes(search.toLowerCase());
    const matchesRole = roleFilter === 'todos' || person.role === roleFilter;
    const matchesFaculty = facultyFilter === 'todas' || person.faculty === facultyFilter;
    return matchesSearch && matchesRole && matchesFaculty;
  });

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'profesor': return <GraduationCap className="h-4 w-4 text-[#3A6EA5]" />;
      case 'investigador': return <Search className="h-4 w-4 text-[#FFD369]" />;
      case 'admin_institución': return <Settings className="h-4 w-4 text-[#FFA726]" />;
      default: return <Users className="h-4 w-4 text-gray-500" />;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'profesor': return 'bg-blue-100 text-blue-800';
      case 'investigador': return 'bg-purple-100 text-purple-800';
      case 'admin_institución': return 'bg-orange-100 text-orange-800';
      default: return 'bg-green-100 text-green-800';
    }
  };

  const roleCounts = {
    todos: usuarios.length,
    estudiante: usuarios.filter(u => u.role === 'estudiante').length,
    profesor: usuarios.filter(u => u.role === 'profesor').length,
    investigador: usuarios.filter(u => u.role === 'investigador').length,
    admin_institución: usuarios.filter(u => u.role === 'admin_institución').length
  };

  return (
    <div className="space-y-6">
      {/* Encabezado */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-[#222831] font-['Poppins']">Directorio</h1>
          <p className="text-gray-600 mt-2 font-['Inter']">
            Conecta con profesores, estudiantes e investigadores en tu institución
          </p>
        </div>
        {user?.role === 'institution_admin' && (
          <Button>
            <UserPlus className="h-4 w-4 mr-2" />
            Invitar Usuarios
          </Button>
        )}
      </div>

      {/* Estadísticas de Roles */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {Object.entries(roleCounts).map(([role, count]) => (
          <Card 
            key={role} 
            padding="sm" 
            className={`text-center cursor-pointer transition-colors ${
              roleFilter === role ? 'ring-2 ring-[#3A6EA5] bg-[#3A6EA5]/5' : 'hover:bg-gray-50'
            }`}
            onClick={() => setRoleFilter(role)}
          >
            <div className="text-lg font-bold text-[#222831] font-['Poppins']">{count}</div>
            <div className="text-xs text-gray-600 capitalize">{role.replace('_', ' ')}</div>
          </Card>
        ))}
      </div>

      {/* Búsqueda y Filtros */}
      <Card>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por nombre, correo o facultad..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A6EA5] focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex space-x-2">
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A6EA5] focus:border-transparent"
            >
              <option value="todos">Todos los Roles</option>
              <option value="estudiante">Estudiantes</option>
              <option value="profesor">Profesores</option>
              <option value="investigador">Investigadores</option>
              <option value="admin_institución">Administradores</option>
            </select>
            <select
              value={facultyFilter}
              onChange={(e) => setFacultyFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A6EA5] focus:border-transparent"
            >
              <option value="todas">Todas las Facultades</option>
              <option value="Ciencias de la Computación">Ciencias de la Computación</option>
              <option value="Ingeniería">Ingeniería</option>
              <option value="Matemáticas">Matemáticas</option>
              <option value="Física">Física</option>
              <option value="Psicología">Psicología</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Cuadrícula de Usuarios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {usuariosFiltrados.map((person) => (
          <Card key={person.id} className="hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start space-x-4">
              <img
                src={person.avatar}
                alt={person.name}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-[#222831] font-['Poppins'] truncate">
                    {person.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    {getRoleIcon(person.role)}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <span className={`inline-flex px-2 py-1 text-xs rounded-full ${getRoleColor(person.role)}`}>
                    {person.role.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                  
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="h-3 w-3" />
                      <span>{person.faculty}</span>
                    </div>
                    
                    {person.office && (
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-3 w-3" />
                        <span>{person.office}</span>
                      </div>
                    )}
                    
                    {person.year && (
                      <div className="text-xs text-gray-500">
                        {person.year}
                      </div>
                    )}
                    
                    {person.advisor && (
                      <div className="text-xs text-gray-500">
                        Asesor: {person.advisor}
                      </div>
                    )}
                    
                    {person.specialization && (
                      <div className="text-xs text-gray-500">
                        {person.specialization}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                {person.projects && <span>{person.projects} proyectos</span>}
                {person.students && <span>{person.students} estudiantes</span>}
              </div>
              
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Mail className="h-3 w-3 mr-1" />
                  Contactar
                </Button>
                <Button size="sm" variant="outline">
                  Ver Perfil
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Estado Vacío */}
      {usuariosFiltrados.length === 0 && (
        <Card className="text-center py-12">
          <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron usuarios</h3>
          <p className="text-gray-500 mb-4">
            {search ? 'Intenta ajustar tus términos de búsqueda o filtros.' : 'No hay usuarios que coincidan con los criterios seleccionados.'}
          </p>
        </Card>
      )}
    </div>
  );
}