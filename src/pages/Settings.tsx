import React, { useState } from 'react';
import { User, Mail, Lock, Bell, Shield, Palette, Globe, Save } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';

export function Settings() {
  const { user } = useAuth();
  const [activeSection, setActiveSection] = useState('perfil');
  
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: '',
    office: '',
    phone: '',
    website: ''
  });

  const [notifications, setNotifications] = useState({
    email_tasks: true,
    email_deadlines: true,
    email_comments: false,
    push_tasks: true,
    push_deadlines: true,
    push_comments: true
  });

  const sections = [
    { id: 'perfil', name: 'Perfil', icon: User },
    { id: 'notificaciones', name: 'Notificaciones', icon: Bell },
    { id: 'seguridad', name: 'Seguridad', icon: Shield },
    { id: 'preferencias', name: 'Preferencias', icon: Palette }
  ];

  const handleSave = () => {
    // En una app real, esto guardaría en el backend
    console.log('Configuración guardada');
  };

  return (
    <div className="space-y-6">
      {/* Encabezado */}
      <div>
        <h1 className="text-3xl font-bold text-[#222831] font-['Poppins']">Configuración</h1>
        <p className="text-gray-600 mt-2 font-['Inter']">
          Gestiona las preferencias de tu cuenta y configuración de seguridad
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Navegación de Configuración */}
        <Card className="lg:col-span-1">
          <nav className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-colors ${
                  activeSection === section.id
                    ? 'bg-[#3A6EA5]/10 text-[#3A6EA5] border-l-4 border-[#3A6EA5]'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <section.icon className="h-4 w-4" />
                <span className="font-['Inter']">{section.name}</span>
              </button>
            ))}
          </nav>
        </Card>

        {/* Contenido de Configuración */}
        <div className="lg:col-span-3">
          {activeSection === 'perfil' && (
            <Card>
              <h2 className="text-xl font-semibold text-[#222831] mb-6 font-['Poppins']">Información del Perfil</h2>
              
              <div className="space-y-6">
                {/* Avatar */}
                <div className="flex items-center space-x-6">
                  <img
                    src={user?.avatar || 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?w=100&h=100&fit=crop&crop=face'}
                    alt={user?.name || 'Usuario'}
                    className="h-20 w-20 rounded-full object-cover"
                  />
                  <div>
                    <Button variant="outline" size="sm">Cambiar Foto</Button>
                    <p className="text-xs text-gray-500 mt-1">JPG, PNG hasta 2MB</p>
                  </div>
                </div>

                {/* Campos del Formulario */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo</label>
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A6EA5] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico</label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A6EA5] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ubicación de Oficina</label>
                    <input
                      type="text"
                      value={profileData.office}
                      onChange={(e) => setProfileData(prev => ({ ...prev, office: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A6EA5] focus:border-transparent"
                      placeholder="Gates 392"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A6EA5] focus:border-transparent"
                      placeholder="+1 (650) 723-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Biografía</label>
                  <textarea
                    value={profileData.bio}
                    onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A6EA5] focus:border-transparent"
                    placeholder="Cuéntanos sobre tus intereses de investigación y antecedentes..."
                  />
                </div>

                <div className="flex justify-end">
                  <Button onClick={handleSave}>
                    <Save className="h-4 w-4 mr-2" />
                    Guardar Perfil
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {activeSection === 'notificaciones' && (
            <Card>
              <h2 className="text-xl font-semibold text-[#222831] mb-6 font-['Poppins']">Preferencias de Notificación</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-[#222831] mb-4 font-['Inter']">Notificaciones por Correo</h3>
                  <div className="space-y-3">
                    {[
                      { key: 'email_tasks', label: 'Nuevas tareas asignadas a mí', description: 'Recibe notificaciones cuando se asignen tareas' },
                      { key: 'email_deadlines', label: 'Fechas límite próximas', description: 'Recordatorios para fechas límite de proyectos y tareas' },
                      { key: 'email_comments', label: 'Comentarios y retroalimentación', description: 'Cuando alguien comente en tu trabajo' }
                    ].map(({ key, label, description }) => (
                      <div key={key} className="flex items-start justify-between py-3">
                        <div>
                          <p className="font-medium text-[#222831] font-['Inter']">{label}</p>
                          <p className="text-sm text-gray-500">{description}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notifications[key as keyof typeof notifications]}
                            onChange={(e) => setNotifications(prev => ({ ...prev, [key]: e.target.checked }))}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3A6EA5]/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3A6EA5]"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-[#222831] mb-4 font-['Inter']">Notificaciones Push</h3>
                  <div className="space-y-3">
                    {[
                      { key: 'push_tasks', label: 'Nuevas tareas', description: 'Notificaciones del navegador para nuevas asignaciones' },
                      { key: 'push_deadlines', label: 'Recordatorios de fechas límite', description: 'Alertas de fechas límite en tiempo real' },
                      { key: 'push_comments', label: 'Comentarios', description: 'Notificaciones instantáneas para retroalimentación' }
                    ].map(({ key, label, description }) => (
                      <div key={key} className="flex items-start justify-between py-3">
                        <div>
                          <p className="font-medium text-[#222831] font-['Inter']">{label}</p>
                          <p className="text-sm text-gray-500">{description}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notifications[key as keyof typeof notifications]}
                            onChange={(e) => setNotifications(prev => ({ ...prev, [key]: e.target.checked }))}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3A6EA5]/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3A6EA5]"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          )}

          {activeSection === 'seguridad' && (
            <Card>
              <h2 className="text-xl font-semibold text-[#222831] mb-6 font-['Poppins']">Configuración de Seguridad</h2>
              
              <div className="space-y-6">
                {/* Contraseña */}
                <div>
                  <h3 className="text-lg font-medium text-[#222831] mb-4 font-['Inter']">Contraseña</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña Actual</label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A6EA5] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nueva Contraseña</label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A6EA5] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Confirmar Nueva Contraseña</label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A6EA5] focus:border-transparent"
                      />
                    </div>
                    <Button variant="outline">Actualizar Contraseña</Button>
                  </div>
                </div>

                {/* Autenticación de Dos Factores */}
                <div>
                  <h3 className="text-lg font-medium text-[#222831] mb-4 font-['Inter']">Autenticación de Dos Factores</h3>
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-green-800">La autenticación de dos factores está habilitada</p>
                        <p className="text-sm text-green-600">Tu cuenta está protegida con 2FA</p>
                      </div>
                      <Button variant="outline" size="sm">Gestionar</Button>
                    </div>
                  </div>
                </div>

                {/* SSO */}
                <div>
                  <h3 className="text-lg font-medium text-[#222831] mb-4 font-['Inter']">Inicio de Sesión Único</h3>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-blue-800">Conectado al SSO de Stanford</p>
                        <p className="text-sm text-blue-600">Puedes iniciar sesión usando tus credenciales institucionales</p>
                      </div>
                      <Button variant="outline" size="sm">Configurar</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {activeSection === 'preferencias' && (
            <Card>
              <h2 className="text-xl font-semibold text-[#222831] mb-6 font-['Poppins']">Preferencias</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-[#222831] mb-4 font-['Inter']">Pantalla</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tema</label>
                      <select className="w-full md:w-auto px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A6EA5] focus:border-transparent">
                        <option value="light">Claro</option>
                        <option value="dark">Oscuro</option>
                        <option value="auto">Automático (Sistema)</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Idioma</label>
                      <select className="w-full md:w-auto px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A6EA5] focus:border-transparent">
                        <option value="es">Español</option>
                        <option value="en">Inglés</option>
                        <option value="fr">Francés</option>
                        <option value="de">Alemán</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-[#222831] mb-4 font-['Inter']">Dashboard</h3>
                  <div className="space-y-3">
                    {[
                      { key: 'show_completed_tasks', label: 'Mostrar tareas completadas', description: 'Mostrar tareas terminadas en el dashboard' },
                      { key: 'auto_refresh', label: 'Actualización automática de datos', description: 'Actualizar automáticamente los datos del dashboard' },
                      { key: 'compact_view', label: 'Vista compacta', description: 'Usar tarjetas y espaciado más pequeños' }
                    ].map(({ key, label, description }) => (
                      <div key={key} className="flex items-start justify-between py-3">
                        <div>
                          <p className="font-medium text-[#222831] font-['Inter']">{label}</p>
                          <p className="text-sm text-gray-500">{description}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            defaultChecked={true}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3A6EA5]/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3A6EA5]"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Botón Guardar */}
          <div className="flex justify-end mt-6">
            <Button onClick={handleSave}>
              <Save className="h-4 w-4 mr-2" />
              Guardar Todos los Cambios
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}