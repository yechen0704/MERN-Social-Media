import "./leftBar.scss"
import icon from "../../assets/image.png"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const LeftBar = () => {

  const {currentUser} = useContext(AuthContext);

  return (
    <div className='leftBar'>
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={icon} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={icon} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={icon} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={icon} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={icon} alt="" />
            <span>Memories</span>
          </div>
        </div>

        <hr/>
        
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={icon} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={icon} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={icon} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={icon} alt="" />
            <span>Videos</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar