import "./post.scss"

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TextsmsIcon from '@mui/icons-material/Textsms';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import Comments from "../comments/Comments";
import { Link } from "react-router-dom";
import { useState } from "react";

const Post = ({post}) => {

    const [commentOpen, setCommentOpen] = useState(false)

    // Temporary
    const liked = false;

    return (
        <div className="post">
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilePic}/>
                        <div className="details">
                            <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color:"inherit"}}>
                                <span className="name">{post.name}</span>
                            </Link>
                            <span className="date">1 min ago</span>
                        </div>
                    </div>
                    <MoreHorizIcon/>
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.img} />
                </div>
                <div className="info">
                    <div className="item">
                        {liked? <FavoriteSharpIcon/> : <FavoriteBorderIcon/>}
                        12 Likes
                    </div>
                    <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
                        <TextsmsIcon/>
                        12 Comments
                    </div>
                    <div className="item">
                        <ShareIcon/>
                        share
                    </div>
                </div>
                {commentOpen && <Comments/>}
            </div>
        </div>
    )
}

export default Post