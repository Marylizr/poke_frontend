import React from "react";
import styles from "../favs/favs.module.css";
import Card from "../../components/cards/card";
import Sidebar from "../../components/Sidebar/sidebar";
import { useEffect,useState } from "react";

const Favs = ({ favCards }) => {

      const [savedCard, setSavedCard] = useState([]);

      useEffect(() => {
         
         return () => {
            
         }
      }, [savedCard])
     return(
         <div>
            <div>
               <Sidebar />
            </div>
            <h3>My Favs</h3>
            <div className={styles.favs}>
            {favCards && favCards.length > 0 && favCards.map((pokemon) => {
               return(              
                  <Card pokemon={pokemon} isInFav={true}/>         
                  )
            })}
            </div>  
           
         </div>
     )
};

export default Favs;