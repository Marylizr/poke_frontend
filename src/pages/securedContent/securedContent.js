import {Routes, Route} from "react-router-dom";
import SidebarDashboard from "../../components/sideBar_dashboard/SidebarDashboard";
import Dashboard from "../Dashboard/Dashboard";
import AddPokeWiki from "../addPokeWiki/AddPokeWiki";
import Favs from "../favs/favs";
import styles from "./main.module.css";
import UserSideBar from "../../Components/userSidebar/UserSideBar";
import PrivateRoute from "../../api/auth/privateRoute";


const SecuredContent = () => {

    return(
        <div className = {styles.main}>
               <SidebarDashboard/>
               <Routes>
                  <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                  <Route path="/fav" element={<PrivateRoute><Favs/></PrivateRoute>} />
                  <Route path="/create" element={<AddPokeWiki />} />
               </Routes>
            <UserSideBar />
            
        </div>
    )

}

export default SecuredContent;