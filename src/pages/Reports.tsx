import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, Clock, Download, Filter, Calendar } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart
} from 'recharts';

export function Reports() {
  const { user } = useAuth();
  const [timeframe, setTimeframe] = useState('semestre');
  const [faculty, setFaculty] = useState('todas');

  const datosComplecion = [
    { mes: 'Sep', completados: 12, total: 20 },
    { mes: 'Oct', completados: 18, total: 25 },
    { mes: 'Nov', completados: 22, total: 28 },
    { mes: 'Dic', completados: 15, total: 18 },
    { mes: 'Ene', completados: 28, total: 35 },
    { mes: 'Feb', completados: 24, total: 30 }
  ];

  const datosFacultad = [
    { name: 'Ciencias de la Computación', projects: 45, completion: 92 },
    { name: 'Ingeniería', projects: 38, completion: 87 },
    { name: 'Matemáticas', projects: 25, completion: 95 },
    { name: 'Física', projects: 22, completion: 91 },
    { name: 'Psicología', projects: 18, completion: 89 }
  ];

  const tiposProyecto = [
    { name: 'Académico', value: 45, color: '#3A6EA5' },
    { name: 'Investigación', value: 30, color: '#FFD369' },
    { name: 'Social', value: 15, color: '#4CAF50' },
    { name: 'Admin', value: 10, color: '#FFA726' }
  ];

  const datosCargaTrabajo = [
    { semana: 'Semana 1', estudiantes: 120, profesores: 25, investigadores: 15 },
    { semana: 'Semana 2', estudiantes: 135, profesores: 28, investigadores: 18 },
    { semana: 'Semana 3', estudiantes: 110, profesores: 22, investigadores: 12 },
    { semana: 'Semana 4', estudiantes: 145, profesores: 30, investigadores: 20 }
  ];

  const getReportTitle = () => {
    switch (user?.role) {
      case 'student': return 'Mi Reporte de Rendimiento';
      case 'professor': return 'Reporte de Enseñanza y Supervisión';
      case 'researcher': return 'Análisis de Investigación';
      case 'institution_admin': return 'Análisis Institucional';
      case 'super_admin': return 'Análisis de Plataforma';
      default: return 'Reporte de Análisis';
    }
  };

  return (
    <div className="space-y-6">
      {/* Encabezado */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-[#222831] font-['Poppins']">
            {getReportTitle()}
          </h1>
          <p className="text-gray-600 mt-2 font-['Inter']">
            Análisis integral e insights de rendimiento
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Rango de Fechas
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Exportar Reporte
          </Button>
        </div>
      </div>

      {/* Filtros */}
      <Card>
        <div className="flex flex-wrap gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Período de Tiempo</label>
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A6EA5] focus:border-transparent"
            >
              <option value="mes">Este Mes</option>
              <option value="semestre">Este Semestre</option>
              <option value="año">Año Académico</option>
              <option value="personalizado">Rango Personalizado</option>
            </select>
          </div>
          
          {(user?.role === 'institution_admin' || user?.role === 'super_admin') && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Facultad</label>
              <select
                value={faculty}
                onChange={(e) => setFaculty(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A6EA5] focus:border-transparent"
              >
                <option value="todas">Todas las Facultades</option>
                <option value="cs">Ciencias de la Computación</option>
                <option value="ing">Ingeniería</option>
                <option value="mat">Matemáticas</option>
                <option value="fis">Física</option>
                <option value="psic">Psicología</option>
              </select>
            </div>
          )}
        </div>
      </Card>

      {/* Métricas Clave */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="text-center">
          <BarChart3 className="h-8 w-8 text-[#3A6EA5] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#222831] font-['Poppins']">156</div>
          <div className="text-sm text-gray-600">Proyectos Totales</div>
          <div className="text-xs text-[#4CAF50] mt-1">↗ 12% del mes pasado</div>
        </Card>
        
        <Card className="text-center">
          <TrendingUp className="h-8 w-8 text-[#4CAF50] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#222831] font-['Poppins']">89%</div>
          <div className="text-sm text-gray-600">Tasa de Finalización</div>
          <div className="text-xs text-[#4CAF50] mt-1">↗ 3% del mes pasado</div>
        </Card>
        
        <Card className="text-center">
          <Users className="h-8 w-8 text-[#FFD369] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#222831] font-['Poppins']">847</div>
          <div className="text-sm text-gray-600">Usuarios Activos</div>
          <div className="text-xs text-[#4CAF50] mt-1">↗ 8% del mes pasado</div>
        </Card>
        
        <Card className="text-center">
          <Clock className="h-8 w-8 text-[#FFA726] mx-auto mb-2" />
          <div className="text-2xl font-bold text-[#222831] font-['Poppins']">4.2</div>
          <div className="text-sm text-gray-600">Duración Promedio (meses)</div>
          <div className="text-xs text-gray-500 mt-1">→ Sin cambios</div>
        </Card>
      </div>

      {/* Fila de Gráficos 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tendencias de Finalización de Proyectos */}
        <Card>
          <h3 className="text-lg font-semibold text-[#222831] mb-4 font-['Poppins']">Tendencias de Finalización de Proyectos</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={datosComplecion}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="mes" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '8px' 
                }}
              />
              <Area type="monotone" dataKey="completados" stackId="1" stroke="#3A6EA5" fill="#3A6EA5" opacity={0.6} />
              <Area type="monotone" dataKey="total" stackId="2" stroke="#FFD369" fill="#FFD369" opacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Distribución de Tipos de Proyecto */}
        <Card>
          <h3 className="text-lg font-semibold text-[#222831] mb-4 font-['Poppins']">Distribución de Tipos de Proyecto</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={tiposProyecto}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, value }) => `${name}: ${value}%`}
              >
                {tiposProyecto.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Fila de Gráficos 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Rendimiento de Facultad */}
        <Card>
          <h3 className="text-lg font-semibold text-[#222831] mb-4 font-['Poppins']">Rendimiento de Facultad</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={datosFacultad} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis type="number" stroke="#6b7280" />
              <YAxis dataKey="name" type="category" stroke="#6b7280" width={100} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '8px' 
                }}
              />
              <Bar dataKey="completion" fill="#3A6EA5" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Carga de Trabajo Semanal */}
        <Card>
          <h3 className="text-lg font-semibold text-[#222831] mb-4 font-['Poppins']">Usuarios Activos Semanales</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={datosCargaTrabajo}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="semana" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '8px' 
                }}
              />
              <Line type="monotone" dataKey="estudiantes" stroke="#3A6EA5" strokeWidth={3} dot={{ fill: '#3A6EA5' }} />
              <Line type="monotone" dataKey="profesores" stroke="#FFD369" strokeWidth={3} dot={{ fill: '#FFD369' }} />
              <Line type="monotone" dataKey="investigadores" stroke="#4CAF50" strokeWidth={3} dot={{ fill: '#4CAF50' }} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Tablas Detalladas */}
      {user?.role === 'institution_admin' && (
        <Card>
          <h3 className="text-lg font-semibold text-[#222831] mb-4 font-['Poppins']">Rendimiento Detallado de Facultad</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Facultad</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Proyectos Activos</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Estudiantes</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Tasa de Finalización</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Duración Promedio</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Tendencia</th>
                </tr>
              </thead>
              <tbody>
                {datosFacultad.map((dept, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-[#222831]">{dept.name}</td>
                    <td className="py-3 px-4 text-gray-600">{dept.projects}</td>
                    <td className="py-3 px-4 text-gray-600">{Math.floor(dept.projects * 4.2)}</td>
                    <td className="py-3 px-4">
                      <span className="text-[#4CAF50] font-medium">{dept.completion}%</span>
                    </td>
                    <td className="py-3 px-4 text-gray-600">4.1 meses</td>
                    <td className="py-3 px-4">
                      <TrendingUp className="h-4 w-4 text-[#4CAF50]" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* Opciones de Exportación */}
      <Card>
        <h3 className="text-lg font-semibold text-[#222831] mb-4 font-['Poppins']">Opciones de Exportación</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="flex items-center justify-center space-x-2 py-8">
            <Download className="h-5 w-5" />
            <span>Reporte PDF</span>
          </Button>
          <Button variant="outline" className="flex items-center justify-center space-x-2 py-8">
            <Download className="h-5 w-5" />
            <span>Datos CSV</span>
          </Button>
          <Button variant="outline" className="flex items-center justify-center space-x-2 py-8">
            <Download className="h-5 w-5" />
            <span>Dashboard Excel</span>
          </Button>
        </div>
      </Card>
    </div>
  );
}