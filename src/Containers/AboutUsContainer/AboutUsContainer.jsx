import React from 'react'
import './AboutUsContainer.css';

import PageTwo from "../../images/PageTwoSide.png";
import TCE from "../../images/tce-logo.png";
import Ecell from "../../images/ecell-logo.png";

function AboutUsContainer() {
  return (
    <div className='AboutUsContainer'>
      <div className="left-col-about">
        <img src={PageTwo} alt="Side_Image" />
      </div>
      <div className='right-col-about'>
        <h1>About US</h1>
        <p>We at E-Cell, @TCE believe that entrepreneurship is the key<br/>for India’s development. To fulfil this vision, we have<br/>conceptualized & successfully implemented various<br/>initiatives and opportunities to help students & young<br/>entrepreneurs in their entrepreneurial journey.</p>
        <div className="logos">
          <a href="https://www.tce.edu" target='_blank' rel="noreferrer"><img src={TCE} alt="tce_logo" /></a>
          <a href="/"><img src={Ecell} alt="ecell_logo" /></a>
        </div>
      </div>
    </div>
  )
}

export default AboutUsContainer