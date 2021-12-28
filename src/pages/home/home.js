import React from 'react'
import { useState } from 'react';
import styles from './home.module.css'
import Sidebar from '../../components/Sidebar/sidebar';
import CardList from '../../pages/cardList/cardList';
import Paginator from '../../components/pagination/paginator';


const Home = ({favCards, setFavCards}) => {

   const [searchValue, setSearchValue] = useState();
   

   const addToFav = (pokemon) => {       
      setFavCards([...favCards, pokemon]);
 }

   return (
      <div className={styles.container}>
         <div>
          <Sidebar onSearch={setSearchValue}/>
         </div>
         <div>
          <CardList searchValue={searchValue} addToFav={addToFav}/>
          <Paginator/>
        </div> 
      </div>
   )
}

export default Home;
