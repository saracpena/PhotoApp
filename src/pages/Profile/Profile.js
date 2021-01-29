import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Profile extends Component {
    state={
        avatar:'',
        name:'',
    }



    render(){

    return ( 
        <div className='header'>
            <h1>Welcome Back, Sara!</h1>
        <navbar className='navbar'>
            <h6>Posts |</h6>
            <h6>About |</h6>
            <h6>Friends |</h6>
            <h6>Photos |</h6>
            <h6>Settings </h6>
        </navbar>
        <navbar className='logout'>
        <Link type='button' exact path to="/">logout</Link>
        </navbar>
        </div>
    )}
    }

export default Profile

//! Render a new welcome message and render name of User.
// i.e. "{ Random new message }" with API? {this.state.name}"
// "Happy Tuesday, Sara", "Happy Holidays, Sara"