import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Layout } from './components/Layout/Layout';
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Join } from './pages/Join';
import { Dashboard } from './pages/Dashboard';
import { Projects } from './pages/Projects';
import { ProjectDetails } from './pages/ProjectDetails';
import { Tasks } from './pages/Tasks';
import { Reports } from './pages/Reports';
import { Directory } from './pages/Directory';
import { Settings } from './pages/Settings';
import { Institutions } from './pages/Institutions';

// DrimSoft App (Nivel 1)
import { DrimSoftDashboard } from './apps/drimsoft/pages/Dashboard';
import { DrimSoftTickets } from './apps/drimsoft/pages/Tickets';

// Institucion App (Nivel 2)
import { InstitucionDashboard } from './apps/institucion/pages/Dashboard';
import { InstitucionBacklog } from './apps/institucion/pages/Backlog';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen bg-[#F7F7F7] flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#3A6EA5]"></div>
      </div>
    );
  }
  
  return user ? <>{children}</> : <Navigate to="/" replace />;
}

function AppRoutes() {
  const { user } = useAuth();
  
  return (
    <Routes>
      {/* Landing y Auth */}
      <Route path="/" element={user ? <Navigate to="/dashboard" replace /> : <Landing />} />
      <Route path="/login" element={user ? <Navigate to="/dashboard" replace /> : <Login />} />
      <Route path="/join" element={user ? <Navigate to="/dashboard" replace /> : <Join />} />
      
      {/* Nivel 3 - Cliente/Colaborador/Externo (App existente) */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/projects" element={<ProtectedRoute><Projects /></ProtectedRoute>} />
        <Route path="/projects/:id" element={<ProtectedRoute><ProjectDetails /></ProtectedRoute>} />
        <Route path="/tasks" element={<ProtectedRoute><Tasks /></ProtectedRoute>} />
        <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
        <Route path="/directory" element={<ProtectedRoute><Directory /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route path="/institutions" element={<ProtectedRoute><Institutions /></ProtectedRoute>} />
      </Route>

      {/* Nivel 1 - DrimSoft (Admin & Soporte) */}
      <Route path="/drimsoft" element={<ProtectedRoute><DrimSoftDashboard /></ProtectedRoute>} />
      <Route path="/drimsoft/tickets" element={<ProtectedRoute><DrimSoftTickets /></ProtectedRoute>} />
      
      {/* TODO: Agregar más rutas de DrimSoft */}
      {/* <Route path="/drimsoft/clientes" element={<ProtectedRoute><DrimSoftInstituciones /></ProtectedRoute>} /> */}
      {/* <Route path="/drimsoft/proyectos" element={<ProtectedRoute><DrimSoftProyectos /></ProtectedRoute>} /> */}
      {/* <Route path="/drimsoft/usuarios" element={<ProtectedRoute><DrimSoftUsuarios /></ProtectedRoute>} /> */}
      {/* <Route path="/drimsoft/auditoria" element={<ProtectedRoute><DrimSoftAuditoria /></ProtectedRoute>} /> */}
      {/* <Route path="/drimsoft/configuracion" element={<ProtectedRoute><DrimSoftConfiguracion /></ProtectedRoute>} /> */}
      {/* <Route path="/drimsoft/notificaciones" element={<ProtectedRoute><DrimSoftNotificaciones /></ProtectedRoute>} /> */}

      {/* Nivel 2 - Administrador de Institución */}
      <Route path="/institucion" element={<ProtectedRoute><InstitucionDashboard /></ProtectedRoute>} />
      <Route path="/institucion/backlog" element={<ProtectedRoute><InstitucionBacklog /></ProtectedRoute>} />
      
      {/* TODO: Agregar más rutas de Institución */}
      {/* <Route path="/institucion/proyectos" element={<ProtectedRoute><InstitucionProyectos /></ProtectedRoute>} /> */}
      {/* <Route path="/institucion/equipos" element={<ProtectedRoute><InstitucionEquipos /></ProtectedRoute>} /> */}
      {/* <Route path="/institucion/aprobaciones" element={<ProtectedRoute><InstitucionAprobaciones /></ProtectedRoute>} /> */}
      {/* <Route path="/institucion/reportes" element={<ProtectedRoute><InstitucionReportes /></ProtectedRoute>} /> */}
      {/* <Route path="/institucion/soporte" element={<ProtectedRoute><InstitucionSoporte /></ProtectedRoute>} /> */}
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
