import React from 'react'
import { useState } from 'react';
import styles from './home.module.css'
import Sidebar from '../../components/Sidebar/sidebar';
import CardList from '../../pages/cardList/cardList';
import Paginator from '../../components/pagination/paginator';
import Favs from '../cardList/favs/favs';

const Home = () => {
   const [favCards, setFavCards]  = useState([]);

   const addToFav = (pokemon) => {       
      setFavCards([...favCards, pokemon]);
 }

   return (
      <div className={styles.container}>
         <div>
          <Sidebar/>
        </div>
        <div>
          <CardList addToFav={addToFav}/>
          <Paginator/>
          <Favs favCards={favCards}/>
        </div> 
      </div>
   )
}

export default Home;
