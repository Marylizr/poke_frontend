import React from 'react';
import styles from '../pagination/paginator.module.css';


const Paginator = ({ handleOnClick, currentPage }) => {

   
   
   return (
      <div className={styles.paginator}>
         <ul>
            <li
               onClick={() => {
               if (currentPage > 1) {
                  handleOnClick(currentPage - 1);
               }
               }}
            >{'◀︎'}</li>
            <li onClick={() => handleOnClick(1)}>1</li>
            <li onClick={() => handleOnClick(2)}>2</li>
            <li onClick={() => handleOnClick(3)}>3</li>
            <li onClick={() => handleOnClick(4)}>4</li>
            <li onClick={() => handleOnClick(5)}>5</li>
            <li onClick={() => handleOnClick(6)}>6</li>
            <li onClick={() => handleOnClick(7)}>7</li>
            <li
               onClick={() => {
               if (currentPage < 7) {
                  handleOnClick(currentPage + 1);
               }
               }}
            >{'▶︎'}</li>
         </ul>
      </div>
 );} 

export default Paginator;