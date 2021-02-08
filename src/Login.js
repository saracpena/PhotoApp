import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from './Firebase';
import { login } from './features/userSlice'
import './Login.css'

function Login() {

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

        auth.createUserWithEmailAndPassword(email, password).then(
            (userAuth) => {
              userAuth.user
                .updateProfile({
                 displayName: name,
                 photoURL: profilePic,
              })
              .then(() => {
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
          <input value={name} onChange={e => setName(e.target.value)} placeholder='Full Name' type='email'/>
          <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder='Profile pic URL (optional)' type='email'/>
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type='email'/>
          <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' type='password'/>
          <button type='submit' onClick={loginToApp} >Sign-In</button>
      </form>

      <p>
          Not a member? {' '}
          <span className='login_register' onClick={register}>
            Create an Account</span>
      </p>
    </div>
    
    )
}

export default Login
