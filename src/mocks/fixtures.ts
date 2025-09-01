import { 
  Institucion, 
  Proyecto, 
  Ticket, 
  Usuario, 
  HistoriaUsuario, 
  Aprobacion, 
  LogAuditoria,
  Sprint,
  Equipo,
  Notificacion,
  Integracion
} from '../shared/types';

// Instituciones
export const instituciones: Institucion[] = [
  {
    id: 'inst-1',
    nombre: 'Universidad de Stanford',
    plan: 'Enterprise',
    admins: ['admin-1', 'admin-2'],
    estado: 'Activa',
    fechaCreacion: '2024-01-15',
    proyectosActivos: 12,
    usuariosActivos: 847
  },
  {
    id: 'inst-2',
    nombre: 'MIT',
    plan: 'Pro',
    admins: ['admin-3'],
    estado: 'Activa',
    fechaCreacion: '2024-02-20',
    proyectosActivos: 8,
    usuariosActivos: 523
  },
  {
    id: 'inst-3',
    nombre: 'UC Berkeley',
    plan: 'Basic',
    admins: ['admin-4'],
    estado: 'Activa',
    fechaCreacion: '2024-03-10',
    proyectosActivos: 5,
    usuariosActivos: 234
  }
];

// Usuarios
export const usuarios: Usuario[] = [
  {
    id: 'admin-1',
    nombre: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@stanford.edu',
    rol: 'Administrador de Institución',
    activo: true,
    ultimaActividadISO: '2024-12-31T10:30:00Z',
    institucionId: 'inst-1',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 'admin-2',
    nombre: 'Michael Chen',
    email: 'michael.chen@stanford.edu',
    rol: 'Service Delivery Manager',
    activo: true,
    ultimaActividadISO: '2024-12-31T09:15:00Z',
    institucionId: 'inst-1',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 'admin-3',
    nombre: 'Emily Rodriguez',
    email: 'emily.rodriguez@mit.edu',
    rol: 'Administrador de Institución',
    activo: true,
    ultimaActividadISO: '2024-12-31T11:45:00Z',
    institucionId: 'inst-2',
    avatar: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 'admin-4',
    nombre: 'David Kim',
    email: 'david.kim@berkeley.edu',
    rol: 'Administrador de Institución',
    activo: true,
    ultimaActividadISO: '2024-12-31T08:20:00Z',
    institucionId: 'inst-3',
    avatar: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?w=100&h=100&fit=crop&crop=face'
  }
];

// Proyectos
export const proyectos: Proyecto[] = [
  {
    id: 'proj-1',
    nombre: 'Sistema de Gestión Académica',
    institucionId: 'inst-1',
    estado: 'En curso',
    avance: 75,
    presupuesto: 150000,
    ownerId: 'admin-1',
    fechaInicio: '2024-06-01',
    fechaFin: '2024-12-31',
    descripcion: 'Desarrollo de plataforma integral para gestión académica'
  },
  {
    id: 'proj-2',
    nombre: 'Portal de Investigación',
    institucionId: 'inst-1',
    estado: 'En riesgo',
    avance: 45,
    presupuesto: 200000,
    ownerId: 'admin-2',
    fechaInicio: '2024-07-15',
    fechaFin: '2025-03-31',
    descripcion: 'Portal para gestión de proyectos de investigación'
  },
  {
    id: 'proj-3',
    nombre: 'App Móvil Estudiantil',
    institucionId: 'inst-2',
    estado: 'En curso',
    avance: 60,
    presupuesto: 120000,
    ownerId: 'admin-3',
    fechaInicio: '2024-08-01',
    fechaFin: '2025-02-28',
    descripcion: 'Aplicación móvil para estudiantes'
  },
  {
    id: 'proj-4',
    nombre: 'Sistema de Biblioteca Digital',
    institucionId: 'inst-3',
    estado: 'Planificado',
    avance: 0,
    presupuesto: 80000,
    ownerId: 'admin-4',
    fechaInicio: '2025-01-15',
    fechaFin: '2025-06-30',
    descripcion: 'Digitalización del sistema de biblioteca'
  }
];

// Tickets
export const tickets: Ticket[] = [
  {
    id: 'ticket-1',
    titulo: 'Error en login SSO',
    institucionId: 'inst-1',
    severidad: 'Alta',
    estado: 'En Progreso',
    slaHoras: 4,
    creadoISO: '2024-12-31T08:00:00Z',
    asignadoA: 'admin-1',
    descripcion: 'Los usuarios no pueden acceder con SSO de Google',
    categoria: 'Autenticación'
  },
  {
    id: 'ticket-2',
    titulo: 'Sincronización de calendario fallida',
    institucionId: 'inst-1',
    severidad: 'Media',
    estado: 'Nuevo',
    slaHoras: 8,
    creadoISO: '2024-12-31T09:30:00Z',
    descripcion: 'Los eventos no se sincronizan con Google Calendar',
    categoria: 'Integración'
  },
  {
    id: 'ticket-3',
    titulo: 'Reporte de avance no genera',
    institucionId: 'inst-2',
    severidad: 'Baja',
    estado: 'Pendiente Cliente',
    slaHoras: 24,
    creadoISO: '2024-12-30T14:20:00Z',
    asignadoA: 'admin-3',
    descripcion: 'El reporte de avance de proyectos no se genera correctamente',
    categoria: 'Reportes'
  },
  {
    id: 'ticket-4',
    titulo: 'Acceso denegado a módulo de proyectos',
    institucionId: 'inst-3',
    severidad: 'Crítica',
    estado: 'Resuelto',
    slaHoras: 2,
    creadoISO: '2024-12-30T16:45:00Z',
    asignadoA: 'admin-4',
    descripcion: 'Los administradores no pueden acceder al módulo de proyectos',
    categoria: 'Permisos'
  }
];

// Historias de Usuario
export const historiasUsuario: HistoriaUsuario[] = [
  {
    id: 'hu-1',
    proyectoId: 'proj-1',
    como: 'Estudiante',
    quiero: 'poder ver mi horario de clases',
    para: 'organizar mejor mi tiempo',
    criterios: ['Mostrar todas las materias', 'Indicar horarios', 'Permitir exportar'],
    estado: 'Hecho',
    puntos: 8,
    asignadoA: 'admin-1',
    sprintId: 'sprint-1',
    prioridad: 'Alta'
  },
  {
    id: 'hu-2',
    proyectoId: 'proj-1',
    como: 'Profesor',
    quiero: 'gestionar las calificaciones de mis estudiantes',
    para: 'mantener un registro actualizado',
    criterios: ['Ingresar calificaciones', 'Calcular promedios', 'Generar reportes'],
    estado: 'En progreso',
    puntos: 13,
    asignadoA: 'admin-2',
    sprintId: 'sprint-2',
    prioridad: 'Alta'
  },
  {
    id: 'hu-3',
    proyectoId: 'proj-2',
    como: 'Investigador',
    quiero: 'subir documentos de investigación',
    para: 'compartir mis hallazgos',
    criterios: ['Soporte para PDF', 'Control de versiones', 'Comentarios'],
    estado: 'Por hacer',
    puntos: 5,
    prioridad: 'Media'
  }
];

// Aprobaciones
export const aprobaciones: Aprobacion[] = [
  {
    id: 'aprob-1',
    proyectoId: 'proj-1',
    titulo: 'Cambio de alcance - Módulo de reportes',
    resumen: 'Se solicita agregar funcionalidad de reportes avanzados al módulo de gestión académica',
    estado: 'Pendiente',
    solicitanteId: 'admin-1',
    fechaISO: '2024-12-31T10:00:00Z',
    tipo: 'Cambio de alcance'
  },
  {
    id: 'aprob-2',
    proyectoId: 'proj-2',
    titulo: 'Extensión de cronograma',
    resumen: 'Se requiere extender el proyecto 2 semanas debido a complejidades técnicas',
    estado: 'Aprobada',
    solicitanteId: 'admin-2',
    fechaISO: '2024-12-30T15:30:00Z',
    tipo: 'Cambio de cronograma'
  },
  {
    id: 'aprob-3',
    proyectoId: 'proj-3',
    titulo: 'Incremento de presupuesto',
    resumen: 'Se necesita incrementar el presupuesto en $20,000 para funcionalidades adicionales',
    estado: 'Pendiente',
    solicitanteId: 'admin-3',
    fechaISO: '2024-12-31T11:15:00Z',
    tipo: 'Cambio de presupuesto'
  }
];

// Logs de Auditoría
export const logsAuditoria: LogAuditoria[] = [
  {
    id: 'log-1',
    actorId: 'admin-1',
    accion: 'Crear proyecto',
    entidad: 'Proyecto',
    fechaISO: '2024-12-31T12:00:00Z',
    ip: '192.168.1.100',
    detalles: 'Proyecto "Sistema de Gestión Académica" creado'
  },
  {
    id: 'log-2',
    actorId: 'admin-2',
    accion: 'Modificar usuario',
    entidad: 'Usuario',
    fechaISO: '2024-12-31T11:45:00Z',
    ip: '192.168.1.101',
    detalles: 'Rol de usuario actualizado a Service Delivery Manager'
  },
  {
    id: 'log-3',
    actorId: 'admin-3',
    accion: 'Aprobar cambio',
    entidad: 'Aprobación',
    fechaISO: '2024-12-31T10:30:00Z',
    ip: '192.168.1.102',
    detalles: 'Aprobación de extensión de cronograma'
  }
];

// Sprints
export const sprints: Sprint[] = [
  {
    id: 'sprint-1',
    nombre: 'Sprint 1 - Fundación',
    proyectoId: 'proj-1',
    fechaInicio: '2024-12-01',
    fechaFin: '2024-12-14',
    estado: 'Cerrado',
    objetivo: 'Configuración inicial y autenticación',
    capacidad: 40
  },
  {
    id: 'sprint-2',
    nombre: 'Sprint 2 - Gestión Académica',
    proyectoId: 'proj-1',
    fechaInicio: '2024-12-15',
    fechaFin: '2024-12-28',
    estado: 'En curso',
    objetivo: 'Módulos de gestión de estudiantes y profesores',
    capacidad: 40
  },
  {
    id: 'sprint-3',
    nombre: 'Sprint 1 - Portal',
    proyectoId: 'proj-2',
    fechaInicio: '2024-12-01',
    fechaFin: '2024-12-21',
    estado: 'En curso',
    objetivo: 'Estructura base del portal de investigación',
    capacidad: 60
  }
];

// Equipos
export const equipos: Equipo[] = [
  {
    id: 'equipo-1',
    nombre: 'Equipo de Desarrollo Académico',
    institucionId: 'inst-1',
    miembros: ['admin-1', 'admin-2'],
    proyectoId: 'proj-1',
    liderId: 'admin-1'
  },
  {
    id: 'equipo-2',
    nombre: 'Equipo de Investigación',
    institucionId: 'inst-1',
    miembros: ['admin-1'],
    proyectoId: 'proj-2',
    liderId: 'admin-2'
  },
  {
    id: 'equipo-3',
    nombre: 'Equipo MIT',
    institucionId: 'inst-2',
    miembros: ['admin-3'],
    proyectoId: 'proj-3',
    liderId: 'admin-3'
  }
];

// Notificaciones
export const notificaciones: Notificacion[] = [
  {
    id: 'notif-1',
    titulo: 'Nuevo ticket asignado',
    mensaje: 'Se te ha asignado el ticket "Error en login SSO"',
    tipo: 'info',
    leida: false,
    fechaISO: '2024-12-31T10:00:00Z',
    usuarioId: 'admin-1'
  },
  {
    id: 'notif-2',
    titulo: 'Aprobación requerida',
    mensaje: 'Tienes una nueva solicitud de aprobación pendiente',
    tipo: 'warning',
    leida: false,
    fechaISO: '2024-12-31T09:30:00Z',
    usuarioId: 'admin-1'
  },
  {
    id: 'notif-3',
    titulo: 'Sprint completado',
    mensaje: 'El Sprint 1 - Fundación se ha completado exitosamente',
    tipo: 'success',
    leida: true,
    fechaISO: '2024-12-30T17:00:00Z',
    usuarioId: 'admin-1'
  }
];

// Integraciones
export const integraciones: Integracion[] = [
  {
    id: 'int-1',
    nombre: 'Google Calendar',
    tipo: 'Google Calendar',
    estado: 'Conectada',
    configuracion: {
      clientId: 'google-client-id',
      clientSecret: 'google-client-secret',
      redirectUri: 'https://app.planifika.com/auth/google/callback'
    },
    ultimaSincronizacion: '2024-12-31T10:00:00Z'
  },
  {
    id: 'int-2',
    nombre: 'SIIGO',
    tipo: 'SIIGO',
    estado: 'Conectada',
    configuracion: {
      apiKey: 'siigo-api-key',
      companyId: 'siigo-company-id'
    },
    ultimaSincronizacion: '2024-12-31T09:00:00Z'
  },
  {
    id: 'int-3',
    nombre: 'Email SMTP',
    tipo: 'Email SMTP',
    estado: 'Error',
    configuracion: {
      host: 'smtp.gmail.com',
      port: 587,
      username: 'noreply@planifika.com'
    }
  }
];
