import React, { useState } from "react";
import styles from "../favs/favs.module.css";
import Card from "../../components/cards/card";
import { useEffect } from "react";
import SidebarDashboard from "../../components/sideBar_dashboard/SidebarDashboard";
import { useModal } from '../../hooks/useModal';
import Modal from "../../components/modal/modal";


const Favs = () => {
   const [fav, setFav] = useState ([]);
   const [selectedItem, setSelectedItem] = useState();
   const [isOpenModal, openModal, closeModal] = useModal(false);
   const[ name, setName] = useState();

      useEffect(() => {
         fetch('http://localhost:3010/favs')
           .then(response => {
              if (!response.ok){
                 throw new Error("error")
              }
              return response.json();
           })
           .then((json) => {
            setFav(json);
           })
           .catch((error) => {
              console.log(error);
           });
       }, [setFav]);

       useEffect(() => {
         fetch('http://localhost:3010/users/me')
           .then((response) => {
             if (!response.ok){
               throw new Error("error")
             }
              return response.json()
              .then((json) => {
               setName(json.name);
             })
           })
           
         }, [setName]);

       const handleDelete = (id) => { 
         fetch('http://localhost:3010/favs/'+ id, {
            method: 'DELETE',
            headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(fav)
         })
         .then(res => {window.location.reload()}) 
      };

   
     return(
         <div className={styles.favs}>
            <SidebarDashboard />
            
            <div className={styles.content}>
            <h3>{name.toUpperCase()} this are your Favorites PokeWikis</h3>

               <div className={styles.card_container}> 
               {fav && fav.length > 0 && fav.map((pokemon) =>             
                  <Card pokemon={pokemon} id={pokemon._id} key={pokemon._id} isInFav={true}
                  onClick={() => {
                     setSelectedItem(pokemon);
                     openModal();           
               }}/> )}
               
               {selectedItem && 
               <Modal isOpen={isOpenModal} closeModal={closeModal}>
               <img src={selectedItem.largeImg} width="300" alt="img"/>
               <button onClick={() => {handleDelete(selectedItem._id)}}>Delete</button>
               </Modal>}
               </div>
               <div className={styles.message}>{(!fav || fav.length === 0) && (<p>no Favorites yet!</p>)}</div>
            </div>  
           
         </div>
     )
};

export default Favs;