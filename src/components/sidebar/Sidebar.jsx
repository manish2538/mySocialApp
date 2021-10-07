import "./sidebar.css"
import { RssFeed , Chat ,HelpOutline , WorkOutline , Event , School ,Bookmark} from "@material-ui/icons"
import React from 'react'
// import {Friends} from "../Friends/Friends"
import {Users} from "../../dummyData"
import Friends from "../Friends/Friends"


export default function Sidebar() {
    return (
        <div className = "sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className = "sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className = "sidebarIcon"/>
                        <span className="sidebarListItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className = "sidebarIcon"/>
                        <span className="sidebarListItemText">Bookmark</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className = "sidebarIcon"/>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className = "sidebarIcon"/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className = "sidebarIcon"/>
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className = "sidebarIcon"/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">

                    {Users.map(u=>(
                        <Friends key = {u.id} user = {u}/>
                    ))

                    }

                       
                    
                </ul>
            </div>
        </div>
    )
}
