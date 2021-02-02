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
        console.log(this.props)
        this.props.history.push('/home')
        this.props.LogUser();
    }

    render(){
        return(
            <div className='login-wrapper'>
                <form onSubmit={this.onSubmit} className='login'>
                    <input type='email' name='email' placeholder="Email"  value={this.state.email} onChange={this.handleChange}></input> <br/>
                    <input id='myPW' type='password' placeholder='Password' name='password' value={this.state.password} onChange={this.handleChange} ></input>
                <div className='login-register'>
                    {/* <Link id='login' type="button" to="/home">Login</Link>&nbsp;&nbsp;&nbsp; */}
                    <button id='login' value='login'>Login</button><br/>
                    <Link id='register' type="button" to="/register">Register</Link>
                    &nbsp;&nbsp;<p id='signup'>Not a user? Sign-up!</p>
                    {/* <button id='register' value='newUser'>Register</button> */}
                </div>
                </form> <br/>
                
            </div>
        )
    }
}

// create a copy of the props to make them accessible for this component
const mapStateToProps = (state) => ({
    // trigger the action - > call the reducer -> reducer will change the state
    users: state.users.users
  })

  // Adds a prop called "LoginStatus" which is a function that takes in a payload
  // then dispatches payload to the action creator: "login"
  const mapDispatchToProps = (dispatch) => ({
    LoginStatus : item => dispatch(login(item))
  })

// store.dispatch(userLogin(item));

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