import React from "react";
import "./Nav.css";
import SearchIcon from "@material-ui/icons/Search";
import NavContents from "./NavContents";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";



function Nav(){
    const dispatch= useDispatch()
    const logOutOfApp =() =>{
        dispatch(logout())
        auth.signOut()
    }
    return(
        <div className='nav_container'>
            <div className="nav_left">
                <img src="https://cdn.icon-icons.com/icons2/2201/PNG/512/linkedin_logo_square_icon_134016.png" alt=" "></img>
                <div className="search_box">
                    <SearchIcon/>
                    <input type="text" placeholder="Search" />
                </div> 
                
            </div>
            <div className='nav_right'>
               <NavContents Icon={HomeIcon}title="Home"/>
               <NavContents Icon={SupervisorAccountIcon} title="My Network"/>
               <NavContents Icon={BusinessCenterIcon} title="jobs"/>
               <NavContents Icon={ChatIcon} title="messaging"/>
               <NavContents Icon={NotificationsIcon} title="Notfications"/>
               <NavContents avatar onClick={logOutOfApp} title="me"/>

            </div>

        </div>
    )
}
export default Nav;
