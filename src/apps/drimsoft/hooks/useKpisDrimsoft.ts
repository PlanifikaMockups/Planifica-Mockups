import { useState, useEffect } from 'react';
import { KPI } from '../../../shared/types';
import { instituciones, tickets, proyectos } from '../../../mocks/fixtures';

export function useKpisDrimsoft() {
  const [kpis, setKpis] = useState<KPI[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular llamada a API
    const fetchKpis = async () => {
      setLoading(true);
      
      // Simular delay de red
      await new Promise(resolve => setTimeout(resolve, 500));

      const mockKpis: KPI[] = [
        {
          label: 'Instituciones Activas',
          value: instituciones.filter(inst => inst.estado === 'Activa').length,
          trend: 'up',
          unit: 'instituciones'
        },
        {
          label: 'Proyectos en Curso',
          value: proyectos.filter(proj => proj.estado === 'En curso').length,
          trend: 'up',
          unit: 'proyectos'
        },
        {
          label: 'Tickets Abiertos',
          value: tickets.filter(ticket => ticket.estado !== 'Resuelto').length,
          trend: 'down',
          unit: 'tickets'
        },
        {
          label: 'SLA Promedio',
          value: 2.3,
          trend: 'up',
          unit: 'horas'
        },
        {
          label: 'NPS',
          value: 92,
          trend: 'up',
          unit: 'puntos'
        }
      ];

      setKpis(mockKpis);
      setLoading(false);
    };

    fetchKpis();
  }, []);

  return { kpis, loading };
}
