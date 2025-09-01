export type KPI = { 
  label: string; 
  value: number; 
  trend?: 'up'|'down'|null; 
  unit?: string;
  color?: string;
};

export type Institucion = { 
  id: string; 
  nombre: string; 
  plan: 'Basic'|'Pro'|'Enterprise'; 
  admins: string[]; 
  estado: 'Activa'|'Suspendida';
  fechaCreacion: string;
  proyectosActivos: number;
  usuariosActivos: number;
};

export type Proyecto = { 
  id: string; 
  nombre: string; 
  institucionId: string; 
  estado: 'Planificado'|'En curso'|'En riesgo'|'Cerrado'; 
  avance: number; 
  presupuesto: number; 
  ownerId: string;
  fechaInicio: string;
  fechaFin: string;
  descripcion: string;
};

export type Ticket = { 
  id: string; 
  titulo: string; 
  institucionId: string; 
  severidad: 'Baja'|'Media'|'Alta'|'Crítica'; 
  estado: 'Nuevo'|'En Progreso'|'Pendiente Cliente'|'Resuelto'; 
  slaHoras: number; 
  creadoISO: string;
  asignadoA?: string;
  descripcion: string;
  categoria: string;
};

export type Usuario = { 
  id: string; 
  nombre: string; 
  email: string; 
  rol: string; 
  activo: boolean; 
  ultimaActividadISO: string;
  institucionId?: string;
  avatar?: string;
};

export type HistoriaUsuario = { 
  id: string; 
  proyectoId: string; 
  como: string; 
  quiero: string; 
  para: string; 
  criterios: string[]; 
  estado: 'Por hacer'|'En progreso'|'En revisión'|'Hecho'; 
  puntos: number;
  asignadoA?: string;
  sprintId?: string;
  prioridad: 'Baja'|'Media'|'Alta'|'Crítica';
};

export type Aprobacion = { 
  id: string; 
  proyectoId: string; 
  titulo: string; 
  resumen: string; 
  estado: 'Pendiente'|'Aprobada'|'Rechazada'; 
  solicitanteId: string; 
  fechaISO: string;
  tipo: 'Cambio de alcance'|'Cambio de cronograma'|'Cambio de presupuesto'|'Otro';
};

export type LogAuditoria = { 
  id: string; 
  actorId: string; 
  accion: string; 
  entidad: string; 
  fechaISO: string; 
  ip: string;
  detalles?: string;
};

export type Sprint = {
  id: string;
  nombre: string;
  proyectoId: string;
  fechaInicio: string;
  fechaFin: string;
  estado: 'Planificado'|'En curso'|'Cerrado';
  objetivo: string;
  capacidad: number;
};

export type Equipo = {
  id: string;
  nombre: string;
  institucionId: string;
  miembros: string[];
  proyectoId?: string;
  liderId: string;
};

export type Notificacion = {
  id: string;
  titulo: string;
  mensaje: string;
  tipo: 'info'|'warning'|'error'|'success';
  leida: boolean;
  fechaISO: string;
  usuarioId: string;
};

export type Integracion = {
  id: string;
  nombre: string;
  tipo: 'Google Calendar'|'SIIGO'|'Email SMTP'|'Slack'|'Teams';
  estado: 'Conectada'|'Desconectada'|'Error';
  configuracion: Record<string, any>;
  ultimaSincronizacion?: string;
};
