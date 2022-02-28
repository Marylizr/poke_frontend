import React from "react";
import styles from "../favs/favs.module.css";
import Card from "../../components/cards/card";
import { useEffect } from "react";


const Favs = ({ favCards, setFavCards }) => {

      useEffect(() => {
         fetch('http://localhost:3010/favs')
           .then((response) => {
              if (!response.ok){
                 throw new Error("error")
              }
              return response.json();
           })
           .then((json) => {
            setFavCards(json);
           })
           .catch((error) => {
              console.log(error);
           });
       }, [setFavCards]);


   
     return(
         <div className={styles.container}>

            <h3>My Favs</h3>
            <div className={styles.favs}>
            {favCards && favCards.length > 0 && favCards.map((pokemon) => {
               return(              
                  <Card pokemon={pokemon} id={pokemon._id} key={pokemon._id} isInFav={true}/>         
                  )
            })}
            </div>  
            {(!favCards || favCards.length === 0) && (<p>no Favorites yet!</p>)}
         </div>
     )
};

export default Favs;