import { useState, useEffect } from 'react';
import { KPI } from '../../../shared/types';
import { proyectos, historiasUsuario, sprints } from '../../../mocks/fixtures';

export function useKpisInstitucion() {
  const [kpis, setKpis] = useState<KPI[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchKpis = async () => {
      setLoading(true);
      
      await new Promise(resolve => setTimeout(resolve, 500));

      const mockKpis: KPI[] = [
        {
          label: '% Avance Promedio',
          value: 65,
          trend: 'up',
          unit: '%'
        },
        {
          label: 'Entregables Pendientes',
          value: 12,
          trend: 'down',
          unit: 'entregables'
        },
        {
          label: 'Sprints Activos',
          value: sprints.filter(sprint => sprint.estado === 'En curso').length,
          trend: 'up',
          unit: 'sprints'
        },
        {
          label: 'Riesgos Abiertos',
          value: 3,
          trend: 'down',
          unit: 'riesgos'
        },
        {
          label: 'Presupuesto Ejecutado',
          value: 78,
          trend: 'up',
          unit: '%'
        }
      ];

      setKpis(mockKpis);
      setLoading(false);
    };

    fetchKpis();
  }, []);

  return { kpis, loading };
}
