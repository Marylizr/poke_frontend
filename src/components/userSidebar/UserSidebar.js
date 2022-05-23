import styles from './userSidebar.module.css'
import { useToggle } from '../../hooks/useToggle';
import ToggleBar from '../userSidebar/toggleMenu/ToggleMenu';
import UserButton from '../userSidebar/userButton/UserButton';

const UserSideBar = () => {
  const [isToggle, openUsersidebar, closeUsersidebar] = useToggle(false);

  const onToggle= () =>{
    if(isToggle===false){
       openUsersidebar();
    } else {
      closeUsersidebar();
    }  
 }

  return (
  <div className={styles.user_sidebar}>
     <UserButton onClick={() => {
       onToggle();
     }}/>

     <ToggleBar isToggle={isToggle} openUsersidebar={openUsersidebar} closeUsersidebar={closeUsersidebar}/>
  </div>
  )
};

export default UserSideBar;