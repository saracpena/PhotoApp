import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch as RouterSwitch, Route } from 'react-router-dom'

import './App.css';
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
import { Switch } from '@material-ui/core';


function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch(); 

    useEffect(() => {
      auth.onAuthStateChanged((userAuth) => {
        if (userAuth) {
          // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL, 
        })
        );
        } else {
          // user is logged out
        dispatch(logout());
      }
    });
    }, []);
    

  return (
    <div className="app">
      <Router>
      <Header />
{/* if there is no user render Login otherwise render the app */}
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
