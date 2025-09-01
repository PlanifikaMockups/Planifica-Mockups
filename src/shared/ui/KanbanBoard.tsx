import React, { useState } from 'react';
import { Plus, MoreVertical } from 'lucide-react';

interface KanbanColumn {
  id: string;
  title: string;
  color: string;
}

interface KanbanItem {
  id: string;
  title: string;
  description?: string;
  status: string;
  priority?: string;
  assignee?: string;
  [key: string]: any;
}

interface KanbanBoardProps {
  columns: KanbanColumn[];
  items: KanbanItem[];
  onItemMove?: (itemId: string, newStatus: string) => void;
  onItemClick?: (item: KanbanItem) => void;
  className?: string;
}

export function KanbanBoard({ 
  columns, 
  items, 
  onItemMove, 
  onItemClick,
  className = "" 
}: KanbanBoardProps) {
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent, itemId: string) => {
    setDraggedItem(itemId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, status: string) => {
    e.preventDefault();
    if (draggedItem && onItemMove) {
      onItemMove(draggedItem, status);
    }
    setDraggedItem(null);
  };

  const getPriorityColor = (priority?: string) => {
    switch (priority) {
      case 'Crítica': return 'bg-red-500';
      case 'Alta': return 'bg-orange-500';
      case 'Media': return 'bg-yellow-500';
      case 'Baja': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className={`flex gap-6 overflow-x-auto pb-4 ${className}`}>
      {columns.map((column) => {
        const columnItems = items.filter(item => item.status === column.id);
        
        return (
          <div
            key={column.id}
            className="flex-shrink-0 w-80"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, column.id)}
          >
            <div className="bg-gray-50 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: column.color }}
                  />
                  <h3 className="font-semibold text-gray-900">{column.title}</h3>
                  <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                    {columnItems.length}
                  </span>
                </div>
                <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-3">
                {columnItems.map((item) => (
                  <div
                    key={item.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, item.id)}
                    onClick={() => onItemClick?.(item)}
                    className={`bg-white rounded-xl p-4 shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-shadow ${
                      draggedItem === item.id ? 'opacity-50' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-gray-900 text-sm line-clamp-2">
                        {item.title}
                      </h4>
                      <button className="p-1 text-gray-400 hover:text-gray-600 rounded">
                        <MoreVertical className="h-3 w-3" />
                      </button>
                    </div>
                    
                    {item.description && (
                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                        {item.description}
                      </p>
                    )}

                    <div className="flex items-center justify-between">
                      {item.priority && (
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${getPriorityColor(item.priority)}`} />
                          <span className="text-xs text-gray-600">{item.priority}</span>
                        </div>
                      )}
                      
                      {item.assignee && (
                        <div className="flex items-center space-x-1">
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-xs text-white font-medium">
                              {item.assignee.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
