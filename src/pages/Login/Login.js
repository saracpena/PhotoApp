import { Component } from 'react'
import { Link } from 'react-router-dom'
// CSS
import './Login.css';
// Pages
import { userLogin } from '../../redux/actions/Actions'
import {connect} from 'react-redux'

// Redux Store
// import store from '../store';

class Login extends Component {
    state={
        login:false,
        User: {
            email:'',
            password:'' 
        },
        email:'',
        password:'',
        newUser: false
    };
    
    handleChange = e => {
        this.setState(
            {
            [e.target.name]: e.target.value
            }
        )
    }
    
    onSubmit = e =>{
     e.preventDefault()
        console.log('onSubmit');
                                            //loops over array and returns a new array
        const authenticate = this.props.users.filter(user => this.state.email === user.email && this.state.password === user.password)
        console.log(authenticate);
        if(!authenticate.length) {
            this.props.history.push('/home')
            this.props.LogUser()
        }
    }

    render(){
        return(
            <>
            {/* <LoginHeader /> */}
            <div className='login'>
                <div className='login_container'>
                    <h3>Login</h3>
                </div>
                <form className='login_form' onSubmit={this.onSubmit} >
                    <center>
                        <input type='email' name='email' placeholder="Email"  value={this.state.email} onChange={this.handleChange}></input> <br/>
                    </center>
                    <center>
                        <input type='password' placeholder='Password' name='password' value={this.state.password} onChange={this.handleChange} ></input>
                    </center>
                <div className='login_register'>
                    {/* <Link id='login' type="button" to="/home">Login</Link>&nbsp;&nbsp;&nbsp; */}
                    <center>
                        <button className='login_btn' value='login'>Login</button>
                    </center>
                    <center>
                        <h6>Forgot Password</h6>
                    </center>
                    <center>
                        <hr />
                    </center>
                    <center>
                        <p>Not a member?</p>
                    </center>
                    <center>
                    <Link className='register_btn' type="button" to="/register">Create New Account</Link>
                    </center>
                </div>
                    
                </form> <br/>
                
            </div>
            </>
        )
    }
}

// create a copy of the props to make them accessible for this component
const mapStateToProps = (state) => ({
    // trigger the action - > call the reducer -> reducer will change the state
    users: state.users
  })

  // Adds a prop called "LoginStatus" which is a function that takes in a payload
  // then dispatches payload to the action creator: "login"
  const mapDispatchToProps = (dispatch) => ({
    LoginStatus : item => dispatch(userLogin(item))
  })

// store.dispatch(userLogin(item));

export default connect(mapStateToProps,mapDispatchToProps) (Login)

    // handleChange = e => {
    //     const newLogin = { ...this.state.login };
    //     let val = e.target.value;
    //     console.log(val);
    //     User[e.target.name] = val;
    //     this.setState({
    //       User: newLogin,[e.target.name]: e.target.value  
    //     });
    //   };