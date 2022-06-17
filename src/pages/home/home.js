import React from 'react'
import styles from './home.module.css'
import CardList from '../../pages/cardList/cardList';

import Sidebar from '../../components/Sidebar/sidebar';

const Home = ({searchValue}) => {
  
  
  return (
      <div className={styles.home}>
        <Sidebar />
         <div className={styles.content}>
          <CardList searchValue={searchValue} />
        </div> 
      </div>
   )
}

export default Home;
