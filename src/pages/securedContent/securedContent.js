import {Routes, Route} from "react-router-dom";
import SidebarDashboard from "../../components/sideBar_dashboard/SidebarDashboard";
import Dashboard from "../dashboard/Dasboard";
import AddPokeWiki from "../addPokeWiki/AddPokeWiki";
import Favs from "../favs/favs";
import styles from "./securedContent.module.css";
import PrivateRoute from "../../api/auth/privateRoute";


const SecuredContent = () => {

    return(
        <div className = {styles.main}>
               <SidebarDashboard/>
               <Routes>
                  <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                  <Route path="/fav" element={<PrivateRoute><Favs/></PrivateRoute>} />
                  <Route path="/createPokeWiki" element={<PrivateRoute><AddPokeWiki /></PrivateRoute>} />
               </Routes>  
        </div>
    )

}

export default SecuredContent;