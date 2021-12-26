import React from 'react'
import Cards from '../../components/cards/cards';
import pokemons from '../../assets/response.json'
import styles from './cardList.module.css'
import Modal from '../../components/modal/modal';
import { useState } from 'react';
import { useModal } from '../../hooks/useModal';


const CardList = (addToFav) => {
  
   const [selectedItem, setSelectedItem] = useState();
   const [isOpenModal, openModal, closeModal] = useModal(false);


   return (
      <div className={styles.content}>
        {pokemons.map(pokemon => <Cards pokemon={pokemon} onClick={() => {
            setSelectedItem(pokemon);
            openModal();           
      }} />)} 

        {selectedItem && 
            <Modal addToFav={addToFav} isOpen={isOpenModal} closeModal={closeModal}>
            <img src={selectedItem.largeImg} width="300" alt="img"/>
            <button className="read" >Read more...</button>
            </Modal>}
      </div>
   )
};

export default CardList;
