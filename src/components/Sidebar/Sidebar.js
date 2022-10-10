import "./Sidebar.scss";
import GridViewIcon from '@mui/icons-material/GridView';
const Sidebar = () => {
    return (
        <div className="sidebar">
                <div className="logo">
                    square brackets
                </div>
                <div className="menu-details">
                    <ul>
                        <li><GridViewIcon/>Dashboard</li>
                        <li><GridViewIcon/>Dashboard</li>
                        <li><GridViewIcon/>Dashboard</li>
                        <li><GridViewIcon/>Dashboard</li>
                    </ul>
                </div>
                <div className="color-option">
colors
                </div>
        </div>
    )
}

export default Sidebar;