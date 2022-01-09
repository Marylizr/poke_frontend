import React from "react";
import styles from "../favs/favs.module.css";
import Card from "../../components/cards/card";
import Sidebar from "../../components/Sidebar/sidebar";


const Favs = ({ favCards }) => {

     return(
         <div className={styles.container}>
            <Sidebar />

            <h3>My Favs</h3>
            <div className={styles.favs}>
            {favCards && favCards.length > 0 && favCards.map((pokemon) => {
               return(              
                  <Card pokemon={pokemon} id={pokemon._id} isInFav={true}/>         
                  )
            })}
            </div>  
           
         </div>
     )
};

export default Favs;