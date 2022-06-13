import "./sidebar.scss"
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

function Sidebar() {
    const deleteItem = (index) =>{
        localStorage.removeItem(index);
        localStorage.clear();
        auth.signOut();
    }

  return (
    <div className="sidebar">
        <div className="top">
            
            <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">Forica</span>
            </Link>

            </div> 

        <div className="center">
            <ul>

              <p className="title">Main</p>
                <Link to="/" style={{textDecoration:"none"}}>
                <li>

                    <DashboardIcon className="Icon"/>
                    <span>Dashboard</span>
                </li>
                </Link>
                <p className="title">LISTS</p>
                <Link to="/users" style={{textDecoration:"none"}}>
                <li>
                    <SupportAgentIcon className="Icon"/>
                    <span>Customers</span>
                </li>
                </Link>

                <Link to="/Listings" style={{textDecoration:"none"}}>
                <li>
                    <MapsHomeWorkIcon className="Icon"/>
                    <span>Listings</span>
                </li>
                </Link>

                <Link to="/contracts" style={{textDecoration:"none"}}>
                <li>
                    <ReceiptIcon className="Icon"/>
                    <span>Contracts</span>
                </li>
                </Link>

                <p className="title">SHORT CUTS</p>

                <li>
                    <QueryStatsIcon className="Icon"/>
                    <span>Stats</span>
                </li>

                <li>
                    <NotificationsIcon className="Icon"/>
                    <span>Notifications</span>
                </li>

                <Link to="/staff" style={{textDecoration:"none"}}>
                <li>
                    <BadgeIcon className="Icon"/>
                    <span>Staff</span>
                </li>
                </Link>
                <p className="title">SERVICE</p>
                <li>
                    <SettingsIcon className="Icon"/>
                    <span>Settings</span>
                </li>
                
                <li>
                    
                    <LogoutIcon className="Icon"/>
                    <Link to="/Login" style={{textDecoration:"none"}}>
                    <span onClick={() => deleteItem("user")}>Logout</span>
                    </Link>
                    
                </li>
                
            </ul>
        </div>
      
        
    </div>
  )
}

export default Sidebar