import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../Online/Online"
import React from 'react'

export default function Rightbar({profile}) {
    const HomeRightBar = () =>{
        return(
            <>
            <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt="" />
                    <span className="birthdayText"><b> pola fost </b> and 3 other friends have bbirht today</span>


                </div>
                <img src="assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                {Users.map(u=>(
                    <Online key={u.id} user = {u} />
                ))}
                </ul>

            </>
        )
    }
    const ProfileRightBar = ()=>{
        return(
        <>
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightBarInfo">
            <div className="rightBarInfoItem">
                <span className="rightBarInfoKey">City:</span>
                <span className="rightBarInfoValue">NewYork</span>
            </div>
            <div className="rightBarInfoItem">
                <span className="rightBarInfoKey">From:</span>
                <span className="rightBarInfoValue">LA</span>
            </div>
            <div className="rightBarInfoItem">
                <span className="rightBarInfoKey">Relationship</span>
                <span className="rightBarInfoValue">Single</span>
            </div>
            <div className="rightBarInfoItem">
                <span className="rightBarInfoKey">Age:</span>
                <span className="rightBarInfoValue">24</span>
            </div>
            
        </div>
        <h4 className="rightBarTitle">User Friends</h4>
        <div className="rightBarFollowings">
            <div className="rightBarFollowing">
                <img src="assets/person/1.jpeg" alt="" className="rightBarFollowingImg" />
                <span className="rightBarFollowingName">John carter</span>
            </div>
            <div className="rightBarFollowing">
                <img src="assets/person/1.jpeg" alt="" className="rightBarFollowingImg" />
                <span className="rightBarFollowingName">John carter</span>
            </div>
            <div className="rightBarFollowing">
                <img src="assets/person/1.jpeg" alt="" className="rightBarFollowingImg" />
                <span className="rightBarFollowingName">John carter</span>
            </div>
            <div className="rightBarFollowing">
                <img src="assets/person/1.jpeg" alt="" className="rightBarFollowingImg" />
                <span className="rightBarFollowingName">John carter</span>
            </div>
            <div className="rightBarFollowing">
                <img src="assets/person/1.jpeg" alt="" className="rightBarFollowingImg" />
                <span className="rightBarFollowingName">John carter</span>
            </div>
            <div className="rightBarFollowing">
                <img src="assets/person/1.jpeg" alt="" className="rightBarFollowingImg" />
                <span className="rightBarFollowingName">John carter</span>
            </div>
            <div className="rightBarFollowing">
                <img src="assets/person/1.jpeg" alt="" className="rightBarFollowingImg" />
                <span className="rightBarFollowingName">John carter</span>
            </div>
            <div className="rightBarFollowing">
                <img src="assets/person/1.jpeg" alt="" className="rightBarFollowingImg" />
                <span className="rightBarFollowingName">John carter</span>
            </div>
            <div className="rightBarFollowing">
                <img src="assets/person/1.jpeg" alt="" className="rightBarFollowingImg" />
                <span className="rightBarFollowingName">John carter</span>
            </div>
            <div className="rightBarFollowing">
                <img src="assets/person/1.jpeg" alt="" className="rightBarFollowingImg" />
                <span className="rightBarFollowingName">John carter</span>
            </div>
        </div>

        </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
               {profile ? <ProfileRightBar / >:<HomeRightBar/>}

            </div>
        </div>
    )
}
