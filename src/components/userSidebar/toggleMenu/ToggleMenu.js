import React from 'react';
import './togglemenu.css'
import { Link } from 'react-router-dom';

const ToggleBar = ({ isToggle, openUsersidebar }) => {

   
  return (
   <div onClick={ openUsersidebar } className={`toggle ${isToggle && "is-open"}`}>
      <div className="toggleContainer">
         <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/users">Sign Up</Link></li>
         </ul>
      </div>
   </div>
   )
};

export default ToggleBar;