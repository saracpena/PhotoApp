import { Component } from 'react'
import { Link } from 'react-router-dom'
// CSS
import './Register.css';
// Pages
import Login from '../Login/Login'



class Register extends Component {
    state={
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        verifypassword:''
    }

    handleChange = e => {
        this.setState(
            {
            [e.target.name]: e.target.value
            }
        )
    }
    
    render(){
        return(
            <div className='register'>
            <div className='register_container'>
                <header>Create Account</header> <br/>
            </div>
            <form>
                <center>
                <input type='text' name='firstname' placeholder='First Name'></input>
                </center>
                <center>
                <input type='text' name='lastname' placeholder='Last Name'></input>
                </center>
                <center>
                <input type='email' name='email' placeholder='Email'></input>
                </center>
                <center>
                <input type='password' placeholder='Password' name='password' value={this.state.password} onChange={this.handleChange}></input>
                </center>
                <center>
                <input type='password' name='verifypassword' placeholder='Verify Password' value={this.state.Verify} onChange={this.handleChange} ></input>
                </center>
                <center>
                <p>(Password must be 8 characters minimum)</p>
                </center>
            </form> <br/>
            <center>
                <Link className='register_btn' type='button' to="/">Submit</Link>
                {/* <button>Submit</button> */}
            </center>
        </div>
        )
    }
}

export default Register