import React from 'react'
import './LoginHeader.css';
import { Link } from 'react-router-dom';

function LoginHeader() {
    return (
        <div className='header'>
            <Link className='link' to='/' />
            <img src="https://image.shutterstock.com/image-vector/jazz-trumpet-player-vector-illustration-600w-630191957.jpg" alt='Jazz Social' className='header_logo' />
            <center>
                <h2 className='header_button'>The Jazz Social</h2>
            </center>    
            
        </div>
    )
}

export default LoginHeader
