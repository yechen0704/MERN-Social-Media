import "./navBar.scss"
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import GridViewIcon from '@mui/icons-material/GridView';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

export const NavBar = () => {

    const {toggle, darkMode} = useContext(DarkModeContext);
    const {currentUser} = useContext(AuthContext);

  return (
    <div className = 'navbar'>
        <div className="left">
            <Link to="/" style={{}}>
                <span>ChenYeSocial</span>
            </Link>

            <HomeIcon />
            {darkMode ? <DarkModeIcon onClick={toggle}/> : <WbSunnyIcon onClick={toggle}/>}
            <GridViewIcon />

            <div className="search">
                <SearchIcon />
                <input type="text" placeholder="Search..."/>
            </div>
        </div>

        <div className="right">
            <PersonIcon />
            <EmailIcon />
            <NotificationsActiveIcon />
            <div className="user">
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
            </div>
        </div>
    </div>
  )
}

export default NavBar