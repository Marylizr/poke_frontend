import React from 'react';
import  './modal.css';


const Modal = ({children, isOpen, closeModal, addToFav}) => {

  return(
    <div addToFav={addToFav} className={`modal ${isOpen && "is-open"}`}>
      <div className="modalContainer">
         <button className="modalClose" onClick={closeModal}>X</button>
         {children }  
      </div>
    </div>
  );
};

export default Modal;
