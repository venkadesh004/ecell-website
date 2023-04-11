import React from 'react'
import './QuotesBox.css';

function QuotesBox({img, quotes, author, shift}) {
    if (shift === 1) {
        return (
            <div className='QuotesBox'>
                <div className="left-col-quotes-1">
                    <p>{quotes}</p>
                    <h6>- {author}</h6>
                </div>
                <div className="right-col-quotes-1">
                    <img src={img} alt="" />
                </div>
            </div>
        );
    }
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