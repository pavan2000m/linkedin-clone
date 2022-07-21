import { Avatar } from "@material-ui/core";
import React from "react";
import './NavContents.css';



function NavContents({Icon,title,avatar,onClick}){
    return (<div className="navContents_container">
            {Icon && <Icon/> }
            {avatar && <Avatar onClick={onClick} src="" className="avatar"/>}
            <h3>{title}</h3>
         </div>);
}
export default NavContents;