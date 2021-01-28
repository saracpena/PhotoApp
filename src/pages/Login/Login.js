import { Component } from 'react'
import { Link } from 'react-router-dom' 


class Login extends Component {
    state={
        email:'',
        password:''
    }

    handleChange = (e) => {
        this.setState(
            {
            [e.target.name]: e.target.value
            }
        )
        console.log(this.state);
    }
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
            <Link to='/profile'>Login</Link>
                <form className='login'>
                    Email: <input type='text' name='email'  value={this.state.email} onChange={this.handleChange}></input> <br/>
                    Password: <input id='myPW' type='password' name='password' value={this.state.password} onChange={this.handleChange} ></input>
                </form> <br/>
                <div>
                    <button>Login</button>
                    <button>Submit</button>
                </div>
            </div>
        )
    }
}


export default Login