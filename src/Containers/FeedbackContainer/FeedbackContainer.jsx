import React, { useState } from 'react';
import axios from 'axios';
import './FeedbackContainer.css'

import Insta from '../../images/instagram-logo.png';
import Twitter from '../../images/twitter-logo.png';

function FeedbackContainer() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }

    const sendMessage = () => {
        if (name === "") {
            alert("No Name");
        } else if (email === "") {
            alert("No Email");
        } else if (message === "") {
            alert("No Message");
        } else {
            var data = {
                name: name,
                email: email,
                subject: subject,
                message: message
            };
    
            console.log(data);

            axios.post('https://ecell-website-backend.onrender.com/postData', data).then(response => {
                console.log(response);
            });
        }
    }

  return (
    <div className='FeedbackContainer'>
        <h1>Get in Touch</h1>
        <h4>Feel free to contact us in case of any queries</h4>

        <form className="message">
            <div className="left-message">
                <input type="text" placeholder='Name' name='name' value={name} onChange={handleNameChange} />
                <input type="email" placeholder='Email' name='email' value={email} onChange={handleEmailChange} />
                <input type="text" placeholder='Subject' name='subject' value={subject} onChange={handleSubjectChange} />
            </div>
            <div className="right-message">
                <textarea cols="30" rows="10" placeholder='Message' name='message' value={message} onChange={handleMessageChange}></textarea>
            </div>
        </form>
        <submit className="send" onClick={sendMessage}>Send Message</submit>

        <div className="footer">
            <a href="https://www.instagram.com/ecelltce/" target='_blank' rel="noreferrer"><img src={Insta} alt="insta" /></a>
            <a href="https://twitter.com/ecelltcemdu" target='_blank' rel="noreferrer"><img src={Twitter} alt="twitter" /></a>
        </div>
    </div>
  )
}

export default FeedbackContainer