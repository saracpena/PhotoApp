import React, { forwardRef } from 'react'
// CSS
import './Post.css'
// Components
import InputOption from './InputOption'
import Feed from './Feed'
import LikeButton from './components/LikeButton'
// Icons from Material Icons
import { Avatar } from '@material-ui/core'

import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

// began to destructure prop here and ended up,
const Post = forwardRef(({ id, name , description, message, photoURL, likeStatus }, ref) => {

    return (
    <div ref={ref} className='post'>
        <div className='post_header'>
            <Avatar src={photoURL}>{name[0]}</Avatar>
            <div className='post_info'>
                {/* went from hard coding props to passing props from db */}
                <h2>{name}</h2>
                <p>{description}</p>
            </div>    
        </div> 
        <div className='post_body'>
            <p>{message}</p>
        </div>   

        <div className='post_buttons'>
            {/* Here I am reusing InputOption component that I created for Header.js  */}
            {/* used flex in CSS to render across instead of top to bottom */}
            <LikeButton id={id} likeStatus={likeStatus} />
            <InputOption Icon={ChatIcon} title='Comment' color='gray'/>
            <InputOption Icon={ShareIcon} title='Share' color='gray'/>
            <InputOption Icon={SendIcon} title='Send' color='gray'/>
        </div>    
    </div>
    )
})

export default Post
