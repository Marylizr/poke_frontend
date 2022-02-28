import React from 'react'
import styles from './cards.module.css'


const Card = ( { pokemon, onClick } ) => {
   
   return (
      <div className={styles.container} style={{ backgroundImage: `url(${pokemon.thumbnailUrl})` }} onClick={onClick}>
         <div className={styles.info}>
         <h2>{pokemon.name}</h2>
         <p>{pokemon.description}</p>
         </div>
      </div>
   )
}

export default Card;
