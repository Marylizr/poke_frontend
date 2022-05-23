import React from 'react'
import styles from './home.module.css'
import CardList from '../../pages/cardList/cardList';
import Paginator from '../../components/pagination/paginator';


const Home = ({searchValue, setSearchValue}) => {
  
  
  return (
      <div className={styles.home}>
       
         <div className={styles.content}>
          <CardList searchValue={searchValue} />
          <Paginator/>
        </div> 
      </div>
   )
}

export default Home;
