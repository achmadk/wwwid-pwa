import React from 'react'

export default function SwiperSlide ({ value }) {
  let result = require(`../../assets/img/header-slides-${value}.jpg`)
  console.log(result)
  return (
    <div className='swiper-slide'>
      <img data-src={result} className='img-fluid swiper-lazy lazy-load' alt={`header-slides-${value}`} />
      <div className='swiper-lazy-preloader' />
    </div>
  )
}
