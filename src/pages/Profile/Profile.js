import React, { Component } from 'react'

class Profile extends Component {
    state={
        avatar:'',
        name:'',
    }

    render(){

    return ( 
        <div>
            <h1>Header</h1>
        <navbar>
            <h6>Posts</h6>
            <h6>About</h6>
            <h6>Friends</h6>
            <h6>Photos</h6>
            <h6>Settings</h6>
        </navbar>

        </div>
    )}
    }

export default Profile
// class Profile extends Component {
//     state={

//     }

//     render(){
//         return(
//             <div></div>
//         )
//     }
// }
