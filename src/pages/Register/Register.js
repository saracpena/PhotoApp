import { Component } from 'react'


class Register extends Component {
    state={
        Name:'',
        Email:'',
        PassWord:'',
        ConfirmPW:''
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
            <header>W E L C O M E &nbsp;&nbsp;&nbsp; T O &nbsp;&nbsp;&nbsp; S W I P E &nbsp;&nbsp;&nbsp; R I G H T</header>
            <form>
                Name: <input type='text'></input> <br/>
                Email: <input type='text'></input> <br/>
                Password: <input type='password' value={this.state.PassWord} id='myPW'></input> <br/>
                Confirm Password: <input type='password' value={this.state.PassWord} id='myPW'></input>
                <p>Password must be 8 characters minimum</p>
            </form> <br/>
            <button>Submit</button>
        </div>
        )
    }
}


export default Register