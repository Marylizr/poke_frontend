import React from 'react';
import logo from '../../assets/logo.png';
import styles from './sidebar.module.css';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';
import { useNavigate } from "react-router-dom";
import { removeSession } from "../../api/auth";
import { useState } from 'react';
import ButtonRandom from '../buttonRandom/ButtonRandom';
import Card from '../cards/card';


const SidebarDashboard = ({ onSearch }) => {
   const navigate = useNavigate();
   const onLogOut = () => {
      removeSession()
      navigate("/");
    };

    const [goRandom, setGoRandom] = useState({});

   return (
      <div className={styles.sidebar}>
        <img className={styles.logo} src={logo} alt="logo"/>
         <div className={styles.sideInput}>
            <input onChange={event => {
               const value = event.target.value;
               onSearch(value);
               }} placeholder="Search" />
         </div>
         <div className={styles.nav}>   
            <ul>
               <li><Link to="/securedcontent/dashboard">Home</Link>  </li>
               <li><ExternalLink href="https://www.pokemon.com/us/pokemon-news/" target="_blank">News</ExternalLink></li>
               <li><Link to="/favs">My Fav</Link></li>
               <li><Link to="/createpokewiki">Add a PokeWiki</Link></li>
               <li><button onClick={() => onLogOut()}>Log Out</button></li>
            </ul>
         </div>
         <div className={styles.random}>
            <Card pokemon={goRandom} />
            <ButtonRandom onRandom={setGoRandom}  />    
         </div>
      </div>
   )
}

export default SidebarDashboard;

