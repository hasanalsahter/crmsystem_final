import "./settings.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import ReceiptIcon from '@mui/icons-material/Receipt';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BadgeIcon from '@mui/icons-material/Badge';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";
import { auth } from "../../firebease";
import Navbar from "../../components/navbar/Navbar"
import Profile from "../../components/profile/Profile"
import Sidebar from "../../components/sidebar/Sidebar"



function Settings() {
 

    return(


        <div className="Settings">
            <Sidebar />
            <div className="SettingsContiner">
            <Navbar />


            <div className="profile"> <Profile /></div>
        </div>


        
   
    </div>

);
};
export default Settings
  