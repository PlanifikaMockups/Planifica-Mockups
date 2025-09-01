import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Target, Building, Mail, User, GraduationCap } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { DrimSoftLogo } from '../components/ui/DrimSoftLogo';
import { Logo } from '../components/ui/Logo';

export function Join() {
  const [formData, setFormData] = useState({
    institutionName: '',
    domain: '',
    name: '',
    email: '',
    role: 'student'
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simular solicitud de unión
    setTimeout(() => {
      setLoading(false);
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7F7F7] via-white to-[#F7F7F7] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Logo size={48} className="text-[#FFD369]" />
          </div>
          <h2 className="text-3xl font-bold text-[#222831] font-['Poppins']">Unirse como Institución</h2>
          <p className="mt-2 text-gray-600 font-['Inter']">Solicita acceso a tu institución educativa</p>
        </div>

        {/* Formulario de Unión */}
        <div className="bg-white py-8 px-6 shadow-lg rounded-lg border border-gray-200">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="institutionName" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre de la Institución
              </label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  id="institutionName"
                  name="institutionName"
                  type="text"
                  required
                  value={formData.institutionName}
                  onChange={(e) => setFormData(prev => ({ ...prev, institutionName: e.target.value }))}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A6EA5] focus:border-transparent"
                  placeholder="Universidad de Stanford"
                />
              </div>
            </div>

            <div>
              <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-2">
                Dominio de la Institución
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  id="domain"
                  name="domain"
                  type="text"
                  required
                  value={formData.domain}
                  onChange={(e) => setFormData(prev => ({ ...prev, domain: e.target.value }))}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A6EA5] focus:border-transparent"
                  placeholder="stanford.edu"
                />
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre Completo
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A6EA5] focus:border-transparent"
                  placeholder="Juan Pérez"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Dirección de Correo
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A6EA5] focus:border-transparent"
                  placeholder="juan.perez@stanford.edu"
                />
              </div>
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                Rol
              </label>
              <div className="relative">
                <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A6EA5] focus:border-transparent appearance-none"
                >
                  <option value="student">Estudiante</option>
                  <option value="professor">Profesor</option>
                  <option value="researcher">Investigador</option>
                  <option value="institution_admin">Administrador de Institución</option>
                </select>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              size="lg"
              disabled={loading}
            >
              {loading ? 'Enviando Solicitud...' : 'Solicitar Acceso'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Link 
              to="/login" 
              className="text-sm text-[#3A6EA5] hover:underline font-['Inter']"
            >
              ¿Ya tienes acceso? Iniciar sesión
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="flex items-center justify-center text-sm text-gray-500">
            <span>Desarrollado por</span>
            <div className="ml-2 flex items-center">
              <DrimSoftLogo className="h-4 w-4" />
              <span className="ml-1 font-medium">DrimSoft</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}