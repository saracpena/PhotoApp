import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
// CSS
import './Home.css'


class Home extends Component {
    state={
        avatar:'',
        name:'',
        share:'',
        posts:[]
    }

    logout = () => {
        this.props.LogUser();
        console.log(this.props);
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log("testing");
        this.setState({posts:[...this.state.posts, this.state.share]})
        console.log(this.state.posts);
    }

    handleChange = e => {
        this.setState(
            {
            [e.target.name]: e.target.value
            }
        )
    }

    popularPost = e => {
        let likes = 0; 
        let popPosts;
        this.props.posts.forEach(post => {
            if(likes < post.likes){
                likes = post.likes;
                popPosts = post;//current object we are iterating over
            }
        }) 
        return popPosts
    }

    recentPost = e => {

    }

    render(){
    let popPosts = this.popularPost()
// retrieve user image from logged in user
    return (
    <div className='home-container'>
        <div className='Avatar'>
            <img />
        </div>
        <h2 className='name'>
            Welcome Back, !
        </h2>
        <nav className='navbar'>
            <Link to='/home'><h6>Home</h6></Link>
            <Link to='/Posts'><h6>Posts</h6></Link>
            <Link to='/likes'><h6>Likes</h6></Link>
            <Link to='/settings'><h6>Settings</h6></Link>
           <h6 onClick={this.logout}>Logout</h6>
        </nav>
        <section className='Post-Container'>
            <aside className='About-container'>
                <p>About</p>
            </aside>
            <form className='share_post' onSubmit={this.handleSubmit}>
            <label htmlFor='description' ></label>
            <textarea placeholder='share a post' name='share' value={this.state.share} onChange={this.handleChange} />
            <input type='submit'/>
            </form>
            {this.state.posts.map((post, index) => {
                return (
                    <div key={index} >
                        {post}
                    </div>
                )
            } )}
        </section>
        <section className='user_posts'>
            <p>{popPosts.likes}</p>
            <p>{popPosts.postedDate}</p>
            <img src={popPosts.source} />
            {popPosts.comments.map((comment, index) => {
                return (
                    <div key={index}>
                        {comment.comments}
                    </div>
                )
            })}
        </section>
    </div> 
    )}
    }

// create a copy of the props to make them accessible for this component
const mapStateToProps = (state) => ({
    // trigger the action - > call the reducer -> reducer will change the state
    posts: state.posts
  })

    
export default connect(mapStateToProps)(Home)

//! Render a new welcome message and render name of User.
// i.e. "{ Random new message }" with API? {this.state.name}"
// "Happy Tuesday, Sara", "Happy Holidays, Sara"