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
            <div>
            <header>S I G N - U P</header> <br/>
            <form>
                Name: &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type='text'></input> <br/>
                Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='text'></input> <br/>
                Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='password' name='password' value={this.state.password} onChange={this.handleChange}></input><br/>
                Confirm Password:<input type='password' name='password' value={this.state.password} onChange={this.handleChange} ></input>
                <p>(Password must be 8 characters minimum)</p>
            </form> <br/>
            <Link id='submit' type='button' exact path to="/">Submit</Link>
            {/* <button>Submit</button> */}
        </div>
        )
    }
}


export default Register