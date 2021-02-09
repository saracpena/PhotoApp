import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from './Firebase';//config
import { login } from './features/userSlice'
import './Login.css'

function Login() {
  //! creating consts that I will patch into each input field
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    // const [name, setName] = useState(''); for registering

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
          .then(userAuth => {
             dispatch(
               login({
                 email: userAuth.user.email,
                 uid: userAuth.user.uid,
                 displayName: userAuth.user.displayName,
                 photoUrl: userAuth.user.photoURL 
             })
            );
         })
         .catch((error) => alert(error));
    };
    const register = () => {
        if(!name){
            return alert("Please enter full name");
        }
//!importing auth var from firebase.js using a firebase function directly to email and password which will be created in the backend, firebase db
        auth.createUserWithEmailAndPassword(email, password).then(
    //! If successfully creates user, update user profile based on user input
            (userAuth) => {
              userAuth.user
                .updateProfile({
          //! displayName/photoURL are KEYS in Firebase, name/profilePic are local info
                 displayName: name,
                 photoURL: profilePic,
              })
              .then(() => {
        //! dispatch is now pushing the user into Firebase db with Redux hook, useDispatch imported above
                        //! 'login action' from userSlice returns user object of the following,
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic    
                }));
            });
        // function that alerts us if there is any error rendering above information
        }).catch(error => alert(error));
    };
    
    return (
    <div className='login'>
      <img src='https://images.unsplash.com/photo-1525093485273-34834413e1ba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80' alt='Jazz'
        /> 
    
      <form>
          {/* Pulling in my const lines 8-11 to login user */}
          <input value={name} onChange={e => setName(e.target.value)} placeholder='Full Name' type='text'/>
          <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder='Profile pic URL (optional)' type='email'/>
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type='email'/>
          <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' type='password'/>
          <button type='submit' onClick={loginToApp} >Sign-In</button>
      </form>

      <p>
          Not a member? {' '}
          {/* Pulling the const line 31 to create a new user */}
          <span className='login_register' onClick={register}>
            Create an Account</span>
      </p>
    </div>
    
    )
}

export default Login
