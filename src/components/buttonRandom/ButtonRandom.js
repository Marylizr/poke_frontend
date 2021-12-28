import styles from '../buttonRandom/buttonRandom.module.css'
import pokemons from '../../assets/response.json'

const ButtonRandom = ({ setGoRandom }) => {
 
   return(
       <div>
           <button className={styles.random} 
           onClick={() => setGoRandom(pokemons[Math.floor(Math.random() * 50) ])}>PokeWiki of the day</button>
       </div>
   )
}

export default ButtonRandom;
