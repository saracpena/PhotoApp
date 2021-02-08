import { CallToActionSharp } from '@material-ui/icons';
// CSS
import './Settings.css'
// React Redux
import React from 'react'
import { connect } from 'react-redux'
import { firestore } from 'firebase'

function Settings() {
connect(
    // Map to props
    ({firebase: { auth, profile }}) => ({
        auth,
        profile
    })
)
// export const deleteUser = () => async (
//     dispatch, 
//     getState, 
//     {getFirebase, getFirestore} 
//     => {
//     const firebase = getFirebase();
//     const firestore = getFirestore();

//     try {

//     }catch(err) {
//        dispatch(type: actions.deleteUser)
//     }
// });

// user.delete().then(){
    
// }

    return (
        <div className='updateprofile'>
        <img src='' alt=''/> 
        <p className='heading'>U P D A T E &nbsp; P R O F I L E</p>
        <form className='form'>
            <input  placeholder='Full Name' type='email'/>
            <input placeholder='Profile pic URL (optional)' type='email'/>
            <input  placeholder='Email' type='email'/>
            <input  placeholder='Password' type='password'/>
            <button type='submit' >Delete Account</button>
        </form>
      </div>
    )
}

export default Settings
