import React from 'react'

export default function MapLocation () {
  let locationStyle = { border: '0' }
  return (
    <div className='location'>
      <iframe title='arry utama location google maps'
        allowFullScreen
        frameBorder='0' style={locationStyle}
        src='https://www.google.com/maps/embed/v1/place?key=AIzaSyCfBzeydm-VUKKknbmJ24aIRZXsoLzOiYw&q=Arry+Utama+Catering+%26+Service' />
    </div>
  )
}
