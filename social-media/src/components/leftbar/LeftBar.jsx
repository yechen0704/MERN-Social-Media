import "./leftBar.scss"
import icon from "../../assets/image.png"

const LeftBar = () => {
  return (
    <div className='leftBar'>
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src="https://images.pexels.com/photos/7605189/pexels-photo-7605189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>Chen Ye</span>
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