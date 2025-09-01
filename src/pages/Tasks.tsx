import React, { useState } from 'react';
import { Search, Filter, Plus, Clock, CheckCircle, AlertCircle, User, Calendar } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';

export function Tasks() {
  const { user } = useAuth();
  const [filter, setFilter] = useState('todas');
  const [search, setSearch] = useState('');

  const tareas = [
    {
      id: '1',
      title: 'Completar capítulo de revisión literaria',
      description: 'Investigar y compilar literatura existente sobre ética de IA en salud',
      project: 'Ética de IA en Salud',
      projectId: '1',
      status: 'en_progreso',
      priority: 'alta',
      dueDate: '2025-02-15',
      assignee: 'Alice Johnson',
      tags: ['investigación', 'escritura']
    },
    {
      id: '2',
      title: 'Implementar algoritmo de búsqueda binaria',
      description: 'Codificar y probar implementación de árbol de búsqueda binaria',
      project: 'Capstone de Sistemas de BD',
      projectId: '4',
      status: 'pendiente',
      priority: 'media',
      dueDate: '2025-02-18',
      assignee: 'Bob Smith',
      tags: ['codificación', 'algoritmos']
    },
    {
      id: '3',
      title: 'Preparar presentación de investigación',
      description: 'Crear diapositivas para revisión trimestral de investigación',
      project: 'Computación Sostenible',
      projectId: '2',
      status: 'revisión',
      priority: 'media',
      dueDate: '2025-02-20',
      assignee: 'Carol Davis',
      tags: ['presentación']
    },
    {
      id: '4',
      title: 'Revisar propuesta de tesis estudiantil',
      description: 'Evaluar y proporcionar comentarios sobre esquema de tesis',
      project: 'Ética de IA en Salud',
      projectId: '1',
      status: 'pendiente',
      priority: 'alta',
      dueDate: '2025-02-16',
      assignee: 'Dra. Sarah Johnson',
      tags: ['revisión', 'comentarios']
    },
    {
      id: '5',
      title: 'Realizar entrevistas con usuarios',
      description: 'Entrevistar a 10 estudiantes sobre recursos de salud mental',
      project: 'Encuesta de Salud Mental Estudiantil',
      projectId: '3',
      status: 'completado',
      priority: 'baja',
      dueDate: '2025-02-10',
      assignee: 'Emily Rodriguez',
      tags: ['investigación', 'entrevistas']
    },
    {
      id: '6',
      title: 'Configurar repositorio del proyecto',
      description: 'Inicializar repositorio Git y estructura del proyecto',
      project: 'Capstone de Sistemas de BD',
      projectId: '4',
      status: 'pendiente',
      priority: 'media',
      dueDate: '2025-02-22',
      assignee: 'David Wilson',
      tags: ['configuración', 'técnico']
    }
  ];

  const tareasFiltradas = tareas.filter(task => {
    const matchesFilter = filter === 'todas' || 
                         task.status === filter || 
                         task.priority === filter ||
                         (filter === 'mis_tareas' && user?.name === task.assignee);
    const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase()) ||
                         task.project.toLowerCase().includes(search.toLowerCase()) ||
                         task.assignee.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completado': return <CheckCircle className="h-4 w-4 text-[#4CAF50]" />;
      case 'en_progreso': return <Clock className="h-4 w-4 text-[#FFA726]" />;
      case 'revisión': return <AlertCircle className="h-4 w-4 text-[#3A6EA5]" />;
      default: return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'alta': return 'bg-red-100 text-red-800 border-red-200';
      case 'media': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'baja': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const isOverdue = (dueDate: string) => {
    return new Date(dueDate) < new Date();
  };

  const statusCounts = {
    todas: tareas.length,
    pendiente: tareas.filter(t => t.status === 'pendiente').length,
    en_progreso: tareas.filter(t => t.status === 'en_progreso').length,
    revisión: tareas.filter(t => t.status === 'revisión').length,
    completado: tareas.filter(t => t.status === 'completado').length,
    vencidas: tareas.filter(t => isOverdue(t.dueDate) && t.status !== 'completado').length
  };

  return (
    <div className="space-y-6">
      {/* Encabezado */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-[#222831] font-['Poppins']">
            {user?.role === 'student' ? 'Mis Tareas' : 'Gestión de Tareas'}
          </h1>
          <p className="text-gray-600 mt-2 font-['Inter']">
            Rastrea y gestiona tareas en todos tus proyectos.
          </p>
        </div>
        <Button className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Nueva Tarea</span>
        </Button>
      </div>

      {/* Estadísticas de Tareas */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {Object.entries(statusCounts).map(([key, count]) => (
          <Card key={key} padding="sm" className={`text-center cursor-pointer transition-colors ${
            filter === key ? 'ring-2 ring-[#3A6EA5] bg-[#3A6EA5]/5' : 'hover:bg-gray-50'
          }`} onClick={() => setFilter(key)}>
            <div className="text-lg font-bold text-[#222831] font-['Poppins']">{count}</div>
            <div className="text-xs text-gray-600 capitalize">{key.replace('_', ' ')}</div>
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
                placeholder="Buscar tareas, proyectos o asignados..."
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
              <option value="todas">Todas las Tareas</option>
              <option value="mis_tareas">Mis Tareas</option>
              <option value="pendiente">Pendientes</option>
              <option value="en_progreso">En Progreso</option>
              <option value="revisión">En Revisión</option>
              <option value="completado">Completadas</option>
              <option value="vencidas">Vencidas</option>
              <option value="alta">Prioridad Alta</option>
              <option value="media">Prioridad Media</option>
              <option value="baja">Prioridad Baja</option>
            </select>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-1" />
              Más Filtros
            </Button>
          </div>
        </div>
      </Card>

      {/* Lista de Tareas */}
      <div className="space-y-4">
        {tareasFiltradas.map((task) => (
          <Card key={task.id} className={`transition-all duration-200 hover:shadow-md ${
            isOverdue(task.dueDate) && task.status !== 'completado' ? 'border-l-4 border-red-500' : ''
          }`}>
            <div className="flex items-start space-x-4">
              {/* Icono de Estado y Checkbox */}
              <div className="flex items-center space-x-3 pt-1">
                <input 
                  type="checkbox" 
                  checked={task.status === 'completado'}
                  className="h-4 w-4 text-[#3A6EA5] border-gray-300 rounded focus:ring-[#3A6EA5]"
                  onChange={() => {}}
                />
                {getStatusIcon(task.status)}
              </div>

              {/* Contenido de la Tarea */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-[#222831] font-['Poppins']">
                    {task.title}
                  </h3>
                  <div className="flex items-center space-x-2 ml-4">
                    <span className={`px-2 py-1 text-xs rounded-full border ${getPriorityColor(task.priority)}`}>
                      prioridad {task.priority}
                    </span>
                    {isOverdue(task.dueDate) && task.status !== 'completado' && (
                      <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
                        Vencida
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm text-gray-600 font-['Inter'] mb-3">{task.description}</p>

                {/* Meta de la Tarea */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="h-3 w-3" />
                    <span>{task.assignee}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-3 w-3" />
                    <span className={isOverdue(task.dueDate) && task.status !== 'completado' ? 'text-red-600 font-medium' : ''}>
                      Vence {new Date(task.dueDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="text-[#3A6EA5] hover:underline cursor-pointer">
                    {task.project}
                  </div>
                </div>

                {/* Etiquetas */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {task.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Acciones */}
                <div className="flex items-center space-x-2">
                  <Button size="sm">Ver Detalles</Button>
                  <Button variant="outline" size="sm">Editar</Button>
                  <Button variant="outline" size="sm">Comentar</Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Estado Vacío */}
      {tareasFiltradas.length === 0 && (
        <Card className="text-center py-12">
          <CheckCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron tareas</h3>
          <p className="text-gray-500 mb-4">
            {search ? 'Intenta ajustar tus términos de búsqueda o filtros.' : '¡Todo al día! No hay tareas que coincidan con tu filtro actual.'}
          </p>
        </Card>
      )}
    </div>
  );
}