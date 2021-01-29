import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Pictures from '../../components/pictures/Pictures'

class Profile extends Component {
    state={
        avatar:'',
        name:'',
    }


    logout = () => {
        this.props.LogUser();
        console.log(this.props);
    }

    render(){

    return ( 
        <div className='header'>
            <h1>Welcome Back, Sara!</h1>
        <nav className='navbar'>
            <h6>Posts</h6>
            <h6>About</h6>
            <h6>Friends</h6>
            <Link to='/photos'><h6>Photos</h6></Link>
            <h6>Settings</h6>
        </nav>
        <nav className='logout-link'>
        {/* <Link id='logout' type='button' exact path to="/">logout</Link> */}
        <button onClick={this.logout}>logout</button>
        </nav>
        </div>
    )}
    }

export default Profile

//! Render a new welcome message and render name of User.
// i.e. "{ Random new message }" with API? {this.state.name}"
// "Happy Tuesday, Sara", "Happy Holidays, Sara"