import React from 'react';
import './MainContainer.css';

import {Logo} from '../../Components';
import {AboutUsContainer, HomeContainer, EventContainer, QuotesContainer, FeedbackContainer} from '../../Containers';

function MainContainer() {
  return (
    <div className='MainContainer'>
        <div className="navbar">
            <div className="logo">
                <Logo />
            </div>
            <div className="menus">
                <p><a href="#home">Home</a></p>
                <p><a href="#about">About</a></p>
                <p><a href="#events">Events</a></p>
                <p><a href="#contact">Contact</a></p>
            </div>
        </div>
        <section className='home' id='home'>
            <HomeContainer />
        </section>
        <section className='about' id='about'>
            <AboutUsContainer />
        </section>
        <section className='events' id='events'>
            <EventContainer />
        </section>
        <section className='quotes'>
            <QuotesContainer />
        </section>
        <section className='contact' id='contact'>
            <FeedbackContainer />
        </section>
    </div>
  )
}

export default MainContainer