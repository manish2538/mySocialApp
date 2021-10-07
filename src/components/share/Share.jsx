import "./share.css"
import { PermMedia , Label , EmojiEmotions  , Room} from "@material-ui/icons"
import React from 'react'

export default function Share() {
    return (
       <div className="share">
           <div className="shareWrapper">
               <div className="shareTop">
                   <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />
                    <input placeholder = "What's in your mind ? " className="shareInput" />            
               </div>
               <hr className="shareHr" />
               <div className="shareBottom">
                   <div className="shareOptions">
                       <div className="shareOption">
                           <PermMedia htmlColor = "violet" className="shareIcon"/>
                           <span className="shareOptionText">Photo or Video</span>
                           
                       </div>
                       <div className="shareOption">
                           <Label htmlColor = "black" className="shareIcon"/>
                           <span className="shareOptionText">Tag</span>
                           
                       </div>
                       <div className="shareOption">
                           <EmojiEmotions htmlColor = "gold" className="shareIcon"/>
                           <span className="shareOptionText">Feelings</span>
                           
                       </div>
                       <div className="shareOption">
                           <Room htmlColor = "blue" className="shareIcon"/>
                           <span className="shareOptionText">Location</span>
                           
                       </div>
                   </div>
                   <button className="shareButton">Share</button>
               </div>
           </div>
       </div>
    )
}
