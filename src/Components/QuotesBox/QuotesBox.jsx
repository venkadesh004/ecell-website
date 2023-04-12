import React from 'react'
import './QuotesBox.css';

function QuotesBox({img, quotes, author, shift}) {
  return (
    <div className='QuotesBox'>
        <div className="left-col-quotes-0">
            <img src={img} alt="" />
        </div>
        <div className="right-col-quotes-0">
            <p>{quotes}</p>
            <h6>- {author}</h6>
        </div>
    </div>
  )
}

export default QuotesBox