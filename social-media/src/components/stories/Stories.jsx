import "./stories.scss";
import { useContext } from "react";
import {AuthContext} from "../../context/authContext";

const Stories = () => {

    const {currentUser} = useContext(AuthContext)

    //Temporary dummy data
    const stories = [
        {
            id:1,
            name:"John Doe",
            img:"https://images.pexels.com/photos/7605189/pexels-photo-7605189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id:2,
            name:"smith Doe",
            img:"https://images.pexels.com/photos/7605189/pexels-photo-7605189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id:3,
            name:"Laura Doe",
            img:"https://images.pexels.com/photos/7605189/pexels-photo-7605189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
    ]

  return (
    <div className="stories">
        <div className="story">
                <img src={currentUser.profilePic} />
                <span>{currentUser.name}</span>
                <button>+</button>
        </div>
        {stories.map(story => (
            <div className="story" key={story.id}>
                <img src={story.img} />
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Stories