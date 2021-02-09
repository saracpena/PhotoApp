import { ColorizeSharp } from '@material-ui/icons';
import React, { useState } from 'react'
import InputOption from '../InputOption'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import firebase from '../Firebase'
import { db } from '../Firebase'
import { auth } from '../Firebase';

function LikeButton({ id, likeStatus }){
    
const [likes, setLikes] = useState(likeStatus)
const userId = useSelector(selectUser).uid;
console.log('In like btn', likeStatus);

const toggleLike = () => {
    console.log('toggleLike');
    console.log('AddRemoveLike', userId);
    console.log(id);
const likedPost = db.collection('posts').doc(id);
    if(!likes){
        likedPost.update({
        likes: firebase.firestore.FieldValue.arrayUnion(userId)
        })
    console.log();
    }else {
        likedPost.update({
        likes: firebase.firestore.FieldValue.arrayRemove(userId)
        })
    }
console.log(likedPost);
    setLikes(!likes)
}

const color = likes ?'blue':'grey';

       return (
            <div className='like-btn' onClick={toggleLike}> 
                <InputOption Icon={ThumbUpAltIcon} title='Like' color={color}/> 
            </div>
          ) 
    }
export default LikeButton
