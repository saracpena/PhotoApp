import React, { useEffect, useState } from 'react'
// React Animation
import FlipMove from 'react-flip-move'
import './Feed.css'
import InputOption from './InputOption'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
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

 
 //! useEffect hook allows us to fire off code when the Feed component loads. 
 //! It also allows us to fire off whatever the component re-renders if we don't pass a second argument.
 //! If we pass on a blank dependency like [empty array] in line 41, then it will fire off once the feed component loads but it will never fire off again after that 
 useEffect(() => {
    db.collection('posts')
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

// addLike(() => {}

    // prevent refreshing
    const sendPost = e => {
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            likes:[],
            message: input,
            photoURL: user.photoUrl || '',
            timestamp: Firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('');
    };

    return <div className='feed'>
        <div className='feed_inputContainer'>
            <div className="feed_input">
                <CreateIcon />
                <form>
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

        {/* Posts will be rendered here as they come in */}
        <FlipMove>
        {/* every time I have a post I render it on the browser */}
        {posts.map(({id, data: {name, description, likes, message, photoURL}}) => (
            <Post 
                key={id}
                name={name}
                description={description}
                likes={likes}
                message={message}
                photoURL={photoURL}
            />
        ))}
        </FlipMove>
        </div>
}

export default Feed
