import React, { useState } from 'react';
import { 
  Filter, 
  Search, 
  Plus,
  AlertTriangle,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { KanbanBoard } from '../../../shared/ui/KanbanBoard';
import { useTicketsKanban } from '../hooks/useTicketsKanban';
import { Ticket } from '../../../shared/types';

export function DrimSoftTickets() {
  const { kanbanItems, columns, loading, moveTicket } = useTicketsKanban();
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const handleTicketClick = (item: any) => {
    // En una implementación real, buscaríamos el ticket completo
    const ticket: Ticket = {
      id: item.id,
      titulo: item.title,
      institucionId: 'inst-1',
      severidad: item.priority as any,
      estado: item.status as any,
      slaHoras: item.slaHoras,
      creadoISO: item.creadoISO,
      descripcion: item.description,
      categoria: item.categoria
    };
    setSelectedTicket(ticket);
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'Crítica': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'Alta': return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      case 'Media': return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'Baja': return <CheckCircle className="h-4 w-4 text-green-500" />;
      default: return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Soporte & Tickets</h1>
              <p className="text-gray-600 mt-2">Gestión de tickets de soporte técnico</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Nuevo Ticket</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Filtros</h3>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
            >
              <Filter className="h-4 w-4" />
              <span>{showFilters ? 'Ocultar' : 'Mostrar'} filtros</span>
            </button>
          </div>

          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Institución
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Todas las instituciones</option>
                  <option value="inst-1">Universidad de Stanford</option>
                  <option value="inst-2">MIT</option>
                  <option value="inst-3">UC Berkeley</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Severidad
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Todas las severidades</option>
                  <option value="Crítica">Crítica</option>
                  <option value="Alta">Alta</option>
                  <option value="Media">Media</option>
                  <option value="Baja">Baja</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  SLA
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Todos los SLAs</option>
                  <option value="2">2 horas</option>
                  <option value="4">4 horas</option>
                  <option value="8">8 horas</option>
                  <option value="24">24 horas</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Buscar
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar tickets..."
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Kanban Board */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <KanbanBoard
            columns={columns}
            items={kanbanItems}
            onItemMove={moveTicket}
            onItemClick={handleTicketClick}
          />
        </div>

        {/* Ticket Detail Modal */}
        {selectedTicket && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Detalle del Ticket</h2>
                <button
                  onClick={() => setSelectedTicket(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XCircle className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {selectedTicket.titulo}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      {getSeverityIcon(selectedTicket.severidad)}
                      <span>{selectedTicket.severidad}</span>
                    </div>
                    <span>•</span>
                    <span>{selectedTicket.categoria}</span>
                    <span>•</span>
                    <span>SLA: {selectedTicket.slaHoras}h</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Descripción</h4>
                  <p className="text-gray-600">{selectedTicket.descripcion}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Estado</h4>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {selectedTicket.estado}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Fecha de Creación</h4>
                    <p className="text-gray-600">
                      {new Date(selectedTicket.creadoISO).toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="flex space-x-3 pt-4 border-t border-gray-200">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Asignar
                  </button>
                  <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                    Resolver
                  </button>
                  <button className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
                    Editar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
