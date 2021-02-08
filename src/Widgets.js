import React from 'react'
// CSS
import './Widgets.css'
// Icons from Material.ui
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets_article'>
            <div className='widgets_articleLeft'>
                <FiberManualRecordIcon />
            </div>

            <div className='widgets_articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className='widgets_header'>
                <h2>Venues</h2>
                <InfoIcon />
            </div>
            {newsArticle('Saras First React', 'Top news')}
            {newsArticle('The Blue Note', 'Top news')}
            {newsArticle('Carnegie Hall', 'Top news')}
        </div>
    )
}

export default Widgets
