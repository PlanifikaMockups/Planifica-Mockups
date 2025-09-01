import { useState, useEffect } from 'react';
import { Ticket } from '../../../shared/types';
import { tickets } from '../../../mocks/fixtures';

export function useTicketsKanban() {
  const [ticketsData, setTicketsData] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 300));
      setTicketsData(tickets);
      setLoading(false);
    };

    fetchTickets();
  }, []);

  const moveTicket = (ticketId: string, newStatus: Ticket['estado']) => {
    setTicketsData(prev => 
      prev.map(ticket => 
        ticket.id === ticketId 
          ? { ...ticket, estado: newStatus }
          : ticket
      )
    );
  };

  const columns = [
    { id: 'Nuevo', title: 'Nuevo', color: '#3B82F6' },
    { id: 'En Progreso', title: 'En Progreso', color: '#F59E0B' },
    { id: 'Pendiente Cliente', title: 'Pendiente Cliente', color: '#EF4444' },
    { id: 'Resuelto', title: 'Resuelto', color: '#10B981' }
  ];

  const kanbanItems = ticketsData.map(ticket => ({
    id: ticket.id,
    title: ticket.titulo,
    description: ticket.descripcion,
    status: ticket.estado,
    priority: ticket.severidad,
    assignee: ticket.asignadoA,
    categoria: ticket.categoria,
    slaHoras: ticket.slaHoras,
    creadoISO: ticket.creadoISO
  }));

  return {
    tickets: ticketsData,
    kanbanItems,
    columns,
    loading,
    moveTicket
  };
}
