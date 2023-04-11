import React from 'react'
import './QuotesContainer.css';

import { QuotesBox } from '../../Components';

import E1 from "../../images/e1.jpg";
import E2 from "../../images/e2.png";
import E3 from "../../images/e3.png";
import E4 from "../../images/e4.png";

function QuotesContainer() {

  return (
    <div className='QuotesContainer'>
        <h1>Entrepreneur's Thoughts</h1>
        <div className='left-shift'>
            <QuotesBox img={E1} quotes={"“Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking. Don’t let the noise of other’s opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.”"} author={"Steve Jobs"} shift={0} />
        </div>
        <div className='right-shift'>
            <QuotesBox img={E2} quotes={"“My biggest motivation? Just to keep challenging myself. I see life almost like one long University education that I never had -- everyday I’m learning something new.“"} author={"Richard Branson"} shift={1} />
        </div>
        <div className='left-shift'>
            <QuotesBox img={E3} quotes={"“Every time you state what you want or believe, you’re the first to hear it. It’s a message to both you and others about what you think is possible. Don’t put a ceiling on yourself.“"} author={"Oprah Winfrey"} shift={0} />
        </div>
        <div className='right-shift'>
            <QuotesBox img={E4} quotes={"“It’s fine to celebrate success but it is more important to heed the lessons of failure.“"} author={"Bill Gates"} shift={1} />
        </div>
    </div>
  )
}

export default QuotesContainer