import React from 'react';
import { Clock, CheckCircle, AlertCircle, Calendar, BookOpen, TrendingUp, Award, Bell, Target, Star, Users } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ProgressBar } from '../ui/ProgressBar';
import { Badge } from '../ui/Badge';
import { useAuth } from '../../contexts/AuthContext';
import { formatDate, getDaysUntil } from '../../utils/dateUtils';

export function StudentDashboard() {
  const { user } = useAuth();

  const misProyectos = [
    {
      id: '1',
      name: 'Tesis de Grado: Ética de IA en Salud',
      type: 'académico',
      progress: 75,
      dueDate: '2025-04-15',
      supervisor: 'Dra. Sarah Johnson',
      status: 'activo',
      priority: 'alta',
      nextMilestone: 'Borrador Final de Revisión Literaria',
      color: '#3A6EA5',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?w=400&h=200&fit=crop'
    },
    {
      id: '2',
      name: 'Proyecto Capstone de Machine Learning',
      type: 'académico',
      progress: 60,
      dueDate: '2025-03-20',
      supervisor: 'Prof. Michael Chen',
      status: 'activo',
      priority: 'media',
      nextMilestone: 'Implementación del Modelo',
      color: '#4CAF50',
      image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?w=400&h=200&fit=crop'
    },
    {
      id: '3',
      name: 'Iniciativa de Sostenibilidad del Campus',
      type: 'social',
      progress: 85,
      dueDate: '2025-02-28',
      supervisor: 'Dra. Emily Rodriguez',
      status: 'revisión',
      priority: 'media',
      nextMilestone: 'Presentación Final',
      color: '#FFD369',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?w=400&h=200&fit=crop'
    }
  ];

  const tareasUrgentes = [
    { 
      id: '1', 
      title: 'Completar análisis del marco ético', 
      project: 'Tesis de Grado', 
      dueDate: '2025-02-16', 
      priority: 'alta',
      estimatedTime: '4 horas'
    },
    { 
      id: '2', 
      title: 'Implementar arquitectura de red neuronal', 
      project: 'ML Capstone', 
      dueDate: '2025-02-18', 
      priority: 'alta',
      estimatedTime: '6 horas'
    },
    { 
      id: '3', 
      title: 'Preparar presentación de métricas de sostenibilidad', 
      project: 'Iniciativa de Sostenibilidad', 
      dueDate: '2025-02-20', 
      priority: 'media',
      estimatedTime: '3 horas'
    }
  ];

  const logros = [
    { title: 'Primer Artículo de Investigación Publicado', date: '2025-01-15', type: 'académico', icon: Award },
    { title: 'Premio a Proyecto Destacado', date: '2024-12-10', type: 'reconocimiento', icon: Star },
    { title: 'Excelencia Colaborativa', date: '2024-11-20', type: 'trabajo en equipo', icon: Users }
  ];

  const notificaciones = [
    { 
      id: '1', 
      type: 'feedback', 
      message: 'La Dra. Johnson proporcionó comentarios detallados sobre tu capítulo de metodología', 
      time: 'hace 2 horas', 
      priority: 'alta',
      actionLabel: 'Ver Comentarios'
    },
    { 
      id: '2', 
      type: 'deadline', 
      message: 'Borrador final de revisión literaria vence en 2 días', 
      time: 'hace 6 horas', 
      priority: 'media',
      actionLabel: 'Ver Tarea'
    },
    { 
      id: '3', 
      type: 'collaboration', 
      message: 'Reunión de equipo programada para mañana a las 2 PM', 
      time: 'hace 1 día', 
      priority: 'baja',
      actionLabel: 'Agregar al Calendario'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'alta': return 'error';
      case 'media': return 'warning';
      case 'baja': return 'success';
      default: return 'default';
    }
  };

  return (
    <div className="space-y-8 fade-in-up">
      {/* Encabezado de Bienvenida Mejorado */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#3A6EA5] via-[#3A6EA5] to-[#222831] p-8 text-white academic-glow">
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Target className="h-8 w-8 text-[#FFD369]" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold font-['Poppins']">
                ¡Bienvenido de vuelta, {user?.name?.split(' ')[0]}! 👋
              </h1>
              <p className="text-lg text-blue-100 font-['Inter']">
                Año Académico 2024-25 • Semestre de Primavera
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold font-['Poppins']">{misProyectos.filter(p => p.status === 'activo').length}</div>
              <div className="text-sm text-blue-100">Proyectos Activos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold font-['Poppins']">{tareasUrgentes.length}</div>
              <div className="text-sm text-blue-100">Tareas Urgentes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold font-['Poppins']">92%</div>
              <div className="text-sm text-blue-100">Progreso General</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button className="bg-[#FFD369] text-[#222831] hover:bg-[#FFD369]/90 font-['Poppins'] planifika-button-glow">
              Ver Todas las Tareas
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-[#222831] font-['Poppins']">
              Calendario de Proyectos
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-[#222831] font-['Poppins']">
              Chat del Equipo
            </Button>
          </div>
        </div>
        
        {/* Elementos académicos decorativos */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <div className="academic-pattern w-full h-full"></div>
        </div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FFD369]/20 rounded-full blur-xl"></div>
      </div>

      {/* Estadísticas Rápidas Mejoradas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="text-center planifika-card-hover academic-glow">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#3A6EA5]/20 to-[#3A6EA5]/5 rounded-2xl mb-4 mx-auto">
            <BookOpen className="h-8 w-8 text-[#3A6EA5]" />
          </div>
          <div className="text-3xl font-bold text-[#222831] font-['Poppins'] mb-1">{misProyectos.length}</div>
          <div className="text-sm text-gray-600 font-['Inter']">Proyectos Activos</div>
          <div className="text-xs text-[#4CAF50] mt-2 flex items-center justify-center">
            <TrendingUp className="h-3 w-3 mr-1" />
            +2 este mes
          </div>
        </Card>
        
        <Card className="text-center planifika-card-hover academic-glow">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FFA726]/20 to-[#FFA726]/5 rounded-2xl mb-4 mx-auto">
            <Clock className="h-8 w-8 text-[#FFA726]" />
          </div>
          <div className="text-3xl font-bold text-[#222831] font-['Poppins'] mb-1">{tareasUrgentes.length}</div>
          <div className="text-sm text-gray-600 font-['Inter']">Tareas Urgentes</div>
          <div className="text-xs text-[#E53935] mt-2 flex items-center justify-center">
            <AlertCircle className="h-3 w-3 mr-1" />
            2 vencidas
          </div>
        </Card>
        
        <Card className="text-center planifika-card-hover academic-glow">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#4CAF50]/20 to-[#4CAF50]/5 rounded-2xl mb-4 mx-auto">
            <CheckCircle className="h-8 w-8 text-[#4CAF50]" />
          </div>
          <div className="text-3xl font-bold text-[#222831] font-['Poppins'] mb-1">24</div>
          <div className="text-sm text-gray-600 font-['Inter']">Tareas Completadas</div>
          <div className="text-xs text-[#4CAF50] mt-2 flex items-center justify-center">
            <CheckCircle className="h-3 w-3 mr-1" />
            +8 esta semana
          </div>
        </Card>
        
        <Card className="text-center planifika-card-hover academic-glow">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FFD369]/20 to-[#FFD369]/5 rounded-2xl mb-4 mx-auto">
            <Award className="h-8 w-8 text-[#FFD369]" />
          </div>
          <div className="text-3xl font-bold text-[#222831] font-['Poppins'] mb-1">{logros.length}</div>
          <div className="text-sm text-gray-600 font-['Inter']">Logros</div>
          <div className="text-xs text-[#3A6EA5] mt-2 flex items-center justify-center">
            <Star className="h-3 w-3 mr-1" />
            Último: 15 Ene
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Mis Proyectos Mejorados */}
        <div className="xl:col-span-2 space-y-6">
          <Card className="academic-glow">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-[#3A6EA5]/10 rounded-xl">
                  <BookOpen className="h-6 w-6 text-[#3A6EA5]" />
                </div>
                <h2 className="text-2xl font-semibold text-[#222831] font-['Poppins']">Mis Proyectos</h2>
              </div>
              <Button variant="outline" size="sm" className="font-['Inter']">Ver Todos los Proyectos</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {misProyectos.map((project, index) => (
                <div 
                  key={project.id} 
                  className="group relative border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-gray-300 transition-all duration-300 planifika-card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Imagen del proyecto */}
                  <div className="relative h-32 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-3 right-3">
                      <Badge variant={project.status === 'activo' ? 'success' : project.status === 'revisión' ? 'warning' : 'default'}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-[#222831] font-['Poppins'] group-hover:text-[#3A6EA5] transition-colors text-sm leading-tight">
                        {project.name}
                      </h3>
                    </div>
                    
                    <p className="text-xs text-gray-600 font-['Inter'] mb-3">Supervisor: {project.supervisor}</p>
                    
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium text-gray-700 font-['Inter']">Progreso</span>
                        <span className="text-xs font-bold text-[#222831] font-['Poppins']">{project.progress}%</span>
                      </div>
                      <ProgressBar 
                        progress={project.progress} 
                        color={project.progress >= 80 ? 'success' : project.progress >= 50 ? 'primary' : 'warning'}
                        size="sm"
                      />
                    </div>
                    
                    <div className="text-xs text-gray-600 font-['Inter'] mb-3">
                      Siguiente: {project.nextMilestone}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1 font-['Inter'] text-xs">Ver Proyecto</Button>
                      <Button variant="outline" size="sm" className="font-['Inter'] text-xs">Actualizar</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Contenido de la Barra Lateral Mejorado */}
        <div className="space-y-6">
          {/* Tareas Urgentes */}
          <Card className="academic-glow">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-[#E53935]/10 rounded-xl">
                <AlertCircle className="h-6 w-6 text-[#E53935]" />
              </div>
              <h2 className="text-xl font-semibold text-[#222831] font-['Poppins']">Tareas Urgentes</h2>
            </div>
            
            <div className="space-y-4">
              {tareasUrgentes.map((task, index) => (
                <div 
                  key={task.id} 
                  className="group p-4 border border-gray-200 rounded-xl hover:shadow-lg hover:border-gray-300 transition-all duration-200"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-3">
                    <input 
                      type="checkbox" 
                      className="h-5 w-5 text-[#3A6EA5] border-gray-300 rounded focus:ring-[#3A6EA5] mt-0.5 interactive-scale"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-[#222831] font-['Inter'] mb-1 group-hover:text-[#3A6EA5] transition-colors text-sm">
                        {task.title}
                      </h4>
                      <div className="flex items-center space-x-2 text-xs text-gray-600 font-['Inter'] mb-2">
                        <span>{task.project}</span>
                        <span>•</span>
                        <span>{task.estimatedTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge variant={getPriorityColor(task.priority)} size="sm">
                          prioridad {task.priority}
                        </Badge>
                        <span className={`text-xs font-medium ${
                          getDaysUntil(task.dueDate) <= 1 ? 'text-[#E53935]' : 'text-gray-500'
                        }`}>
                          {getDaysUntil(task.dueDate) <= 0 ? 'Vencida' : `${getDaysUntil(task.dueDate)}d restantes`}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="outline" className="w-full mt-4 font-['Inter']">
              Ver Todas las Tareas ({tareasUrgentes.length + 12})
            </Button>
          </Card>

          {/* Logros Recientes */}
          <Card className="academic-glow">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-[#FFD369]/10 rounded-xl">
                <Award className="h-6 w-6 text-[#FFD369]" />
              </div>
              <h2 className="text-xl font-semibold text-[#222831] font-['Poppins']">Logros Recientes</h2>
            </div>
            
            <div className="space-y-3">
              {logros.map((achievement, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 p-3 bg-gradient-to-r from-[#FFD369]/5 to-transparent rounded-xl"
                >
                  <div className="p-2 bg-[#FFD369]/20 rounded-lg">
                    <achievement.icon className="h-4 w-4 text-[#FFD369]" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-[#222831] font-['Inter'] text-sm">{achievement.title}</p>
                    <p className="text-xs text-gray-500 font-['Inter']">{formatDate(achievement.date)}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Notificaciones Mejoradas */}
          <Card className="academic-glow">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-[#3A6EA5]/10 rounded-xl">
                  <Bell className="h-6 w-6 text-[#3A6EA5]" />
                </div>
                <h2 className="text-xl font-semibold text-[#222831] font-['Poppins']">Actualizaciones Recientes</h2>
              </div>
              <Badge variant="error" size="sm">{notificaciones.filter(n => n.priority === 'alta').length} urgentes</Badge>
            </div>
            
            <div className="space-y-3">
              {notificaciones.map((notification, index) => (
                <div 
                  key={notification.id} 
                  className={`p-4 rounded-xl border-l-4 transition-all duration-200 hover:shadow-md ${
                    notification.priority === 'alta' ? 'border-[#E53935] bg-red-50/50' :
                    notification.priority === 'media' ? 'border-[#FFA726] bg-yellow-50/50' :
                    'border-[#4CAF50] bg-green-50/50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-sm font-medium text-[#222831] font-['Inter'] leading-relaxed">
                      {notification.message}
                    </p>
                    <Badge variant={getPriorityColor(notification.priority)} size="sm">
                      {notification.priority}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500 font-['Inter']">{notification.time}</p>
                    <Button size="sm" variant="outline" className="text-xs font-['Inter']">
                      {notification.actionLabel}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Acciones Rápidas Mejoradas */}
      <Card className="academic-glow">
        <h2 className="text-2xl font-semibold text-[#222831] mb-6 font-['Poppins']">Acciones Rápidas</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Button 
            variant="outline" 
            className="flex flex-col items-center justify-center space-y-3 py-8 h-auto planifika-card-hover group"
          >
            <div className="p-4 bg-[#3A6EA5]/10 rounded-2xl group-hover:bg-[#3A6EA5]/20 transition-colors">
              <BookOpen className="h-8 w-8 text-[#3A6EA5]" />
            </div>
            <div className="text-center">
              <div className="font-semibold text-[#222831] font-['Poppins']">Nuevo Proyecto</div>
              <div className="text-xs text-gray-500 font-['Inter']">Iniciar un nuevo proyecto académico</div>
            </div>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex flex-col items-center justify-center space-y-3 py-8 h-auto planifika-card-hover group"
          >
            <div className="p-4 bg-[#4CAF50]/10 rounded-2xl group-hover:bg-[#4CAF50]/20 transition-colors">
              <CheckCircle className="h-8 w-8 text-[#4CAF50]" />
            </div>
            <div className="text-center">
              <div className="font-semibold text-[#222831] font-['Poppins']">Agregar Tarea</div>
              <div className="text-xs text-gray-500 font-['Inter']">Crear una nueva tarea</div>
            </div>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex flex-col items-center justify-center space-y-3 py-8 h-auto planifika-card-hover group"
          >
            <div className="p-4 bg-[#FFA726]/10 rounded-2xl group-hover:bg-[#FFA726]/20 transition-colors">
              <Calendar className="h-8 w-8 text-[#FFA726]" />
            </div>
            <div className="text-center">
              <div className="font-semibold text-[#222831] font-['Poppins']">Agendar Reunión</div>
              <div className="text-xs text-gray-500 font-['Inter']">Reunirse con asesores</div>
            </div>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex flex-col items-center justify-center space-y-3 py-8 h-auto planifika-card-hover group"
          >
            <div className="p-4 bg-[#FFD369]/10 rounded-2xl group-hover:bg-[#FFD369]/20 transition-colors">
              <TrendingUp className="h-8 w-8 text-[#FFD369]" />
            </div>
            <div className="text-center">
              <div className="font-semibold text-[#222831] font-['Poppins']">Ver Análisis</div>
              <div className="text-xs text-gray-500 font-['Inter']">Rastrear tu progreso</div>
            </div>
          </Button>
        </div>
      </Card>
    </div>
  );
}