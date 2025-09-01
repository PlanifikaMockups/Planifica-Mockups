import React, { useState } from 'react';
import { 
  Plus, 
  Filter, 
  Search, 
  User,
  Calendar,
  Target,
  XCircle,
  Edit3
} from 'lucide-react';
import { KanbanBoard } from '../../../shared/ui/KanbanBoard';
import { useBacklogBoard } from '../hooks/useBacklogBoard';
import { HistoriaUsuario } from '../../../shared/types';

export function InstitucionBacklog() {
  const { kanbanItems, columns, loading, moveHistoria } = useBacklogBoard();
  const [selectedHistoria, setSelectedHistoria] = useState<HistoriaUsuario | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleHistoriaClick = (item: any) => {
    // En una implementación real, buscaríamos la historia completa
    const historia: HistoriaUsuario = {
      id: item.id,
      proyectoId: 'proj-1',
      como: item.title.split(',')[0].replace('Como ', ''),
      quiero: item.title.split('quiero ')[1]?.split(',')[0] || '',
      para: item.description?.replace('Para ', '') || '',
      criterios: item.criterios || [],
      estado: item.status as any,
      puntos: item.puntos || 0,
      prioridad: item.priority as any
    };
    setSelectedHistoria(historia);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Crítica': return 'bg-red-500';
      case 'Alta': return 'bg-orange-500';
      case 'Media': return 'bg-yellow-500';
      case 'Baja': return 'bg-green-500';
      default: return 'bg-gray-500';
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
              <h1 className="text-3xl font-bold text-gray-900">Backlog & Sprints</h1>
              <p className="text-gray-600 mt-2">Gestión de historias de usuario y sprints</p>
            </div>
            <button 
              onClick={() => setShowCreateForm(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span>Nueva Historia</span>
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
                  Proyecto
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Todos los proyectos</option>
                  <option value="proj-1">Sistema de Gestión Académica</option>
                  <option value="proj-2">Portal de Investigación</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prioridad
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Todas las prioridades</option>
                  <option value="Crítica">Crítica</option>
                  <option value="Alta">Alta</option>
                  <option value="Media">Media</option>
                  <option value="Baja">Baja</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sprint
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Todos los sprints</option>
                  <option value="sprint-1">Sprint 1 - Fundación</option>
                  <option value="sprint-2">Sprint 2 - Gestión Académica</option>
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
                    placeholder="Buscar historias..."
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
            onItemMove={moveHistoria}
            onItemClick={handleHistoriaClick}
          />
        </div>

        {/* Historia Detail Modal */}
        {selectedHistoria && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Detalle de Historia de Usuario</h2>
                <button
                  onClick={() => setSelectedHistoria(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XCircle className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Historia de Usuario</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Como</span> {selectedHistoria.como}
                    </p>
                    <p className="text-sm text-gray-700 mt-2">
                      <span className="font-medium">Quiero</span> {selectedHistoria.quiero}
                    </p>
                    <p className="text-sm text-gray-700 mt-2">
                      <span className="font-medium">Para</span> {selectedHistoria.para}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Criterios de Aceptación</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedHistoria.criterios.map((criterio, index) => (
                      <li key={index} className="text-sm text-gray-600">{criterio}</li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Estado</h4>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {selectedHistoria.estado}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Story Points</h4>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {selectedHistoria.puntos} pts
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Prioridad</h4>
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${getPriorityColor(selectedHistoria.prioridad)}`} />
                      <span className="text-sm text-gray-600">{selectedHistoria.prioridad}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Asignado a</h4>
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {selectedHistoria.asignadoA || 'Sin asignar'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3 pt-4 border-t border-gray-200">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Asignar
                  </button>
                  <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                    Mover a Sprint
                  </button>
                  <button className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
                    <Edit3 className="h-4 w-4 inline mr-2" />
                    Editar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Create Historia Modal */}
        {showCreateForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Nueva Historia de Usuario</h2>
                <button
                  onClick={() => setShowCreateForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XCircle className="h-6 w-6" />
                </button>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Como (rol)
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: Estudiante"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quiero (funcionalidad)
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: poder ver mi horario de clases"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Para (beneficio)
                  </label>
                  <input
                    type="text"
                    placeholder="Ej: organizar mejor mi tiempo"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Story Points
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Seleccionar puntos</option>
                    <option value="1">1 punto</option>
                    <option value="2">2 puntos</option>
                    <option value="3">3 puntos</option>
                    <option value="5">5 puntos</option>
                    <option value="8">8 puntos</option>
                    <option value="13">13 puntos</option>
                    <option value="21">21 puntos</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prioridad
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Seleccionar prioridad</option>
                    <option value="Baja">Baja</option>
                    <option value="Media">Media</option>
                    <option value="Alta">Alta</option>
                    <option value="Crítica">Crítica</option>
                  </select>
                </div>

                <div className="flex space-x-3 pt-4 border-t border-gray-200">
                  <button 
                    type="button"
                    onClick={() => setShowCreateForm(false)}
                    className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Crear Historia
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
