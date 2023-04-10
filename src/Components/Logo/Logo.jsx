import React from 'react';
import './Logo.css';

import ECell from "../../images/ecell-logo.png";
import Tce from '../../images/tce-logo.png';

function Logo() {
  return (
    <div className='Logo'>
        <a href="/"><img src={ECell} alt="Ecell-logo" /></a>
        <a href="https://tce.edu" target='_blank' rel="noreferrer"><img src={Tce} alt="Tce-logo" /></a>
    </div>
  )
}

export default Logo