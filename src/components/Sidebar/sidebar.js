import React from 'react';
import Seachbar from '../searchBar/seachbar';
import logo from '../../assets/logo.png';
import styles from './sidebar.module.css';

const Sidebar = () => {
   return (
      <div className={styles.sidebar}>
        <img className={styles.logo} src={logo} alt="logo"/>
        <Seachbar />
      </div>
   )
}

export default Sidebar;
