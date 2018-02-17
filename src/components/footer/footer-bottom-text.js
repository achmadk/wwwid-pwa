import React from 'react'

export default function FooterBottomText () {
  let date = new Date()
  let currentYear = date.getFullYear()
  return (
    <div id='footer'>
      <div className='footer-container'>
        <p>{`Copyright @ ${currentYear} Arry Utama Catering. All Rights Reserved`}</p>
      </div>
    </div>
  )
}
