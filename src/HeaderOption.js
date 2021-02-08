import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@material-ui/core'
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';

function HeaderOption({avatar, Icon, title, onClick}) {
    
    const user = useSelector(selectUser); 

    return (
        <div onClick={onClick} className='headerOption'>
            {/* If I pass in an Icon only then should I render the <Icon/> itself as a component  */}
            {Icon && <Icon className='headerOption_icon' />}
            {/* If I pass in an avatar only then should I render the <Avatar/> itself as a component  */}
            {avatar && ( 
                                                // !
            <Avatar className='headerOption_icon' src={user?.photoUrl}>{user?.displayName[0]}</Avatar>)}
            <h3 className='headerOption_title'>{title}</h3>
        </div>
    );
}

export default HeaderOption
// pass an icon and text to header icons
// props=properties=allows us to reuse HeaderOption
// allows me to customize certain parts of that component over and over