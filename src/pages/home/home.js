import React from 'react'
import { useState, useEffect } from 'react';
import styles from './home.module.css'
import CardList from '../../pages/cardList/cardList';
import Paginator from '../../components/pagination/paginator';
import Favs from '../favs/favs';


const Home = ({ searchValue }) => {

   
   const [favCards, setFavCards]  = useState([]);

   const addtofav = (pokemon) => {       
    setFavCards([...favCards, pokemon]);
}

   return (
      <div className={styles.container}>
         <div>
          
         </div>
         <div>
          <CardList searchValue={searchValue} addtofav={addtofav}/>
          <Favs favCards={favCards} setFavCards={setFavCards} />
          <Paginator/>
        </div> 
      </div>
   )
}

export default Home;
