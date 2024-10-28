import React from 'react';

function GroupSelector({ groupBy, onGroupChange }) {
  return (
    <select value={groupBy} onChange={(e) => onGroupChange(e.target.value)}>
      <option value="">Group by</option>
      <option value="status">Status</option>
      <option value="user">User</option>
      <option value="priority">Priority</option>
    </select>
  );
}

export default GroupSelector;
