import React from 'react';
import "./sidebar.css";
import { Avatar } from '@material-ui/core';
function Sidebar(){


    const recentITem = (topic) =>(
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>

        </div>
    )
    return(
        <div className='sidebar'>
            <div className='sidebar_top'>
                <img src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg" alt=''></img>
                <Avatar className='sidebar_avatar'></Avatar>
                <h2>Pavan Kalyan Reddy</h2>
                <h4>pavan2000.mallidi@gmail.com</h4>

            </div>
            <div className='sidebar_starts'>
                <div className='sidebar_stat'>
                    <p>who viewed you</p>
                    <p className='sidebar_statNumber'>2312</p>
                </div>
                <div className='sidebar_stat'>
                    <p>who viewed you post</p>
                    <p className='sidebar_statNumber'>8426</p>
                </div>

            </div>
            <div className='sidebar_bottom'>
                <p>Recent</p>
                {recentITem("reactjs")}
                {recentITem("programming")}
                {recentITem("software")}
                {recentITem("design")}
                {recentITem("developer")}
                
            </div>
            
            

        </div>
    )
}
export default Sidebar