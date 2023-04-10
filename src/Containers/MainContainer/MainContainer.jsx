import React from 'react';
import './MainContainer.css';

import {Logo} from '../../Components';
import {HomeContainer} from '../../Containers';

function MainContainer() {
  return (
    <div className='MainContainer'>
        <section className="navbar">
            <div className="logo">
                <Logo />
            </div>
            <div className="menus">
                <p><a href="home">Home</a></p>
                <p><a href="about">About</a></p>
                <p><a href="events">Events</a></p>
                <p><a href="contact">Contact</a></p>
            </div>
        </section>
        <section className='home'>
            <HomeContainer />
        </section>
        <section className='about'></section>
        <section className='events'></section>
        <section className='quotes'></section>
        <section className='contact'></section>
    </div>
  )
}

export default MainContainer