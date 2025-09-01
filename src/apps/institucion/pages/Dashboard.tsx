import React from 'react';
import { 
  TrendingUp, 
  Calendar, 
  AlertTriangle, 
  DollarSign,
  CheckCircle,
  Clock,
  Users,
  Target
} from 'lucide-react';
import { KpiCard } from '../../../shared/ui/KpiCard';
import { MiniLineChart } from '../../../shared/ui/MiniLineChart';
import { useKpisInstitucion } from '../hooks/useKpisInstitucion';
import { proyectos, aprobaciones, sprints } from '../../../mocks/fixtures';

export function InstitucionDashboard() {
  const { kpis, loading } = useKpisInstitucion();

  // Datos mock para gráficos
  const burnUpData = [
    { label: 'S1', value: 25 },
    { label: 'S2', value: 45 },
    { label: 'S3', value: 60 },
    { label: 'S4', value: 75 },
    { label: 'S5', value: 85 },
    { label: 'S6', value: 92 }
  ];

  const burnDownData = [
    { label: 'S1', value: 100 },
    { label: 'S2', value: 80 },
    { label: 'S3', value: 65 },
    { label: 'S4', value: 50 },
    { label: 'S5', value: 35 },
    { label: 'S6', value: 20 }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Institucional</h1>
          <p className="text-gray-600 mt-2">Vista general de proyectos y métricas de la institución</p>
        </div>

        {/* KPIs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {kpis.map((kpi, index) => (
            <KpiCard key={index} kpi={kpi} />
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <MiniLineChart
            data={burnUpData}
            title="Burn-up Chart"
            color="#10B981"
          />
          <MiniLineChart
            data={burnDownData}
            title="Burn-down Chart"
            color="#EF4444"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Próximas Tareas */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Mis Próximas 5 Tareas</h3>
              <Clock className="h-5 w-5 text-blue-500" />
            </div>
            <div className="space-y-3">
              {[
                { titulo: 'Revisar documentación del Sprint 2', fecha: '2024-12-31', prioridad: 'Alta' },
                { titulo: 'Aprobar cambios de alcance', fecha: '2024-12-31', prioridad: 'Media' },
                { titulo: 'Reunión con equipo de desarrollo', fecha: '2025-01-02', prioridad: 'Alta' },
                { titulo: 'Revisar presupuesto Q1', fecha: '2025-01-03', prioridad: 'Baja' },
                { titulo: 'Presentación a stakeholders', fecha: '2025-01-05', prioridad: 'Media' }
              ].map((tarea, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{tarea.titulo}</p>
                    <p className="text-xs text-gray-500">{tarea.fecha}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    tarea.prioridad === 'Alta' ? 'bg-red-100 text-red-800' :
                    tarea.prioridad === 'Media' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {tarea.prioridad}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Aprobaciones Pendientes */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Aprobaciones Pendientes</h3>
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <div className="space-y-4">
              {aprobaciones.filter(aprob => aprob.estado === 'Pendiente').slice(0, 3).map((aprobacion) => (
                <div key={aprobacion.id} className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h4 className="font-medium text-gray-900 text-sm mb-2">{aprobacion.titulo}</h4>
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">{aprobacion.resumen}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {new Date(aprobacion.fechaISO).toLocaleDateString()}
                    </span>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700 transition-colors">
                        Aprobar
                      </button>
                      <button className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700 transition-colors">
                        Rechazar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sprints Activos */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Sprints Activos</h3>
              <Target className="h-5 w-5 text-purple-500" />
            </div>
            <div className="space-y-4">
              {sprints.filter(sprint => sprint.estado === 'En curso').map((sprint) => (
                <div key={sprint.id} className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-medium text-gray-900 text-sm mb-2">{sprint.nombre}</h4>
                  <p className="text-xs text-gray-600 mb-3">{sprint.objetivo}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Progreso</span>
                      <span className="font-medium">65%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{sprint.fechaInicio}</span>
                      <span>{sprint.fechaFin}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Proyectos Summary */}
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Resumen de Proyectos</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {proyectos.filter(proj => proj.estado === 'En curso').length}
              </div>
              <div className="text-sm text-gray-600">En Curso</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">
                {proyectos.filter(proj => proj.estado === 'En riesgo').length}
              </div>
              <div className="text-sm text-gray-600">En Riesgo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {proyectos.filter(proj => proj.estado === 'Cerrado').length}
              </div>
              <div className="text-sm text-gray-600">Completados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-600">
                {proyectos.filter(proj => proj.estado === 'Planificado').length}
              </div>
              <div className="text-sm text-gray-600">Planificados</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
