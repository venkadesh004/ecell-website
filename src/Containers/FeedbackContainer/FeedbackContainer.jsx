import React from 'react'
import './FeedbackContainer.css'

import Insta from '../../images/instagram-logo.png';
import Twitter from '../../images/twitter-logo.png';

function FeedbackContainer() {
  return (
    <div className='FeedbackContainer'>
        <h1>Get in Touch</h1>
        <h4>Feel free to contact us in case of any queries</h4>

        <form className="message">
            <div className="left-message">
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <input type="text" placeholder='Subject' />
            </div>
            <div className="right-message">
                <textarea cols="30" rows="10" placeholder='Message'></textarea>
            </div>
        </form>
        <submit className="send">Send Message</submit>


        <div className="footer">
            <a href="https://www.instagram.com/ecelltce/" target='_blank' rel="noreferrer"><img src={Insta} alt="insta" /></a>
            <a href="https://twitter.com/ecelltcemdu" target='_blank' rel="noreferrer"><img src={Twitter} alt="twitter" /></a>
        </div>
    </div>
  )
}

export default FeedbackContainer