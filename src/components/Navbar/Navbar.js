import "./Navbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
const Navbar = () => {
    return (
        <div className="navbar d-flex justify-content-between">
            <div className="search-input d-flex justify-content-between border align-items-center br-10px">
                <input type="text" placeholder="search" className="form-control border-0 bg-transparent" />
                <SearchOutlinedIcon />
            </div>
            <div className="icons-section">
                <DarkModeOutlinedIcon/>
            </div>
        </div>
    )
}

export default Navbar;