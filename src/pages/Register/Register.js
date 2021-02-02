import { Component } from 'react'
import { Link } from 'react-router-dom'
// Pages
import Login from '../Login/Login'



class Register extends Component {
    state={
        Name:'',
        Email:'',
        PassWord:'',
        ConfirmPW:''
    }

    handleChange = e => {
        this.setState(
            {
            [e.target.name]: e.target.value
            }
        )
        console.log(this.state);
    }
    
    render(){
        return(
            <div className='form'>
            <header>S I G N - U P</header> <br/>
            <form>
                <input type='text' placeholder='First Name'></input> <br/>
                <input type='text' placeholder='Last Name'></input> <br/>
                <input type='email' placeholder='Email'></input> <br/>
                <input type='password' placeholder='Password' name='password' value={this.state.password} onChange={this.handleChange}></input><br/>
                <input type='password' placeholder='Confirm Password' value={this.state.ConfirmPW} onChange={this.handleChange} ></input>
                <p>(Password must be 8 characters minimum)</p>
            </form> <br/>
            <Link id='submit' type='button' to="/">Submit</Link>
            {/* <button>Submit</button> */}
        </div>
        )
    }
}

export default Register