import React from 'react';
import logo from '../../assets/logo.png';
import styles from './sidebar.module.css';
import { Link } from 'react-router-dom';



const Sidebar = ({ onSearch, favCards }) => {
   const handleOnChange = event => onSearch(event.target.value);
   
   return (
      <div className={styles.sidebar}>
        <img className={styles.logo} src={logo} alt="logo"/>
      <div>
        <input type="text" placeholder="Search" onChange={handleOnChange}/>
      </div>
      <div>       
         <Link to="/favs">My Fav</Link><br />
         <Link to="/">Home</Link>  
      </div>
         
      </div>
   )
}

export default Sidebar;

