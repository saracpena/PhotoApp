import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch as RouterSwitch, Route } from 'react-router-dom'
//CSS
import './App.css';
// Components
import Login from '../Login'
import Header from '../Header';
import Sidebar from '../Sidebar';
import Feed from '../Feed'
import Widgets from '../Widgets'
import Likes from '../Likes'
import Settings from '../Settings';
//
import { login, logout, selectUser } from '../features/userSlice';
import { auth } from '../Firebase'



function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch(); 

    useEffect(() => {
//! onAuth() is a firebase () 'listener' that listens to any authentication changes
      auth.onAuthStateChanged((userAuth) => {
        if (userAuth) {
          // then the user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL, 
        })
        );//! Otherwise, the user is logged out
        } else {
          
    //! dispatching reducer from userSlice.js
        dispatch(logout());
      }
    });
    }, []);
    

  return (
    <div className="app">
      <Router>
      <Header />
{/* TERNARY !user ? :Login- ----if there is no user, I want to render the Login page, otherwise render the app */}
      {!user ? (
        <Login />
      ) : (
        <div className='app_body'>
        <Sidebar />  
      <RouterSwitch>
          <Route exact path='/'>
            <Feed />
          </Route>
          <Route path='/Likes'>
            <Likes />
          </Route>
          <Route>
            <Settings />
          </Route>
      </RouterSwitch>   
          <Widgets />
      </div>
      )}
      </Router>
    </div>

  );
}

export default App;
