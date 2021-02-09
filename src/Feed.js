import React, { useEffect, useState } from 'react'
// React Animation
import FlipMove from 'react-flip-move'
import './Feed.css'
import InputOption from './InputOption'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import Post from './Post';
// import db from local db
import { db } from './Firebase'
import Firebase from './Firebase'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

// useState = Hook // RE-EXPLAIN 2:20
function Feed() {
 const user = useSelector(selectUser);
// Declaring state: capturing input and posts, for every variable I create using 'State' will come with a set of functions  
// setInput and setPosts changes input and posts using = 'useState'
// thus making the following a hook,
 const [input, setInput] = useState('');
 const [posts, setPosts] = useState([]);
console.log('posts', posts);
 
 //! useEffect is a hook function inside ReactJS that takes another function in its first param
 //! that will "DO" things every time something changes.
 //! What determines WHEN we call this function is we pass an array of properties i.e. all our dependencies. 
 //! So anytime this array changes we run useEffect() line 48
 useEffect(() => {
// importing db from local which was created as a variable in firebase.js
    db.collection('posts')
      .orderBy('timestamp', 'desc')
    //! onSnapshot = a real-time 'listener' connection to the db of the "Posts collection" i.e. stored posts when user creates a new post.
    //! and any time posts changes (deleted/edited/etc) it will gives us a snapShot
      .onSnapshot((snapshot) => 
      //! anytime posts change I will update the state with following,
        setPosts(
        //! in my collection I have 'doc' that I am iterating through and returning an object of id and data
        //! following is directly mapped to my posts line 25 [posts, setPosts function as created here]
        //! useState makes updates
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
        )
    );
}, []);

// preventDefault to keep from refreshing after typing text
 const sendPost = e => {
    e.preventDefault();
    // which are stored in JSON format
    //! I am pushing (w/ the add ()) data collected from user into my db (firestore) through the post we are 'listening' to in line 32
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            // does this 'likes array' actually makes sense here?
            likes:[],
            message: input,
            photoURL: user.photoUrl || '',
            //! timestamp makes it so all posts show up in the same 'timestamp' regardless of timezone/region --'serverTimestamp()
            timestamp: Firebase.firestore.FieldValue.serverTimestamp()
        })
        //! This will CLEAR our input once we've created a post!
        setInput('');
    };

    return <div className='feed'>
        <div className='feed_inputContainer'>
            <div className="feed_input">
                <CreateIcon />
                <form>
                    {/* we must add onChange because line 23 has empty string, thus it is infinitely cycling and it will not allow user to create a post without this functionality*/}
                    <input value={input} onChange={e => setInput(e.target.value)} type='text' placeholder='Share a post'/>
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className='feed_inputOptions'>
                {/* Here I am reusing InputOption component that I created for Header.js  */}
                <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
                <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
                <InputOption Icon={EventNoteIcon} title='Event' color='#70B5F9' />
            </div>
        </div>

        {/* Posts will be rendered here as they come in with an animation 'FlipMove' */}
        <FlipMove>    
        {/* every time I have a post I render it on the browser and I also de-structured the post itself extracting each prop */}
        {posts.map(({id, data: {name, description, likes, message, photoURL}}) => {
         const likeStatus =(likes || []).includes(user.uid);
           return(
           <Post 
                //! KEYS are important when rendering lists. Without them React will re-render existing data while rendering
                //! new data. This way, existing data remains, and the only thing rendering is NEW DATA.
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
        </FlipMove>
        </div>
}

export default Feed
