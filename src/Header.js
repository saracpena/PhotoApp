import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// CSS
import './Header.css'
// MUI
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';
// Firebase
import { auth } from './Firebase';
import { logout } from './features/userSlice';


function Header() { 
    const dispatch = useDispatch();

    const logoutOfApp = () => {
      dispatch(logout())
      auth.signOut();
    }

    return (
        <div className='header'>

            <div className='header_left'>
                <img src='https://images.unsplash.com/photo-1555552855-44331d696762?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80' alt=''/>

                <div className="header_search">
                    <SearchIcon />
                    <input placeholder='Search' type='text' />
                </div>
                
            </div>
            <div className='header_right'>
                <NavLink to='/'>
                    <HeaderOption Icon={HomeIcon} title='Home' />
                </NavLink>
                <NavLink to='/Likes'>
                    <HeaderOption Icon={FavoriteBorderIcon} title='My Likes'/>
                </NavLink>
                <NavLink to='/Settings'>
                <HeaderOption Icon={SettingsIcon} title='Settings'/>
                </NavLink>
                {/* <HeaderOption Icon={NotificationsIcon} title='Notifications'/> */}
                <HeaderOption avatar={true} title='Logout' onClick={logoutOfApp}/>
            </div>

        </div>
    );
}

export default Header
