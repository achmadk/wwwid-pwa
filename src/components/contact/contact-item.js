import React from 'react'
import compose from 'recompose/compose'
import lifecycle from 'recompose/lifecycle'
import classnames from 'classnames'
import Clipboard from 'clipboard'

import ContactPerson from './contact-person'

function ContactItem ({ colorMain }) {
  let contactPersons = [{
    name: 'Ibu Tuti',
    phoneNumber: '0813-8132-4004'
  }, {
    name: 'Ibu Pini',
    phoneNumber: '0812-9261-350'
  }]
  let sectionClassName = classnames({ 'no-color-main': !colorMain })
  let buttonClassName = classnames('btn btn-copy border-0', {
    'btn-inverse': !colorMain,
    'btn-default': colorMain
  })
  return (
    <section id='contact' className={sectionClassName}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 mx-auto text-center'>
            <h2 className='section-heading'>Contact Us</h2>
            <hr />
            <p className='text-faded mb-0'>
              <i className='fa fa-envelope fa-fw' />
              arrycatering@gmail.com
              <button className={buttonClassName} aria-label='copy-email' data-clipboard-text='arrycatering@gmail.com'>
                <i className='fa fa-fw fa-clipboard' />
              </button>
            </p>
            <div className='row'>
              {
                contactPersons.map((person, index) => <ContactPerson {...person} index={index} btnInverse={!colorMain} key={`cp-${index}`} />)
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default compose(
  lifecycle({
    componentDidMount () {
      let clipboard = new Clipboard('.btn-copy') //   eslint-disable-line no-unused-vars
    }
  })
)(ContactItem)
