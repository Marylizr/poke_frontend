import React from 'react'
import Card from '../../components/cards/card';
import styles from './cardList.module.css'
import Modal from '../../components/modal/modal';
import { useState, useEffect } from 'react';
import { useModal } from '../../hooks/useModal';
import { ExternalLink } from 'react-external-link';


const CardList = ({ addToFav, searchValue, isInCart }) => {
  
   const [selectedItem, setSelectedItem] = useState();
   const [isOpenModal, openModal, closeModal] = useModal(false);
   const [filteredData, setFilteredData] = useState([]);
   const [data, setData] = useState([]);

      useEffect(() => {
         if (searchValue !== '') {
            setFilteredData(data.filter(({ name }) => {
              const regex = new RegExp(searchValue);
              return regex.test(name);
            }))
               
         }
      }, [searchValue, setFilteredData, data]);
      console.log(filteredData);

      useEffect(() => {
         if (data.length) {
           setFilteredData(data);
         }
       }, [data, setFilteredData]);
     
       useEffect(() => {
         fetch('http://localhost:3010/createPokeWiki5')
           .then((response) => {
              if (!response.ok){
                 throw new Error("error")
              }
              return response.json();
           })
           .then((json) => {
            setData(json);
           })
           .catch((error) => {
              console.log(error);
           })
       }, []);

   return (
      <div className={styles.content}>
        {filteredData.map(pokemon => <Card pokemon={pokemon} id={pokemon._id} key={pokemon._id} addToFav={addToFav}  onClick={() => {
            setSelectedItem(pokemon);
            openModal();           
      }} />)} 

      

        {selectedItem && 
            <Modal isOpen={isOpenModal} closeModal={closeModal}>
            <img src={selectedItem.largeImg} width="300" alt="img"/>
            <ExternalLink className="read"target="_blank" href={`https://www.pokemon.com/us/pokedex/${selectedItem.name.toLocaleLowerCase()}`}>Read More</ExternalLink>
            {!isInCart && <button className="fav" onClick={() => addToFav(selectedItem)}>❤︎</button>}
            </Modal>}
      </div>
   )
};

export default CardList;
