import React from 'react'

export default function ProductImageItem ({ image }) {
  let imageBig = require(`../../assets/img/${image}.jpg`)
  let dataSrc = require(`../../assets/img/${image}-small.jpg`)
  let imgSrc = require(`../../assets/img/${image}-blur.jpg`)
  return (
    <div className='col-sm-4'>
      <a href={imageBig} className='card image-popup'>
        <img className='card-img-top lazy-load'
          src={imgSrc}
          data-src={dataSrc}
          alt={image} />
      </a>
    </div>
  )
}
