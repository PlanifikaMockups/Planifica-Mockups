import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Target, 
  Mail, 
  Lock, 
  Building, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Shield,
  CheckCircle,
  Star,
  Globe
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { DrimSoftLogo } from '../components/ui/DrimSoftLogo';
import { Logo } from '../components/ui/Logo';
import { useAuth } from '../contexts/AuthContext';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const features = [
    { icon: Shield, text: 'Seguridad Empresarial' },
    { icon: Globe, text: '50+ Universidades' },
    { icon: CheckCircle, text: '99.9% Tiempo Activo' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7F7F7] via-white to-[#F7F7F7] academic-pattern flex items-center justify-center py-12 px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Lado Izquierdo - Marca y Características */}
        <div className="hidden lg:block space-y-8">
          <div>
            <div className="flex items-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-[#FFD369] rounded-3xl opacity-20 blur-2xl"></div>
                <div className="relative p-4 bg-[#FFD369]/10 rounded-3xl border border-[#FFD369]/20">
                  <Logo size={64} className="text-[#FFD369]" />
                </div>
              </div>
              <div className="ml-6">
                <h1 className="text-5xl font-bold text-[#222831] font-['Poppins']">Planifika</h1>
                <p className="text-lg text-gray-600 font-['Inter']">Gestión de Proyectos Educativos</p>
              </div>
            </div>

            <h2 className="text-4xl font-bold text-[#222831] font-['Poppins'] leading-tight mb-6">
              Bienvenido al Futuro de la
              <span className="block text-gradient bg-gradient-to-r from-[#3A6EA5] to-[#FFD369] bg-clip-text text-transparent">
                Excelencia Académica
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 font-['Inter'] leading-relaxed mb-8">
              Únete a miles de estudiantes, profesores e investigadores que usan Planifika para gestionar proyectos académicos, 
              colaborar efectivamente y lograr el éxito educativo.
            </p>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-white/60 rounded-2xl academic-glow">
                <div className="p-3 bg-[#3A6EA5]/10 rounded-xl">
                  <feature.icon className="h-6 w-6 text-[#3A6EA5]" />
                </div>
                <span className="text-lg font-medium text-[#222831] font-['Inter']">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-8 text-gray-500 font-['Inter']">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-[#FFD369] fill-current" />
              <span>4.9/5 Calificación</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-[#3A6EA5]" />
              <span>Plataforma Global</span>
            </div>
          </div>
        </div>

        {/* Lado Derecho - Formulario de Login Mejorado */}
        <div className="space-y-8">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold text-[#222831] font-['Poppins'] mb-4">
              Iniciar Sesión
            </h2>
            <p className="text-lg text-gray-600 font-['Inter']">
              Accede a tus proyectos académicos, colabora con tu equipo y rastrea tu progreso
            </p>
          </div>

          <Card className="p-8 academic-glow">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3 font-['Inter']">
                    Correo Electrónico
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#3A6EA5]/20 focus:border-[#3A6EA5] transition-all duration-300 font-['Inter'] hover:border-gray-300"
                      placeholder="estudiante@universidad.edu"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-3 font-['Inter']">
                    Contraseña
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-12 pr-14 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-[#3A6EA5]/20 focus:border-[#3A6EA5] transition-all duration-300 font-['Inter'] hover:border-gray-300"
                      placeholder="Ingresa tu contraseña"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="h-5 w-5 text-[#3A6EA5] border-2 border-gray-300 rounded-lg focus:ring-[#3A6EA5]/20 transition-all duration-200" 
                  />
                  <span className="ml-3 text-sm text-gray-600 font-['Inter']">Recordarme por 30 días</span>
                </label>
                <a href="#" className="text-sm text-[#3A6EA5] hover:underline font-['Inter'] font-medium">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              <Button 
                type="submit" 
                className="w-full py-4 text-lg font-['Poppins'] rounded-xl planifika-button-glow transform hover:scale-105 transition-all duration-300" 
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center space-x-3">
                    <div className="animate-spin h-6 w-6 border-3 border-[#222831] border-t-transparent rounded-full"></div>
                    <span>Iniciando sesión...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-3">
                    <span>Iniciar Sesión</span>
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-['Inter']">O continúa con acceso institucional</span>
                </div>
              </div>

              <div className="mt-6">
                <Button 
                  variant="outline" 
                  className="w-full py-4 text-lg font-['Poppins'] rounded-xl border-2 hover:border-[#3A6EA5] hover:text-[#3A6EA5] transform hover:scale-105 transition-all duration-300"
                >
                  <Building className="h-6 w-6 mr-3" />
                  Inicio de Sesión Único (SSO)
                </Button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 font-['Inter']">
                ¿Nuevo en tu institución? {' '}
                <Link 
                  to="/join" 
                  className="text-[#3A6EA5] hover:underline font-semibold transition-colors"
                >
                  Solicitar Acceso
                </Link>
              </p>
            </div>
          </Card>

          {/* Atribución del Footer Mejorada */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center space-x-3 p-4 bg-white/60 rounded-2xl border border-gray-200/50">
              <span className="text-sm text-gray-500 font-['Inter']">Asegurado y desarrollado por</span>
              <div className="flex items-center space-x-2">
                <DrimSoftLogo className="h-5 w-5" />
                <span className="text-lg font-bold text-[#3A6EA5] font-['Poppins']">DrimSoft</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}