import React from 'react'
import styles from './cards.module.css'


const Cards = ( { pokemon, onClick } ) => {
  
   return (
      <div className={styles.container} style={{ backgroundImage: `url(${pokemon.thumbnailUrl})` }} onClick={onClick}>
         <div className={styles.info}>
         <p><b>{pokemon.title}</b></p>
         <p>{pokemon.description}</p>
         </div>
      </div>
   )
}

export default Cards;
