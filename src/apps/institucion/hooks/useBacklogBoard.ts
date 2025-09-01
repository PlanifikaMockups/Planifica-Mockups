import { useState, useEffect } from 'react';
import { HistoriaUsuario } from '../../../shared/types';
import { historiasUsuario } from '../../../mocks/fixtures';

export function useBacklogBoard() {
  const [historias, setHistorias] = useState<HistoriaUsuario[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistorias = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 300));
      setHistorias(historiasUsuario);
      setLoading(false);
    };

    fetchHistorias();
  }, []);

  const moveHistoria = (historiaId: string, newStatus: HistoriaUsuario['estado']) => {
    setHistorias(prev => 
      prev.map(historia => 
        historia.id === historiaId 
          ? { ...historia, estado: newStatus }
          : historia
      )
    );
  };

  const columns = [
    { id: 'Por hacer', title: 'Por hacer', color: '#3B82F6' },
    { id: 'En progreso', title: 'En progreso', color: '#F59E0B' },
    { id: 'En revisión', title: 'En revisión', color: '#8B5CF6' },
    { id: 'Hecho', title: 'Hecho', color: '#10B981' }
  ];

  const kanbanItems = historias.map(historia => ({
    id: historia.id,
    title: `Como ${historia.como}, quiero ${historia.quiero}`,
    description: `Para ${historia.para}`,
    status: historia.estado,
    priority: historia.prioridad,
    assignee: historia.asignadoA,
    puntos: historia.puntos,
    criterios: historia.criterios
  }));

  return {
    historias,
    kanbanItems,
    columns,
    loading,
    moveHistoria
  };
}
