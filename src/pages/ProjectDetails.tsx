import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Users, 
  Calendar, 
  FileText, 
  MessageSquare, 
  BarChart3,
  Settings,
  Clock,
  CheckCircle,
  AlertTriangle,
  Plus,
  Target,
  BookOpen,
  Kanban
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';

export function ProjectDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('resumen');

  // Datos del proyecto simulados
  const proyecto = {
    id: '1',
    name: 'Ética de IA en Salud',
    description: 'Proyecto de investigación integral explorando las implicaciones éticas de la inteligencia artificial en diagnóstico médico y decisiones de tratamiento.',
    type: 'investigación',
    status: 'activo',
    progress: 75,
    startDate: '2024-09-01',
    endDate: '2025-06-01',
    supervisor: {
      name: 'Dra. Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=100&h=100&fit=crop&crop=face'
    },
    members: [
      { name: 'Alice Johnson', role: 'Investigadora Principal', avatar: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?w=100&h=100&fit=crop&crop=face' },
      { name: 'Bob Chen', role: 'Analista de Datos', avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?w=100&h=100&fit=crop&crop=face' },
      { name: 'Carol Davis', role: 'Consultora de Ética', avatar: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?w=100&h=100&fit=crop&crop=face' }
    ],
    faculty: 'Ciencias de la Computación',
    institution: 'Universidad de Stanford',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?w=800&h=300&fit=crop'
  };

  const tareas = [
    { id: '1', title: 'Revisión Literaria', status: 'completado', assignee: 'Alice Johnson', dueDate: '2025-01-15' },
    { id: '2', title: 'Marco de Recolección de Datos', status: 'en_progreso', assignee: 'Bob Chen', dueDate: '2025-02-20' },
    { id: '3', title: 'Borrador de Directrices Éticas', status: 'pendiente', assignee: 'Carol Davis', dueDate: '2025-03-10' },
    { id: '4', title: 'Entrevistas con Partes Interesadas', status: 'revisión', assignee: 'Alice Johnson', dueDate: '2025-02-28' }
  ];

  const entregables = [
    { id: '1', name: 'Propuesta de Investigación', status: 'completado', dueDate: '2024-10-01', submittedDate: '2024-09-28' },
    { id: '2', name: 'Revisión Literaria', status: 'completado', dueDate: '2025-01-15', submittedDate: '2025-01-12' },
    { id: '3', name: 'Artículo de Metodología', status: 'en_progreso', dueDate: '2025-03-01' },
    { id: '4', name: 'Tesis Final', status: 'pendiente', dueDate: '2025-05-15' }
  ];

  const hitos = [
    { id: '1', title: 'Aprobación del Proyecto', date: '2024-09-01', status: 'completado' },
    { id: '2', title: 'Revisión Literaria Completa', date: '2025-01-15', status: 'completado' },
    { id: '3', title: 'Fase de Recolección de Datos', date: '2025-03-01', status: 'en_progreso' },
    { id: '4', title: 'Análisis y Escritura', date: '2025-04-15', status: 'pendiente' },
    { id: '5', title: 'Defensa Final', date: '2025-05-30', status: 'pendiente' }
  ];

  const tabs = [
    { id: 'resumen', name: 'Resumen', icon: BookOpen },
    { id: 'entregables', name: 'Entregables', icon: FileText },
    { id: 'tareas', name: 'Tareas', icon: CheckCircle },
    { id: 'kanban', name: 'Kanban', icon: Kanban },
    { id: 'calendario', name: 'Calendario', icon: Calendar },
    { id: 'documentos', name: 'Documentos', icon: FileText },
    { id: 'chat', name: 'Chat', icon: MessageSquare },
    { id: 'reportes', name: 'Reportes', icon: BarChart3 }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completado': return <CheckCircle className="h-4 w-4 text-[#4CAF50]" />;
      case 'en_progreso': return <Clock className="h-4 w-4 text-[#FFA726]" />;
      case 'revisión': return <AlertTriangle className="h-4 w-4 text-[#3A6EA5]" />;
      default: return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Encabezado */}
      <div className="flex items-center space-x-4">
        <Link to="/projects">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Proyectos
          </Button>
        </Link>
        <div className="flex-1">
          <div className="flex items-center space-x-3">
            <Target className="h-8 w-8 text-[#3A6EA5]" />
            <div>
              <h1 className="text-3xl font-bold text-[#222831] font-['Poppins']">{proyecto.name}</h1>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                <span>{proyecto.faculty} • {proyecto.institution}</span>
                <span className="capitalize">Proyecto de {proyecto.type}</span>
              </div>
            </div>
          </div>
        </div>
        <Button>
          <Settings className="h-4 w-4 mr-2" />
          Configuración del Proyecto
        </Button>
      </div>

      {/* Imagen del Proyecto */}
      <div className="relative h-64 rounded-2xl overflow-hidden">
        <img 
          src={proyecto.image} 
          alt={proyecto.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <h2 className="text-2xl font-bold font-['Poppins'] mb-2">{proyecto.name}</h2>
          <p className="text-sm opacity-90 font-['Inter']">{proyecto.description}</p>
        </div>
      </div>

      {/* Tarjetas de Resumen del Proyecto */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="text-center">
          <div className="text-2xl font-bold text-[#222831] font-['Poppins']">{proyecto.progress}%</div>
          <div className="text-sm text-gray-600">Progreso</div>
          <ProgressBar progress={proyecto.progress} className="mt-2" />
        </Card>
        
        <Card className="text-center">
          <Users className="h-8 w-8 text-[#3A6EA5] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#222831] font-['Poppins']">{proyecto.members.length + 1}</div>
          <div className="text-sm text-gray-600">Miembros del Equipo</div>
        </Card>
        
        <Card className="text-center">
          <FileText className="h-8 w-8 text-[#FFD369] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#222831] font-['Poppins']">{entregables.length}</div>
          <div className="text-sm text-gray-600">Entregables</div>
        </Card>
        
        <Card className="text-center">
          <CheckCircle className="h-8 w-8 text-[#4CAF50] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#222831] font-['Poppins']">{tareas.filter(t => t.status === 'completado').length}</div>
          <div className="text-sm text-gray-600">Tareas Completadas</div>
        </Card>
      </div>

      {/* Pestañas */}
      <Card padding="sm">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-3 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                    isActive
                      ? 'border-[#3A6EA5] text-[#3A6EA5]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </Card>

      {/* Contenido de Pestañas */}
      {activeTab === 'resumen' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contenido Principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Descripción del Proyecto */}
            <Card>
              <h2 className="text-xl font-semibold text-[#222831] mb-4 font-['Poppins']">Descripción del Proyecto</h2>
              <p className="text-gray-600 font-['Inter'] leading-relaxed">{proyecto.description}</p>
            </Card>

            {/* Actividad Reciente */}
            <Card>
              <h2 className="text-xl font-semibold text-[#222831] mb-4 font-['Poppins']">Actividad Reciente</h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 border-l-4 border-[#4CAF50] bg-green-50 rounded-r-lg">
                  <CheckCircle className="h-4 w-4 text-[#4CAF50] mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Revisión literaria completada</p>
                    <p className="text-xs text-gray-500">Por Alice Johnson • hace 2 días</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 border-l-4 border-[#3A6EA5] bg-blue-50 rounded-r-lg">
                  <MessageSquare className="h-4 w-4 text-[#3A6EA5] mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Dra. Johnson dejó comentarios sobre metodología</p>
                    <p className="text-xs text-gray-500">hace 3 días</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Barra Lateral */}
          <div className="space-y-6">
            {/* Equipo */}
            <Card>
              <h3 className="text-lg font-semibold text-[#222831] mb-4 font-['Poppins']">Equipo</h3>
              <div className="space-y-3">
                {/* Supervisor */}
                <div className="flex items-center space-x-3">
                  <img 
                    src={proyecto.supervisor.avatar} 
                    alt={proyecto.supervisor.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-[#222831] font-['Inter']">{proyecto.supervisor.name}</p>
                    <p className="text-sm text-gray-500">Supervisor</p>
                  </div>
                </div>
                
                {/* Miembros */}
                {proyecto.members.map((member, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-[#222831] font-['Inter']">{member.name}</p>
                      <p className="text-sm text-gray-500">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                <Plus className="h-4 w-4 mr-2" />
                Agregar Miembro
              </Button>
            </Card>

            {/* Hitos */}
            <Card>
              <h3 className="text-lg font-semibold text-[#222831] mb-4 font-['Poppins']">Hitos</h3>
              <div className="space-y-3">
                {hitos.map((hito) => (
                  <div key={hito.id} className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      hito.status === 'completado' ? 'bg-[#4CAF50]' :
                      hito.status === 'en_progreso' ? 'bg-[#FFA726]' :
                      'bg-gray-300'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-[#222831]">{hito.title}</p>
                      <p className="text-xs text-gray-500">{new Date(hito.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Estadísticas Rápidas */}
            <Card>
              <h3 className="text-lg font-semibold text-[#222831] mb-4 font-['Poppins']">Estadísticas Rápidas</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duración</span>
                  <span className="font-medium text-[#222831]">9 meses</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tareas Completadas</span>
                  <span className="font-medium text-[#222831]">{tareas.filter(t => t.status === 'completado').length}/{tareas.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Días Restantes</span>
                  <span className="font-medium text-[#222831]">98</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}

      {activeTab === 'entregables' && (
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[#222831] font-['Poppins']">Entregables del Proyecto</h2>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Agregar Entregable
            </Button>
          </div>
          
          <div className="space-y-4">
            {entregables.map((entregable) => (
              <div key={entregable.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-[#222831] font-['Inter']">{entregable.name}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    entregable.status === 'completado' ? 'bg-green-100 text-green-800' :
                    entregable.status === 'en_progreso' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {entregable.status.replace('_', ' ')}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-3">
                  <span>Vence: {new Date(entregable.dueDate).toLocaleDateString()}</span>
                  {entregable.submittedDate && (
                    <span>Enviado: {new Date(entregable.submittedDate).toLocaleDateString()}</span>
                  )}
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Ver Detalles</Button>
                  {entregable.status === 'completado' && (
                    <Button variant="outline" size="sm">Descargar</Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {activeTab === 'tareas' && (
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[#222831] font-['Poppins']">Tareas del Proyecto</h2>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">Vista Kanban</Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Nueva Tarea
              </Button>
            </div>
          </div>
          
          <div className="space-y-3">
            {tareas.map((tarea) => (
              <div key={tarea.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <input 
                  type="checkbox" 
                  checked={tarea.status === 'completado'}
                  className="h-4 w-4 text-[#3A6EA5] border-gray-300 rounded focus:ring-[#3A6EA5]"
                />
                {getStatusIcon(tarea.status)}
                <div className="flex-1">
                  <h3 className="font-medium text-[#222831] font-['Inter']">{tarea.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                    <span>Asignado a: {tarea.assignee}</span>
                    <span>Vence: {new Date(tarea.dueDate).toLocaleDateString()}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">Ver</Button>
              </div>
            ))}
          </div>
        </Card>
      )}

      {activeTab === 'kanban' && (
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[#222831] font-['Poppins']">Tablero Kanban</h2>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Nueva Tarea
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Columna Por Hacer */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-700 mb-4 flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Por Hacer
              </h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-medium text-sm mb-1">Borrador de Directrices Éticas</h4>
                  <p className="text-xs text-gray-500 mb-2">Carol Davis</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Alta</span>
                    <span className="text-xs text-gray-500">10 Mar</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna En Progreso */}
            <div className="bg-yellow-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-700 mb-4 flex items-center">
                <AlertTriangle className="h-4 w-4 mr-2" />
                En Progreso
              </h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-medium text-sm mb-1">Marco de Recolección de Datos</h4>
                  <p className="text-xs text-gray-500 mb-2">Bob Chen</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Media</span>
                    <span className="text-xs text-gray-500">20 Feb</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna En Revisión */}
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-700 mb-4 flex items-center">
                <BookOpen className="h-4 w-4 mr-2" />
                En Revisión
              </h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-medium text-sm mb-1">Entrevistas con Partes Interesadas</h4>
                  <p className="text-xs text-gray-500 mb-2">Alice Johnson</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Media</span>
                    <span className="text-xs text-gray-500">28 Feb</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna Completado */}
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-700 mb-4 flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Completado
              </h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-medium text-sm mb-1">Revisión Literaria</h4>
                  <p className="text-xs text-gray-500 mb-2">Alice Johnson</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Completado</span>
                    <span className="text-xs text-gray-500">15 Ene</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}

      {activeTab === 'calendario' && (
        <Card>
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Calendario del Proyecto</h3>
            <p className="text-gray-500 mb-4">
              Vista de calendario con hitos, fechas límite y reuniones del equipo
            </p>
            <Button>Configurar Integración de Calendario</Button>
          </div>
        </Card>
      )}

      {activeTab === 'documentos' && (
        <Card>
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Documentos del Proyecto</h3>
            <p className="text-gray-500 mb-4">
              Almacena y comparte artículos de investigación, borradores y archivos del proyecto
            </p>
            <Button>Subir Documento</Button>
          </div>
        </Card>
      )}

      {activeTab === 'chat' && (
        <Card>
          <div className="text-center py-12">
            <MessageSquare className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Chat del Equipo</h3>
            <p className="text-gray-500 mb-4">
              Colabora con tu equipo en tiempo real
            </p>
            <Button>Iniciar Conversación</Button>
          </div>
        </Card>
      )}

      {activeTab === 'reportes' && (
        <Card>
          <div className="text-center py-12">
            <BarChart3 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Reportes del Proyecto</h3>
            <p className="text-gray-500 mb-4">
              Genera análisis detallados y reportes de progreso
            </p>
            <Button>Generar Reporte</Button>
          </div>
        </Card>
      )}
    </div>
  );
}