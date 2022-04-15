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


function Sidebar() {
   
  return (
    <div className="sidebar">
        <div className="top">

            <span className="logo">Forica</span>
            
            </div>
            
        <div className="center">
            <ul>

                <p className="title">Main</p>
                <li>
                    <DashboardIcon className="Icon"/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>

                <li>
                    <SupportAgentIcon className="Icon"/>
                    <span>Customers</span>
                </li>

                <li>
                    <MapsHomeWorkIcon className="Icon"/>
                    <span>Listings</span>
                </li>

                <li>
                    <ReceiptIcon className="Icon"/>
                    <span>Contracts</span>
                </li>

                <p className="title">SHORT CUTS</p>

                <li>
                    <QueryStatsIcon className="Icon"/>
                    <span>Stats</span>
                </li>

                <li>
                    <NotificationsIcon className="Icon"/>
                    <span>Notifications</span>
                </li>

                <li>
                    <BadgeIcon className="Icon"/>
                    <span>Staff</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <SettingsIcon className="Icon"/>
                    <span>Settings</span>
                </li>

                <li>
                    <LogoutIcon className="Icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">

        <div
          className="colorOption"
         
        ></div>
        <div
          className="colorOption"
         
        ></div>

        </div>
        
    </div>
  )
}

export default Sidebar