import React from 'react'
import { MoreVert } from '@material-ui/icons'
import "./post.css"
import {Users} from "../../dummyData"
import { useState } from 'react'

export default function Post({post}) {
    // console.log(post);
    const [like,setLike] = useState(post.like); 
    const [islike,setIsLike] = useState(false); 
    const likeHandler = () => {
        if(like>0){
        setLike(islike?like-1:like+1);
        setIsLike(!islike);
        }

    }
    
    
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">

                    <div className="postTopLeft">

                        <img src={Users.filter(u=>u.id===post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                        <span className="postUsername">{Users.filter(u=>u.id===post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img  className = "postImg"src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets/like.png" onClick = {likeHandler} className = "likeIcon" alt="" />
                        <img src="assets/heart.png" onClick = {likeHandler} alt="" className="likeIcon" />
                        <span className="postLikeCounter">{like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>

                </div>
            </div>
        </div>
    )
}
