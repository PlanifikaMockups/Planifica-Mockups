import React, { useState } from 'react';
import { Bell, Search, Settings, LogOut, ChevronDown, MessageCircle, HelpCircle, Calendar, Moon, Sun } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export function TopBar() {
  const { user, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  if (!user) return null;

  const notificaciones = [
    { 
      id: '1', 
      type: 'tarea', 
      title: 'Nueva Asignación de Tarea',
      message: 'Capítulo de revisión literaria asignado por Dra. Johnson', 
      time: 'hace 5 min', 
      unread: true,
      priority: 'alta'
    },
    { 
      id: '2', 
      type: 'comentarios', 
      title: 'Comentarios del Proyecto',
      message: 'Dra. Johnson comentó sobre tu metodología de tesis', 
      time: 'hace 2 horas', 
      unread: true,
      priority: 'media'
    },
    { 
      id: '3', 
      type: 'fecha_limite', 
      title: 'Fecha Límite Próxima',
      message: 'Hito del proyecto capstone ML vence mañana', 
      time: 'hace 1 día', 
      unread: false,
      priority: 'alta'
    },
    { 
      id: '4', 
      type: 'logro', 
      title: 'Logro Desbloqueado',
      message: '¡Felicidades! Completaste tu primer hito de investigación', 
      time: 'hace 2 días', 
      unread: false,
      priority: 'baja'
    }
  ];

  const unreadCount = notificaciones.filter(n => n.unread).length;

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'tarea': return '📋';
      case 'comentarios': return '💬';
      case 'fecha_limite': return '⏰';
      case 'logro': return '🏆';
      default: return '📢';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'alta': return 'border-l-[#E53935] bg-red-50/50';
      case 'media': return 'border-l-[#FFA726] bg-yellow-50/50';
      default: return 'border-l-[#4CAF50] bg-green-50/50';
    }
  };

  return (
    <div className="fixed top-0 right-0 left-72 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 h-20">
      <div className="flex items-center justify-between h-full px-8">
        {/* Búsqueda Global Mejorada */}
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar proyectos, tareas, personas o documentos..."
              className="w-full pl-14 pr-6 py-4 bg-gray-50/80 border-0 rounded-2xl focus:ring-4 focus:ring-[#3A6EA5]/20 focus:bg-white transition-all duration-300 font-['Inter'] text-sm shadow-sm hover:shadow-md"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <kbd className="px-2 py-1 text-xs text-gray-500 bg-gray-200 rounded-lg font-['Inter']">⌘K</kbd>
            </div>
          </div>
        </div>

        {/* Acciones del Lado Derecho Mejoradas */}
        <div className="flex items-center space-x-3">
          {/* Calendario Rápido */}
          <button className="relative p-3 text-gray-500 hover:text-[#3A6EA5] hover:bg-[#3A6EA5]/10 rounded-2xl transition-all duration-200 group">
            <Calendar className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-[#FFA726] rounded-full animate-pulse"></span>
          </button>

          {/* Centro de Ayuda */}
          <button className="p-3 text-gray-500 hover:text-[#3A6EA5] hover:bg-[#3A6EA5]/10 rounded-2xl transition-all duration-200">
            <HelpCircle className="h-6 w-6" />
          </button>

          {/* Mensajes */}
          <button className="relative p-3 text-gray-500 hover:text-[#3A6EA5] hover:bg-[#3A6EA5]/10 rounded-2xl transition-all duration-200">
            <MessageCircle className="h-6 w-6" />
            <span className="absolute -top-1 -right-1 h-5 w-5 bg-[#4CAF50] text-white text-xs rounded-full flex items-center justify-center font-['Inter'] font-bold">
              2
            </span>
          </button>

          {/* Notificaciones Mejoradas */}
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-3 text-gray-500 hover:text-[#3A6EA5] hover:bg-[#3A6EA5]/10 rounded-2xl transition-all duration-200"
            >
              <Bell className="h-6 w-6" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 h-6 w-6 bg-[#E53935] text-white text-xs rounded-full flex items-center justify-center font-['Inter'] font-bold animate-pulse">
                  {unreadCount}
                </span>
              )}
            </button>
            
            {/* Dropdown de Notificaciones Mejorado */}
            {showNotifications && (
              <div className="absolute right-0 mt-4 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden z-50 fade-in">
                <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-[#3A6EA5]/5 to-[#FFD369]/5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-[#222831] font-['Poppins']">Notificaciones</h3>
                    <div className="flex items-center space-x-2">
                      {unreadCount > 0 && (
                        <span className="px-2 py-1 bg-[#E53935] text-white text-xs rounded-lg font-['Inter'] font-bold">
                          {unreadCount} nuevas
                        </span>
                      )}
                      <button className="text-sm text-[#3A6EA5] hover:underline font-['Inter'] font-medium">
                        Marcar todas como leídas
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="max-h-96 overflow-y-auto">
                  {notificaciones.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`p-4 hover:bg-gray-50 border-b border-gray-50 transition-all duration-200 cursor-pointer border-l-4 ${
                        getPriorityColor(notification.priority)
                      } ${notification.unread ? 'bg-blue-50/30' : ''}`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 text-2xl">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-[#222831] font-['Inter'] mb-1">
                            {notification.title}
                          </p>
                          <p className="text-sm text-gray-600 font-['Inter'] mb-2">
                            {notification.message}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500 font-['Inter']">{notification.time}</span>
                            <button className="text-xs text-[#3A6EA5] hover:underline font-['Inter'] font-medium">
                              Ver Detalles
                            </button>
                          </div>
                        </div>
                        {notification.unread && (
                          <div className="h-2 w-2 bg-[#3A6EA5] rounded-full flex-shrink-0 mt-2"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 bg-gray-50 border-t border-gray-100">
                  <button className="w-full text-sm text-[#3A6EA5] hover:underline font-['Inter'] font-medium">
                    Ver Todas las Notificaciones ({notificaciones.length})
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Menú de Usuario Mejorado */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-3 px-4 py-3 rounded-2xl hover:bg-gray-50 transition-all duration-200 group"
            >
              <img
                src={user.avatar || 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?w=100&h=100&fit=crop&crop=face'}
                alt={user.name}
                className="h-10 w-10 rounded-xl object-cover ring-2 ring-[#3A6EA5]/20 group-hover:ring-[#3A6EA5]/40 transition-all duration-200"
              />
              <div className="hidden lg:block text-left">
                <p className="text-sm font-semibold text-[#222831] font-['Poppins']">{user.name}</p>
                <p className="text-xs text-gray-500 capitalize font-['Inter']">{user.role.replace('_', ' ')}</p>
              </div>
              <ChevronDown className={`h-5 w-5 text-gray-400 transition-all duration-200 ${
                showUserMenu ? 'rotate-180 text-[#3A6EA5]' : 'group-hover:text-[#3A6EA5]'
              }`} />
            </button>

            {/* Dropdown del Menú de Usuario Mejorado */}
            {showUserMenu && (
              <div className="absolute right-0 mt-4 w-64 bg-white rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden z-50 fade-in">
                <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-[#3A6EA5]/5 to-[#FFD369]/5">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={user.avatar || 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?w=100&h=100&fit=crop&crop=face'}
                      alt={user.name}
                      className="h-12 w-12 rounded-xl object-cover"
                    />
                    <div>
                      <p className="font-semibold text-[#222831] font-['Poppins']">{user.name}</p>
                      <p className="text-sm text-gray-500 font-['Inter']">{user.email}</p>
                      <p className="text-xs text-gray-400 capitalize font-['Inter']">{user.role.replace('_', ' ')}</p>
                    </div>
                  </div>
                </div>
                
                <div className="py-2">
                  <button className="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors font-['Inter']">
                    <Settings className="h-5 w-5 mr-3 text-gray-400" />
                    Configuración del Perfil
                  </button>
                  <button 
                    onClick={() => setDarkMode(!darkMode)}
                    className="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors font-['Inter']"
                  >
                    {darkMode ? <Sun className="h-5 w-5 mr-3 text-gray-400" /> : <Moon className="h-5 w-5 mr-3 text-gray-400" />}
                    {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
                  </button>
                  <button className="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors font-['Inter']">
                    <HelpCircle className="h-5 w-5 mr-3 text-gray-400" />
                    Ayuda y Soporte
                  </button>
                  <hr className="my-2 border-gray-200" />
                  <button 
                    onClick={logout}
                    className="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors font-['Inter']"
                  >
                    <LogOut className="h-5 w-5 mr-3 text-gray-400" />
                    Cerrar Sesión
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Manejadores de clic fuera */}
      {(showUserMenu || showNotifications) && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={() => {
            setShowUserMenu(false);
            setShowNotifications(false);
          }}
        />
      )}
    </div>
  );
}