import React from 'react'
import classnames from 'classnames'

export default function ContactPerson ({ name, phoneNumber, btnInverse, index }) {
  let mergedPhoneNumber = phoneNumber.split('-').join('')
  let ariaLabel = `copy-cp-${index + 1}`
  let buttonClassName = classnames('btn btn-copy border-0', {
    'btn-inverse': btnInverse,
    'btn-default': !btnInverse
  })
  return (
    <div className='col-md-6 contact-info'>
      <h5>{name}</h5>
      <p className='text-faded mb-0'>
        <i className='fa fa-phone fa-fw' />
        {`${phoneNumber}`}
        <button className={buttonClassName} aria-label={ariaLabel}
          data-clipboard-text={mergedPhoneNumber}>
          <i className='fa fa-fw fa-clipboard' />
        </button>
      </p>
    </div>
  )
}
