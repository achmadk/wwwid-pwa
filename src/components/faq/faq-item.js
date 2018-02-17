import React from 'react'
import classnames from 'classnames'

import FaqBankAccount from './faq-bank-account'

export default function FaqItem ({ question, answer, index }) {
  let className = classnames('collapse', { 'show': index === 0 })
  let headingIndex = `heading${index}`
  let collapseIndex = `collapse${index}`
  return (
    <div className='card'>
      <div className='card-header' id={headingIndex} role='tab'
        data-toggle='collapse' data-target={`#${collapseIndex}`}
        aria-expanded='true' aria-controls={collapseIndex}>
        <h5 className='mb-0'>{question}</h5>
      </div>
      <div id={collapseIndex} className={className} role='tabpanel'
        aria-labelledby={headingIndex} data-parent='#accordion'>
        <div className='card-body'>
          {answer}
          { (index === 8) && <FaqBankAccount /> }
        </div>
      </div>
    </div>
  )
}
