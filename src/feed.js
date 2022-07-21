import React from "react";
import firebase from 'firebase/compat/app';
import './feed.css'
import CreateIcon from "@material-ui/icons/Create";
import InputItems from "./inputitems";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Posts from "./Posts";
import { useState, useEffect } from 'react';
import db from "./firebase";

function Feed(){
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {

        db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map(doc => ({
                key: doc.id,
                data:doc.data()
            })))
        })
    }, [])


    const sendPost = (e) =>{
        e.preventDefault();
        //Database 
        db.collection('posts').add({
            
            name:"user",
            description:"pavan2000.mallidi@gmail.com",
            message:input,
            photoUrl:"",
            timestamp:  firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('');
    }


    return(
        <div className="feed_container">
            <div className="container">
                <div className="input_container">
                    <CreateIcon/>
                    <form>
                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type="submit">Submit</button>
                    </form>

                </div>
                <div className="input-items">
                    <InputItems Icon ={ImageIcon} title="image" color="#70B5F9"/>
                    <InputItems Icon ={SubscriptionsIcon} title="vedio" color="blue"/>
                    <InputItems Icon ={EventNoteIcon} title="event" color="#E7A33E"/>
                    <InputItems Icon ={CalendarViewDayIcon} title="write article" color="#E7A33E"/>
                </div>

            </div>
            {posts.map( ({key, data:{name, description, message, photoUrl}}) =>(
                <Posts
                key={key}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
                />
            ))}
            
            
        </div>
    )
}


export default Feed