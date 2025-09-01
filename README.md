# Planifika - Plataforma de Gestión de Proyectos Educativos

Monorepo React con tres niveles de aplicación para gestión de proyectos educativos.

## 🏗️ Estructura del Proyecto

### Niveles de Aplicación

1. **Nivel 1 - DrimSoft (Admin & Soporte)**
   - Dashboard con KPIs de plataforma
   - Gestión de tickets de soporte (Kanban)
   - Administración de instituciones
   - Auditoría y logs
   - Configuración de integraciones

2. **Nivel 2 - Administrador de Institución**
   - Dashboard institucional
   - Gestión de proyectos y equipos
   - Backlog y sprints (Scrum board)
   - Aprobaciones y reportes
   - Centro de ayuda

3. **Nivel 3 - Cliente/Colaborador/Externo** (App existente)
   - Dashboard personal
   - Gestión de proyectos individuales
   - Tareas y reportes
   - Directorio de usuarios

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js 18+ 
- npm o pnpm

### Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`

## 📁 Estructura de Carpetas

```
src/
├── apps/
│   ├── drimsoft/           # Nivel 1 - DrimSoft
│   │   ├── pages/         # Páginas de DrimSoft
│   │   ├── components/    # Componentes específicos
│   │   ├── hooks/         # Hooks personalizados
│   │   └── state/         # Estado de la aplicación
│   └── institucion/       # Nivel 2 - Institución
│       ├── pages/         # Páginas de Institución
│       ├── components/    # Componentes específicos
│       ├── hooks/         # Hooks personalizados
│       └── state/         # Estado de la aplicación
├── shared/
│   ├── components/        # Componentes compartidos
│   ├── ui/               # Componentes UI base
│   ├── lib/              # Utilidades y helpers
│   └── types/            # Tipos TypeScript
├── mocks/                # Datos mock y fixtures
└── routes.tsx            # Configuración de rutas
```

## 🛠️ Stack Tecnológico

- **Frontend**: React 18 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router DOM
- **State Management**: Zustand (preparado)
- **Mock API**: MSW (preparado)
- **Icons**: Lucide React
- **Charts**: Recharts

## 🎯 Rutas Disponibles

### Nivel 1 - DrimSoft
- `/drimsoft` - Dashboard principal
- `/drimsoft/tickets` - Gestión de tickets (Kanban)

### Nivel 2 - Institución
- `/institucion` - Dashboard institucional
- `/institucion/backlog` - Backlog y sprints (Kanban)

### Nivel 3 - Cliente (App existente)
- `/dashboard` - Dashboard personal
- `/projects` - Proyectos
- `/tasks` - Tareas
- `/reports` - Reportes
- `/directory` - Directorio
- `/settings` - Configuración

## 🔧 Características Implementadas

### Componentes UI Compartidos
- `KpiCard` - Tarjetas de métricas con tendencias
- `DataTable` - Tabla con paginación y ordenamiento
- `KanbanBoard` - Tablero Kanban con drag & drop
- `MiniLineChart` - Gráficos de líneas simples

### Funcionalidades Mock
- Datos realistas para todas las entidades
- Simulación de llamadas API con delays
- Optimistic updates en tableros Kanban
- Filtros y búsquedas funcionales

### Diseño y UX
- Diseño responsivo (>= 360px)
- Dark mode ready
- Accesibilidad básica
- Componentes reutilizables
- Paleta de colores consistente

## 📊 Datos Mock Incluidos

- **3 Instituciones** (Stanford, MIT, UC Berkeley)
- **4 Proyectos** con diferentes estados
- **4 Tickets** de soporte
- **3 Historias de Usuario** para backlog
- **3 Aprobaciones** pendientes
- **3 Sprints** activos
- **Logs de auditoría** y notificaciones

## 🚧 Próximas Extensiones (TODO)

### DrimSoft (Nivel 1)
- [ ] Página de instituciones/clientes
- [ ] Gestión de proyectos y contratos
- [ ] Sistema de usuarios y roles (RBAC)
- [ ] Auditoría y logs detallados
- [ ] Configuración de integraciones
- [ ] Centro de notificaciones

### Institución (Nivel 2)
- [ ] Gestión de equipos y colaboradores
- [ ] Sistema de aprobaciones
- [ ] Reportes avanzados
- [ ] Centro de ayuda integrado
- [ ] Gestión de presupuestos

### Mejoras Generales
- [ ] Implementar Zustand para estado global
- [ ] Configurar MSW para mock API completo
- [ ] Agregar más gráficos y visualizaciones
- [ ] Implementar sistema de notificaciones
- [ ] Agregar tests unitarios

## 🎨 Paleta de Colores

- **Primario**: `#0F172A` (navy slate)
- **Acentos**: `#3B82F6` (blue)
- **Éxito**: `#10B981` (green)
- **Advertencia**: `#F59E0B` (orange)
- **Error**: `#EF4444` (red)
- **Neutral**: `#6B7280` (gray)

## 📝 Notas de Desarrollo

- Todas las rutas están protegidas y requieren autenticación
- Los datos son completamente mock y no persisten
- El drag & drop en Kanban es simulado (optimistic updates)
- Los componentes están diseñados para ser reutilizables
- La estructura permite fácil extensión de funcionalidades

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.
