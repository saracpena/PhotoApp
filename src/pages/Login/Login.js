import React, { Component } from 'react'
// Routing
import { Route, Switch } from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import { Redirect } from "react-router-dom";
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

    // handleChange = e => {
    //     const newLogin = { ...this.state.login };
    //     let val = e.target.value;
    //     console.log(val);
    //     User[e.target.name] = val;
    //     this.setState({
    //       User: newLogin,[e.target.name]: e.target.value  
    //     });
    //   };

    Password = () => {
    const pw = document.getElementById("myPW");
    if (pw.type === "password") {
        pw.type = "text";
        } else {
        pw.type = "password";
        }
    }

    render(){
        return(
            <div className='login-Wrapper'>
                <form className='login'>
                    Email: <input type='text' name='email'  value={this.state.email} onChange={this.handleChange}></input> <br/>
                    Password: <input id='myPW' type='password' name='password' value={this.state.password} onChange={this.handleChange} ></input>
                </form> <br/>
                <div>
                    <button value='login'>Login</button>
                    <button value='newUser'>Register</button>
                </div>
            </div>
        )
    }
}

export default Login