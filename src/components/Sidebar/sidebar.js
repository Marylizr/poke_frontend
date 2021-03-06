import React from 'react';
import logo from '../../assets/logo.png';
import styles from './sidebar.module.css';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';
import UserSideBar from '../userSidebar/UserSidebar';

const Sidebar = ({ onSearch }) => {
   const handleOnChange = event => onSearch(event.target.value);
   
   return (
      <div className={styles.sidebar}>
        <img className={styles.logo} src={logo} alt="logo"/>
         <div>
         <input className={styles.sideInput} type="text" placeholder="Search" onChange={handleOnChange}/>
         </div>
         <div className={styles.nav}>   
         <ul>
            <li><Link to="/">Home</Link>  </li>
            <li><ExternalLink href="https://www.pokemon.com/us/pokemon-news/" target="_blank">News</ExternalLink></li>
            <li><UserSideBar /></li>
         </ul>
         </div>
        
      </div>
   )
}

export default Sidebar;

