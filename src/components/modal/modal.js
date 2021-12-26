import React from 'react';
import  './modal.css';



const Modal = ({children, isOpen, closeModal, isInFav=false, addToFav, pokemon}) => {

  return(
    <div className={`modal ${isOpen && "is-open"}`}>
      <div className="modalContainer">
         <button className="modalClose" onClick={closeModal}>X</button>
         {children}  
         {!isInFav && <button onClick={() => addToFav(pokemon)}>❤︎</button>}
      </div>
    </div>
  );
};

export default Modal;
