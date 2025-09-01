import React from 'react';
import { 
  Building, 
  FolderOpen, 
  AlertTriangle, 
  Clock, 
  TrendingUp,
  Users,
  Activity,
  Bell
} from 'lucide-react';
import { KpiCard } from '../../../shared/ui/KpiCard';
import { MiniLineChart } from '../../../shared/ui/MiniLineChart';
import { useKpisDrimsoft } from '../hooks/useKpisDrimsoft';
import { instituciones, tickets, logsAuditoria } from '../../../mocks/fixtures';

export function DrimSoftDashboard() {
  const { kpis, loading } = useKpisDrimsoft();

  // Datos mock para gráficos
  const ticketsData = [
    { label: 'Lun', value: 12 },
    { label: 'Mar', value: 8 },
    { label: 'Mié', value: 15 },
    { label: 'Jue', value: 10 },
    { label: 'Vie', value: 6 },
    { label: 'Sáb', value: 3 },
    { label: 'Dom', value: 2 }
  ];

  const adoptionData = [
    { label: 'Ene', value: 65 },
    { label: 'Feb', value: 72 },
    { label: 'Mar', value: 78 },
    { label: 'Abr', value: 85 },
    { label: 'May', value: 88 },
    { label: 'Jun', value: 92 }
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
          <h1 className="text-3xl font-bold text-gray-900">Dashboard DrimSoft</h1>
          <p className="text-gray-600 mt-2">Vista general de la plataforma y métricas clave</p>
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
            data={ticketsData}
            title="Tickets por Semana"
            color="#EF4444"
          />
          <MiniLineChart
            data={adoptionData}
            title="Adopción por Institución (%)"
            color="#10B981"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* SLA Widget */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">SLA Hoy</h3>
              <Clock className="h-5 w-5 text-green-500" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="text-sm font-medium text-green-800">Verde</span>
                <span className="text-lg font-bold text-green-600">98%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <span className="text-sm font-medium text-yellow-800">Ámbar</span>
                <span className="text-lg font-bold text-yellow-600">2%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <span className="text-sm font-medium text-red-800">Rojo</span>
                <span className="text-lg font-bold text-red-600">0%</span>
              </div>
            </div>
          </div>

          {/* Recent Events */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Eventos Recientes</h3>
              <Activity className="h-5 w-5 text-blue-500" />
            </div>
            <div className="space-y-4">
              {logsAuditoria.slice(0, 5).map((log) => (
                <div key={log.id} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{log.accion}</p>
                    <p className="text-xs text-gray-500">{log.detalles}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(log.fechaISO).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Acciones Rápidas</h3>
              <Bell className="h-5 w-5 text-purple-500" />
            </div>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <span className="text-sm font-medium text-blue-800">Ver Tickets Críticos</span>
                <AlertTriangle className="h-4 w-4 text-blue-600" />
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <span className="text-sm font-medium text-green-800">Nueva Institución</span>
                <Building className="h-4 w-4 text-green-600" />
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <span className="text-sm font-medium text-purple-800">Reporte de Actividad</span>
                <TrendingUp className="h-4 w-4 text-purple-600" />
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                <span className="text-sm font-medium text-orange-800">Gestionar Usuarios</span>
                <Users className="h-4 w-4 text-orange-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Resumen de Instituciones</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {instituciones.filter(inst => inst.plan === 'Enterprise').length}
              </div>
              <div className="text-sm text-gray-600">Enterprise</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {instituciones.filter(inst => inst.plan === 'Pro').length}
              </div>
              <div className="text-sm text-gray-600">Pro</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">
                {instituciones.filter(inst => inst.plan === 'Basic').length}
              </div>
              <div className="text-sm text-gray-600">Basic</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {tickets.filter(ticket => ticket.severidad === 'Crítica').length}
              </div>
              <div className="text-sm text-gray-600">Tickets Críticos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
