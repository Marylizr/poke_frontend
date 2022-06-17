import { useState } from 'react';
import style from '../buttonRandom/buttonRandom.module.css'
import { useEffect } from 'react';


const ButtonRandom = ({onRandom}) => {
 
   const [data, setData] = useState();

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
    }, [setData]);

    return(
        <div>
            <button className={style.random} 
            onClick={() => onRandom(data[Math.floor(Math.random() * 40) ])}>Go Random</button>
        </div>
    )
}

export default ButtonRandom;