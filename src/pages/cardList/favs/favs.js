import React from "react";
import styles from "../favs/favs.module.css";
import Cards from "../../../components/cards/cards";

const Favs = ({ favCards }) => {

     return(
         <div>
            <h3>My Favs</h3>
            <div className={styles.favs}>
            {favCards && favCards.length > 0 && favCards.map((pokemon) => {
               return(
                              
                  <Cards pokemon={pokemon} isInFav={true}/>
                              
                  )
            })}
            </div>    
         </div>
     )
};

export default Favs;