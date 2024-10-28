import React, { useState, useEffect } from 'react';
import GroupSelector from './GroupSelector';
import SortSelector from './SortSelector';
import TicketCard from './TicketCard';
import './KanbanBoard.css';

function KanbanBoard() {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [groupBy, setGroupBy] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [displayOptions, setDisplayOptions] = useState(false);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      setTickets(data.tickets || []);
      setFilteredTickets(data.tickets || []);
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };

  const handleDisplayOptions = () => {
    setDisplayOptions(!displayOptions);
  };

  const handleGroupByChange = (value) => {
    setGroupBy(value);
    applyFiltersAndSorting(value, sortBy);
  };

  const handleSortByChange = (value) => {
    setSortBy(value);
    applyFiltersAndSorting(groupBy, value);
  };

  const applyFiltersAndSorting = (group, sort) => {
    let result = [...tickets];

    // Grouping
    if (group === 'status') {
      result = result.sort((a, b) => a.status.localeCompare(b.status));
    } else if (group === 'user') {
      result = result.sort((a, b) => a.user.localeCompare(b.user));
    } else if (group === 'priority') {
      result = result.sort((a, b) => b.priority - a.priority);
    }

    // Sorting
    if (sort === 'priority') {
      result = result.sort((a, b) => b.priority - a.priority);
    } else if (sort === 'title') {
      result = result.sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredTickets(result);
  };

  return (
    <div className="kanban-board">
      <button onClick={handleDisplayOptions} className="display-button">Display</button>
      {displayOptions && (
        <div className="selectors">
          <GroupSelector groupBy={groupBy} onGroupChange={handleGroupByChange} />
          <SortSelector sortBy={sortBy} onSortChange={handleSortByChange} />
        </div>
      )}
      <div className="ticket-container">
        {filteredTickets.map(ticket => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
