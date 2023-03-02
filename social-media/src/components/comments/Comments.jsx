import { useContext } from "react"
import {AuthContext} from "../../context/authContext"
import "./comments.scss"

const Comments = () => {

    const  {currentUser} = useContext(AuthContext)

    // Temporary data
    const comments = [
        {
            id:1,
            desc:"This is chen's app",
            name:"John ye",
            userId:1,
            profilePicture:"https://images.pexels.com/photos/2028261/pexels-photo-2028261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id:2,
            desc:"This is chen's app",
            name:"John ye",
            userId:2,
            profilePicture:"https://images.pexels.com/photos/2028261/pexels-photo-2028261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
    ]

  return (
    <div className="comments">
        <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder="write a comment"/>
            <button>send</button>
        </div>
        {comments.map((comment)=>(
            <div className="comment">
                <img src={comment.profilePicture} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">1 hour ago</span>
            </div>
        ))}
        </div>
  )
}

export default Comments