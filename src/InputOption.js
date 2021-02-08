import React from 'react'
import './InputOption.css'

// Decided to De-structure properties vs props.Icon etc.
function InputOption({Icon, title, color}) {

    return (
    <div  className='inputOption'>
        {/* inline styling, we will pass this prop to Feed.js Icons  */}
        {/* i.e. <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' /> */}
        <Icon style={{color:color}} />
        <h4>{title}</h4>
    </div>
    );
}
//inputOption on post text box, Photo, Video, Event, Write Article to be imported into Feed.js
export default InputOption