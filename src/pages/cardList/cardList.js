import React from 'react'
import Card from '../../components/cards/card';
import styles from './cardList.module.css'
import Modal from '../../components/modal/modal';
import { useState, useEffect } from 'react';
import { useModal } from '../../hooks/useModal';
import { ExternalLink } from 'react-external-link';


const CardList = ({ searchValue, isInFav=false }) => {
  
   const [selectedItem, setSelectedItem] = useState();
   const [isOpenModal, openModal, closeModal] = useModal(false);
   const [filteredData, setFilteredData] = useState([]);
   const [data, setData] = useState([]);
   const [favCards, setFavCards]  = useState([]);

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
         fetch('http://localhost:3010/createPokeWiki')
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

      const handleDelete = (id) => { 
         fetch('http://localhost:3010/createPokeWiki/'+ id, {
            method: 'DELETE',
            headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(data)
         })
      }

    const addtofav = (pokemon) => {       
      setFavCards([...favCards, pokemon]);
  }
  
    const onFav = () => {
      const data = { 
         id: selectedItem._id,
         name: selectedItem.name,
         title: selectedItem.title,
         description: selectedItem.description,
         url:selectedItem.url,
         thumbnailUrl: selectedItem.thumbnailUrl,
         largeImg: selectedItem.largeImg,
         
        }
      fetch('http://localhost:3010/favs', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(data)
       }).then(() => {
          addtofav()
         }
      );   
   }
   
   return (
      <div className={styles.content}>
        {filteredData.map(pokemon => <Card pokemon={pokemon} id={pokemon._id} key={pokemon._id} addtofav={addtofav}  
        onClick={() => {
            setSelectedItem(pokemon);
            openModal();           
      }} />)} 

        {selectedItem && 
            <Modal isOpen={isOpenModal} closeModal={closeModal}>
            <img src={selectedItem.largeImg} width="300" alt="img"/>
            <ExternalLink className="read"target="_blank" href={`https://www.pokemon.com/us/pokedex/${selectedItem.name.toLocaleLowerCase()}`}>Read More</ExternalLink>
            {!isInFav && <button className="fav" onClick={() => {onFav()}}>❤︎</button>}
            <button onClick={() => {handleDelete(selectedItem._id)}}>Delete</button>
            </Modal>}
      </div>
   )
};

export default CardList;
