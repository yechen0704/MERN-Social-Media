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

export const NavBar = () => {
  return (
    <div className = 'navbar'>
        <div className="left">
            <Link to="/" style={{}}>
                <span>ChenYeSocial</span>
            </Link>

            <HomeIcon />
            <DarkModeIcon />
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
                <img src="https://images.pexels.com/photos/7605189/pexels-photo-7605189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <span>Chen Ye</span>
            </div>
        </div>
    </div>
  )
}

export default NavBar