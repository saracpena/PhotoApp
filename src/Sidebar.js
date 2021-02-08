import React from 'react'
import './Sidebar.css'
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Sidebar() {
    // access user information
    const user = useSelector(selectUser); 

    // Render JSX in the "recents' section with this function bypassing a need for another component
    const recentItem = (topic) => (
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className='sidebar'>
            <div className='sidebar_top'>
                <img src='https://www.teahub.io/photos/full/13-137497_this-high-quality-free-png-image-without-any.jpg' alt='' />
                {/* if user does not have an image we can render the first initial of their name */}
                <Avatar src={user.photoUrl} className='sidebar_avatar'>{ user?.displayName[0]}</Avatar>
                <h3>{user.displayName}</h3>
                <h5>{user.email}</h5>
            </div>

            <div className='sidebar_stats'>
                <div className='sidebar_stat'>
                    <p>Who viewed you?</p>
                    <p className='sidebar_statNumber'>1.4M</p>
                </div>
                <div className='sidebar_stat'>
                    <p>Views on post</p>
                    <p className='sidebar_statNumber'>1.4M</p>
                </div>
            </div>

            <div className='sidebar_bottom'>
                <p>Recent</p>
                <a href='https://photo-app-clone.web.app/'target="_blank">{recentItem ('PhotoApp')}</a>
                <a href='https://mini-synth.herokuapp.com//'target="_blank">{recentItem ('MiniSynth')}</a>
                <a href='https://www.linkedin.com/in/scristalp/'target="_blank">{recentItem ('LinkedIn Profile')}</a>
                <a href='https://github.com/saracpena'target="_blank">{recentItem ('GitHub')}</a>
            </div>
        </div>
    )
}

export default Sidebar
