import { Component } from 'react'
import { Link } from 'react-router-dom'
// Page
import Register from '../Register/Register'

// Redux Store
// import store from '../store';

class Login extends Component {
    state={
        login:false,
        User: {
            email:'',
            password:'' 
        },
        newUser: false
    };

    handleChange = e => {
        this.setState(
            {
            [e.target.name]: e.target.value
            }
        )
        console.log(this.state);
    }
    
    onSubmit = e =>{
     e.preventDefault()
    

    }

    render(){
        return(
            <div className='login-wrapper'>
                <form onSubmit={this.onSubmit} className='login'>
                    Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='email' name='email'  value={this.state.email} onChange={this.handleChange}></input> <br/>
                    Password: <input id='myPW' type='password' name='password' value={this.state.password} onChange={this.handleChange} ></input>
                </form> <br/>
                <div className='login-register'>
                    {/* <Link id='login' type="button" to="/profile">Login</Link>&nbsp;&nbsp;&nbsp; */}
                    <button id='login' value='login'>Login</button>
                    {/* <Link id='register' type="button" to="/register">Register</Link> */}
                    <button id='register' value='newUser'>Register</button>
                </div>
            </div>
        )
    }
}

export default Login

    // handleChange = e => {
    //     const newLogin = { ...this.state.login };
    //     let val = e.target.value;
    //     console.log(val);
    //     User[e.target.name] = val;
    //     this.setState({
    //       User: newLogin,[e.target.name]: e.target.value  
    //     });
    //   };