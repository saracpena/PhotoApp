import React, { useState, useEffect } from 'react'
// React Animation
import FlipMove from 'react-flip-move'
// CSS
import './Likes.css'

// import db from local db
import Post from './Post'
import { db } from './Firebase'
import Firebase from './Firebase'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function Likes() {

// const user = useSelector(selectUser);
const [posts, setPosts] = useState([]);
const userId = useSelector(selectUser).uid;

useEffect(() => {
    db.collection('posts')
      .where('likes','array-contains', userId)
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => 
        setPosts(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
        )
    );//real time posts collection when posts are add/deleted
}, []);

// Query db firestore of UIDs get all posts that have current users UID in their likes array


    
    return (
        <div className='likes-navlink'>
         <div className='feed_inputContainer'>Some of my Favorite Posts</div>
            <div className="feed_input"></div>
            <FlipMove>
            {posts.map(({id, data: {name, description, likes, message, photoURL}}) => {
            const likeStatus =(likes || []).includes(userId);
            return (
            <Post 
                key={id}
// https://reactjs.org/warnings/special-props.html#:~:text=Most%20props%20on%20a%20JSX,not%20forwarded%20to%20the%20component
                id={id}
                name={name}
                likeStatus={likeStatus}
                description={description}
                likes={likes}
                message={message}
                photoURL={photoURL}
            />)
        })}
            <div className='feed_inputOptions'></div>
        </FlipMove>
        </div>
    )
}

export default Likes
