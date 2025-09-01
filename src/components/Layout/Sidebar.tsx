import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FolderOpen, 
  CheckSquare, 
  BarChart3, 
  Users, 
  Settings,
  BookOpen,
  Target,
  Building,
  Calendar,
  FileText,
  Award,
  MessageSquare,
  Bell
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

import { Logo } from '../ui/Logo';
import { DrimSoftLogo } from '../ui/DrimSoftLogo';

const navigation = {
  student: [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, badge: null },
    { name: 'Mis Proyectos', href: '/projects', icon: FolderOpen, badge: '3' },
    { name: 'Mis Tareas', href: '/tasks', icon: CheckSquare, badge: '8' },
    { name: 'Calendario', href: '/calendar', icon: Calendar, badge: null },
    { name: 'Directorio', href: '/directory', icon: Users, badge: null },
    { name: 'Mensajes', href: '/messages', icon: MessageSquare, badge: '2' },
  ],
  professor: [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, badge: null },
    { name: 'Proyectos', href: '/projects', icon: FolderOpen, badge: '12' },
    { name: 'Mis Tareas', href: '/tasks', icon: CheckSquare, badge: '5' },
    { name: 'Reportes', href: '/reports', icon: BarChart3, badge: null },
    { name: 'Directorio', href: '/directory', icon: Users, badge: null },
    { name: 'Documentos', href: '/documents', icon: FileText, badge: null },
    { name: 'Mensajes', href: '/messages', icon: MessageSquare, badge: '4' },
  ],
  researcher: [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, badge: null },
    { name: 'Proyectos de Investigación', href: '/projects', icon: BookOpen, badge: '6' },
    { name: 'Mis Tareas', href: '/tasks', icon: CheckSquare, badge: '7' },
    { name: 'Publicaciones', href: '/publications', icon: Award, badge: '3' },
    { name: 'Reportes', href: '/reports', icon: BarChart3, badge: null },
    { name: 'Directorio', href: '/directory', icon: Users, badge: null },
    { name: 'Mensajes', href: '/messages', icon: MessageSquare, badge: '1' },
  ],
  institution_admin: [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, badge: null },
    { name: 'Proyectos', href: '/projects', icon: FolderOpen, badge: '156' },
    { name: 'Análisis', href: '/reports', icon: BarChart3, badge: null },
    { name: 'Directorio', href: '/directory', icon: Users, badge: '847' },
    { name: 'Documentos', href: '/documents', icon: FileText, badge: null },
    { name: 'Notificaciones', href: '/notifications', icon: Bell, badge: '23' },
    { name: 'Configuración', href: '/settings', icon: Settings, badge: null },
  ],
  super_admin: [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, badge: null },
    { name: 'Instituciones', href: '/institutions', icon: Building, badge: '24' },
    { name: 'Análisis de Plataforma', href: '/reports', icon: BarChart3, badge: null },
    { name: 'Directorio Global', href: '/directory', icon: Users, badge: '12K+' },
    { name: 'Salud del Sistema', href: '/system', icon: Settings, badge: '99.9%' },
  ]
};

export function Sidebar() {
  const { user } = useAuth();
  const location = useLocation();
  
  if (!user) return null;

  const userNavigation = navigation[user.role] || navigation.student;

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-72 planifika-sidebar-gradient overflow-y-auto">
      <div className="flex flex-col h-full">
        {/* Sección de Logo Mejorada */}
        <div className="flex items-center h-24 px-8 border-b border-gray-600/30">
          <div className="flex items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#FFD369] rounded-2xl opacity-20 blur-lg"></div>
              <div className="relative p-3 bg-[#FFD369]/10 rounded-2xl border border-[#FFD369]/20">
                <Logo className="h-10 w-10" />
              </div>
            </div>
            <div className="ml-4">
              <span className="text-3xl font-bold text-white font-['Poppins'] tracking-tight">Planifika</span>
              <div className="text-sm text-gray-400 font-['Inter'] -mt-1">Plataforma Educativa</div>
            </div>
          </div>
        </div>

        {/* Sección de Perfil de Usuario Mejorada */}
        <div className="p-6 border-b border-gray-600/30">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src={user.avatar || 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?w=100&h=100&fit=crop&crop=face'}
                alt={user.name}
                className="h-12 w-12 rounded-2xl object-cover ring-2 ring-[#FFD369]/30"
              />
              <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-[#4CAF50] border-2 border-[#222831] rounded-full status-online"></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-lg font-semibold text-white truncate font-['Poppins']">{user.name}</p>
              <p className="text-sm text-gray-300 capitalize font-['Inter']">
                {user.role.replace('_', ' ')}
              </p>
              {user.institution && (
                <p className="text-xs text-gray-400 font-['Inter'] truncate">{user.institution}</p>
              )}
            </div>
          </div>
          
          {/* Estadísticas del usuario */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="text-center p-3 bg-white/5 rounded-xl">
              <div className="text-lg font-bold text-white font-['Poppins']">3</div>
              <div className="text-xs text-gray-400 font-['Inter']">Proyectos Activos</div>
            </div>
            <div className="text-center p-3 bg-white/5 rounded-xl">
              <div className="text-lg font-bold text-white font-['Poppins']">92%</div>
              <div className="text-xs text-gray-400 font-['Inter']">Tasa de Finalización</div>
            </div>
          </div>
        </div>

        {/* Navegación Mejorada */}
        <nav className="flex-1 px-6 py-8 space-y-3">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 font-['Inter']">
            Navegación Principal
          </div>
          {userNavigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={`
                  group relative flex items-center justify-between px-4 py-4 text-sm font-medium rounded-2xl transition-all duration-300 font-['Inter']
                  ${isActive 
                    ? 'bg-[#FFD369] text-[#222831] shadow-xl shadow-[#FFD369]/30 transform scale-105' 
                    : 'text-gray-300 hover:bg-gray-700/50 hover:text-white hover:transform hover:scale-102'
                  }
                `}
              >
                <div className="flex items-center">
                  <item.icon className={`mr-4 h-6 w-6 transition-all duration-200 ${
                    isActive ? 'text-[#222831]' : 'text-gray-400 group-hover:text-[#FFD369]'
                  }`} />
                  <span className="font-medium">{item.name}</span>
                </div>
                
                {item.badge && (
                  <span className={`
                    px-2 py-1 text-xs font-bold rounded-lg transition-all duration-200
                    ${isActive 
                      ? 'bg-[#222831]/20 text-[#222831]' 
                      : 'bg-gray-600 text-gray-300 group-hover:bg-[#FFD369] group-hover:text-[#222831]'
                    }
                  `}>
                    {item.badge}
                  </span>
                )}
                
                {isActive && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-[#222831] rounded-r-full"></div>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Información de Institución Mejorada */}
        {user.institution && (
          <div className="p-6 border-t border-gray-600/30">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 font-['Inter']">Institución</div>
            <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl">
              <Building className="h-5 w-5 text-[#3A6EA5]" />
              <div>
                <div className="text-sm font-medium text-gray-200 font-['Inter']">{user.institution}</div>
                <div className="text-xs text-gray-400 font-['Inter']">ID Estudiante: {user.id}</div>
              </div>
            </div>
          </div>
        )}

        {/* Footer Mejorado */}
        <div className="p-6 border-t border-gray-600/30">
          <div className="flex items-center justify-center p-3 bg-white/5 rounded-xl">
            <span className="text-xs text-gray-400 font-['Inter']">Desarrollado por</span>
            <div className="ml-2 flex items-center">
              <DrimSoftLogo className="h-4 w-4" />
              <span className="ml-2 text-sm font-bold text-[#3A6EA5] font-['Poppins']">DrimSoft</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}