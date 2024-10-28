import React, { useState } from 'react';
import './assets/css/DisplaySettings.css'

const DisplaySettings = () => {
 const [grouping, setGrouping] = useState('Status');
 const [ordering, setOrdering] = useState('Priority');


 const handleGroupingChange = (e) => {
   setGrouping(e.target.value);
   console.log('Grouping changed to:', e.target.value);
 };


 const handleOrderingChange = (e) => {
   setOrdering(e.target.value);
   console.log('Ordering changed to:', e.target.value);
 };


 return (
   <div className="display-settings">
     <button className="display-button">Display ▼</button>
     <div className="dropdown-menu">
       <div className="dropdown-item">
         <label>Grouping</label>
         <select value={grouping} onChange={handleGroupingChange}>
           <option value="Status">Status</option>
           <option value="Priority">Priority</option>
         </select>
       </div>
       <div className="dropdown-item">
         <label>Ordering</label>
         <select value={ordering} onChange={handleOrderingChange}>
           <option value="Priority">Priority</option>
           <option value="Status">Status</option>
         </select>
       </div>
     </div>
   </div>
 );
};


export default DisplaySettings;