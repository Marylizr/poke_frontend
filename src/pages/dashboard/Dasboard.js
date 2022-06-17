import styles from "./dashboard.module.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { removeSession } from "../../api/auth";
import CardList from "../cardList/cardList";

const Dashboard = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
 
    
  useEffect(() => {
    fetch('http://localhost:3010/users/me')
      .then((response) => {
        if (!response.ok){
          throw new Error("error")
        }
         return response.json()
         .then((json) => {
          setName(json.name);
        })
      })
      .catch(() => {
        removeSession();
        navigate("/login");
      });
    }, [navigate, setName]);


  return(
    <div className={styles.dashboard}>
      
      <div className={styles.content}>
        <h3>Welcome {name.toUpperCase()}</h3>
        <CardList/> 
      </div>
    </div>  
  )
};  


export default Dashboard;
