import { Component } from 'react'
import { Link } from 'react-router-dom'
// Pages
import Login from '../Login/Login'


class Register extends Component {
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
           console.log(this.props)
           this.props.history.push('/profile')
           this.props.LogUser();
       }
    

    render(){
        return(
            <div className='form'>
            <p>D E L E T E &nbsp;&nbsp;&nbsp; A C C O U N T</p> <br/>
            <Link id='submit' type='button' to="/">Delete Account</Link>
            {/* <button>Submit</button> */}
            <button onClick="deleteAccount()">Submit    </button>
            
        </div>
        )
    }
}


export default Register