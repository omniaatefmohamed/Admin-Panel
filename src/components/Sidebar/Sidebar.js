import "./Sidebar.scss";
import GridViewIcon from '@mui/icons-material/GridView';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import StackedBarChartOutlinedIcon from '@mui/icons-material/StackedBarChartOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CoPresentOutlinedIcon from '@mui/icons-material/CoPresentOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <p>Square Brackets</p>
                <hr />
            </div>
            <div className="menu-details">
                <p className="title">Main</p>
                <a href="#"><GridViewIcon className="mui-icon" /> Dashboard</a>
                <p className="title">Lists</p>
                <a href="#"><Person2OutlinedIcon className="mui-icon" /> users</a>
                <a href="#"><ProductionQuantityLimitsOutlinedIcon className="mui-icon" /> Products</a>
                <a href="#"><CreditCardOutlinedIcon className="mui-icon" /> orders</a>
                <a href="#"><LocalShippingOutlinedIcon className="mui-icon" /> Delivery</a>
                <p className="title">Useful</p>
                <a href="#"><StackedBarChartOutlinedIcon className="mui-icon" /> States</a>
                <a href="#"><NotificationsOutlinedIcon className="mui-icon" /> Notification</a>
                <p className="title">Services</p>
                <a href="#"><MonitorHeartOutlinedIcon className="mui-icon" /> System Health</a>
                <a href="#"><PsychologyOutlinedIcon className="mui-icon" /> Logs</a>
                <a href="#"><SettingsOutlinedIcon className="mui-icon" /> Settings</a>
                <p className="title">User</p>
                <a href="#"><CoPresentOutlinedIcon className="mui-icon" /> Profile </a>
                <a href="#"><LogoutOutlinedIcon className="mui-icon" /> Logout</a>
            </div>
            <div>
                <p className="title"> Color Theme</p>
                <div className="color-option">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;