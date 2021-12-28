import React from 'react'
import Card from '../../components/cards/card';
import pokemons from '../../assets/response.json'
import styles from './cardList.module.css'
import Modal from '../../components/modal/modal';
import { useState, useEffect } from 'react';
import { useModal } from '../../hooks/useModal';
import { useNavigate } from 'react-router-dom';


const CardList = ({ addToFav, searchValue, isInCart }) => {
  
   const [selectedItem, setSelectedItem] = useState();
   const [isOpenModal, openModal, closeModal] = useModal(false);
   const [filteredData, setFilteredData] = useState(pokemons);
   const navigate = useNavigate();

      useEffect(() => {
         if (searchValue) {
            const filtered = pokemons.filter( pokemon => {
               return pokemon.name.toLocaleLowerCase().includes(searchValue);
            }); 
               setFilteredData(filtered);
         }
         
      }, [searchValue]);
      console.log(filteredData);

   return (
      <div className={styles.content}>
        {filteredData.map(pokemon => <Card key={pokemon.id} addToFav={addToFav} pokemon={pokemon} onClick={() => {
            setSelectedItem(pokemon);
            openModal();           
      }} />)} 

        {selectedItem && 
            <Modal isOpen={isOpenModal} closeModal={closeModal}>
            <img src={selectedItem.largeImg} width="300" alt="img"/>
            <button className="read" onClick= {() => {navigate(`${selectedItem.url}`)} }>Read more...</button>
            {!isInCart && <button className="fav" onClick={() => addToFav(selectedItem)}>❤︎</button>}
            </Modal>}
      </div>
   )
};

export default CardList;
