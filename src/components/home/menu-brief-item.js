import React from 'react'
import { Link } from 'react-router-dom'

import { clickToOtherPage } from '../../utils/navigation'

export default function MenuBriefItem ({ src, dataSrc, title }) {
  let alt = title.toLowerCase().split(' ').join('-')
  return (
    <Link to='/menu.html' className='card' onClick={clickToOtherPage}>
      <img className='card-img-top lazy-load' src={src} data-src={dataSrc} alt={alt} />
      <div className='card-img-overlay'>
        <h5 className='card-title'>{title}</h5>
      </div>
    </Link>
  )
}
