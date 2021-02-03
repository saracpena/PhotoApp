import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Login from '../Login/Login'
// import Pictures from '../../Pictures'
// import Photos from '../../components/pictures/Pictures'

class Home extends Component {
    state={
        avatar:'',
        name:'',
    }


    logout = () => {
        this.props.LogUser();
        console.log(this.props);
    }

    


    render(){

// retrieve user image from logged in user

    return (
    <div className='home-container'>
        <div className='Avatar'>
            <img />
        </div>
        <h2 className='name'>
            <h1>Welcome Back, !</h1>
        </h2>
        <nav className='navbar'>
            <Link to='/home'><h6>Home</h6></Link>
            <Link to='/posts'><h6>Posts</h6></Link>
            <Link to='/photos'><h6>Likes</h6></Link>
            <Link to='/settings'><h6>Settings</h6></Link>
           <h6 onClick={this.logout}>Logout</h6>
        </nav>
        {/* <nav className='logout-link'> */}
        {/* <Link id='logout' type='button' exact path to="/">logout</Link> */}
        {/* <button onClick={this.logout}>logout</button>
        </nav> */}

        {/* <div className='container'> */}
            {/* <Route exact path to='/photos' render={(props)} => <Photos {...this.props}/>
        
            </Route> */}
        {/* </div> */}
        <section className='Post-Container'>
            <aside className='About-container'>
                <p>About</p>
            </aside>
            <form onSubmit={this.handleSubmit}>
            <label htmlFor='description' ></label>
            <textarea placeholder='share a post' value={this.state.description} onChange={this.handleChange} id='description' />
            <input type='submit'/>
            </form>
        </section>
    </div> 
    )}
    }

export default Home

//! Render a new welcome message and render name of User.
// i.e. "{ Random new message }" with API? {this.state.name}"
// "Happy Tuesday, Sara", "Happy Holidays, Sara"