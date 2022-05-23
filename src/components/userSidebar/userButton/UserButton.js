import styles from './userButton.module.css'


const UserButton = ({ onClick }) => {

  
   return (
   <div className={styles.user_sidebar}>
      
        <button className={styles.sidebarClose} onClick={onClick}>Users</button>
       
   </div>
   )
 };
 
 export default UserButton;
 