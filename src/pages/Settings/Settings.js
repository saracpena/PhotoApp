import { Component } from 'react'
import { Link } from 'react-router-dom'
// Pages
import Login from '../Login/Login'


class Settings extends Component {
    state={
        Name:'',
        Email:'',
        PassWord:''
    }

    handleChange = e => {
        this.setState(
            {
            [e.target.name]: e.target.value
            }
        )
        console.log(this.state);
    }
    deleteAccount = e =>{
        e.preventDefault()
        let confirm = confirm("Permanently Delete Account!")
        let alert;
        if (confirm) {
            alert = "Account Deleted!";
        } else {
            alert = "You canceled action!";
        }
       }
    

    render(){
        return(
            <div className='form'>
            <p>D E L E T E &nbsp;&nbsp;&nbsp; A C C O U N T</p> <br/>
            <Link id='submit' type='button' to="/">Delete Account</Link>
            
            <button onClick="deleteAccount()">Submit</button>
            
        </div>
        )
    }
}


export default Settings