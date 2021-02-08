import { ColorizeSharp } from '@material-ui/icons';
import React, { useState } from 'react'
import InputOption from '../InputOption'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function LikeButton(){
    
const [likes, setLikes] = useState(false)
const userId = useSelector(selectUser).uid;

const toggleLike = () => {
    console.log('toggleLike');
    AddRemoveLike();
    setLikes(!likes)
}

const AddRemoveLike = () => {
    console.log('AddRemoveLike', userId);
}

const color = likes ?'blue':'grey';
       return (
            <div className='like-btn' onClick={toggleLike}> 
                <InputOption Icon={ThumbUpAltIcon} title='Like' color={color}/> 
            </div>
          ) 
    }
export default LikeButton
