import React from 'react';
import './TicketCard.css';

function TicketCard({ ticket }) {
  return (
    <div className="ticket-card">
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <p><strong>Status:</strong> {ticket.status}</p>
      <p><strong>User:</strong> {ticket.user}</p>
      <p><strong>Priority:</strong> {ticket.priority}</p>
    </div>
  );
}

export default TicketCard;
