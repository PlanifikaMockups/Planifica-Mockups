import React, { useState } from 'react';
import { Search, Filter, Plus, BookOpen, Users, Clock, CheckCircle } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

export function Projects() {
  const { user } = useAuth();
  const [filter, setFilter] = useState('todos');
  const [search, setSearch] = useState('');

  const proyectos = [
    {
      id: '1',
      name: 'Ética de IA en Salud',
      description: 'Proyecto de investigación explorando las implicaciones éticas de la IA en diagnóstico médico',
      type: 'investigación',
      status: 'activo',
      progress: 75,
      startDate: '2024-09-01',
      endDate: '2025-06-01',
      members: 4,
      supervisor: 'Dra. Sarah Johnson',
      faculty: 'Ciencias de la Computación',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?w=400&h=200&fit=crop'
    },
    {
      id: '2',
      name: 'Infraestructura de Computación Sostenible',
      description: 'Desarrollando soluciones de computación eficientes en energía para entornos académicos',
      type: 'investigación',
      status: 'activo',
      progress: 60,
      startDate: '2024-10-15',
      endDate: '2025-08-15',
      members: 6,
      supervisor: 'Prof. Michael Chen',
      faculty: 'Ingeniería',
      image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?w=400&h=200&fit=crop'
    },
    {
      id: '3',
      name: 'Encuesta de Salud Mental Estudiantil',
      description: 'Encuesta y análisis de factores de bienestar estudiantil en todo el campus',
      type: 'social',
      status: 'revisión',
      progress: 90,
      startDate: '2024-08-01',
      endDate: '2025-02-01',
      members: 3,
      supervisor: 'Dra. Emily Rodriguez',
      faculty: 'Psicología',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=400&h=200&fit=crop'
    },
    {
      id: '4',
      name: 'Capstone de Sistemas de Base de Datos',
      description: 'Proyecto capstone senior implementando soluciones de base de datos distribuidas',
      type: 'académico',
      status: 'planificación',
      progress: 15,
      startDate: '2025-01-15',
      endDate: '2025-05-15',
      members: 2,
      supervisor: 'Prof. David Wilson',
      faculty: 'Ciencias de la Computación',
      image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?w=400&h=200&fit=crop'
    }
  ];

  const proyectosFiltrados = proyectos.filter(project => {
    const matchesFilter = filter === 'todos' || project.type === filter || project.status === filter;
    const matchesSearch = project.name.toLowerCase().includes(search.toLowerCase()) ||
                         project.supervisor.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'activo': return <Clock className="h-4 w-4 text-[#FFA726]" />;
      case 'completado': return <CheckCircle className="h-4 w-4 text-[#4CAF50]" />;
      case 'revisión': return <BookOpen className="h-4 w-4 text-[#3A6EA5]" />;
      default: return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Encabezado */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#222831] font-['Poppins']">
            {user?.role === 'student' ? 'Mis Proyectos' : 
             user?.role === 'professor' ? 'Proyectos Supervisados' :
             user?.role === 'researcher' ? 'Proyectos de Investigación' : 'Proyectos'}
          </h1>
          <p className="text-gray-600 mt-2 font-['Inter']">
            Gestiona y rastrea tus {user?.role === 'institution_admin' ? 'proyectos de la institución' : 'proyectos'}.
          </p>
        </div>
        {(user?.role === 'professor' || user?.role === 'institution_admin' || user?.role === 'researcher') && (
          <Button className="flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Nuevo Proyecto</span>
          </Button>
        )}
      </div>

      {/* Búsqueda y Filtros */}
      <Card>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar proyectos o supervisores..."
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
              <option value="todos">Todos los Proyectos</option>
              <option value="académico">Académico</option>
              <option value="investigación">Investigación</option>
              <option value="social">Social</option>
              <option value="admin">Administrativo</option>
              <option value="activo">Activo</option>
              <option value="completado">Completado</option>
              <option value="revisión">En Revisión</option>
            </select>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-1" />
              Más Filtros
            </Button>
          </div>
        </div>
      </Card>

      {/* Cuadrícula de Proyectos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {proyectosFiltrados.map((project) => (
          <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
            {/* Imagen del proyecto */}
            <div className="relative h-40 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute top-3 right-3 flex space-x-2">
                <span className={`text-xs px-2 py-1 rounded-full capitalize ${
                  project.type === 'investigación' ? 'bg-purple-100 text-purple-800' :
                  project.type === 'académico' ? 'bg-blue-100 text-blue-800' :
                  project.type === 'social' ? 'bg-green-100 text-green-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {project.type}
                </span>
                <span className={`text-xs px-2 py-1 rounded-full capitalize ${
                  project.status === 'activo' ? 'bg-green-100 text-green-800' :
                  project.status === 'completado' ? 'bg-gray-100 text-gray-800' :
                  project.status === 'revisión' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {project.status}
                </span>
              </div>
              <div className="absolute bottom-3 left-3 flex items-center space-x-2">
                {getStatusIcon(project.status)}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[#222831] mb-2 font-['Poppins']">
                {project.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4 font-['Inter'] line-clamp-2">
                {project.description}
              </p>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Supervisor: {project.supervisor}</span>
                  <span className="flex items-center space-x-1">
                    <Users className="h-3 w-3" />
                    <span>{project.members}</span>
                  </span>
                </div>
                <ProgressBar progress={project.progress} showLabel />
                <div className="text-xs text-gray-500">
                  {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Link to={`/projects/${project.id}`} className="flex-1">
                  <Button className="w-full" size="sm">Ver Detalles</Button>
                </Link>
                <Button variant="outline" size="sm">
                  <Users className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Estado Vacío */}
      {proyectosFiltrados.length === 0 && (
        <Card className="text-center py-12">
          <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron proyectos</h3>
          <p className="text-gray-500 mb-4">
            {search ? 'Intenta ajustar tus términos de búsqueda o filtros.' : 'Comienza creando tu primer proyecto.'}
          </p>
          {(user?.role === 'professor' || user?.role === 'institution_admin' || user?.role === 'researcher') && (
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Crear Proyecto
            </Button>
          )}
        </Card>
      )}
    </div>
  );
}