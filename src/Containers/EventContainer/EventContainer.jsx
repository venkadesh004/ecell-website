import React from 'react'
import './EventContainer.css';

import EventImage from "../../images/EventOne.png";

function EventContainer() {
  return (
    <div className='EventContainer'>
        <h1>Our Events</h1>
        <div className="event">
            <div className="img-cont">
                <img src={EventImage} alt="event-one" className='img-cont-img' />
                <div className='img-bg'></div>
            </div>
            <div className="event-data">
                <h1>Stake'23</h1>
                <p>An event for future entrepreneur’s to show and propose their ideas<br/>to the student investors.<br/><br/>Event Link: <a href='https://ecell-stake.onrender.com/' target='_blank' rel="noreferrer">Stake'23 Website</a></p>
            </div>
        </div>
    </div>
  )
}

export default EventContainer