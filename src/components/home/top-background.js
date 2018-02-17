import React from 'react'
import compose from 'recompose/compose'
import lifecycle from 'recompose/lifecycle'
import Swiper from 'swiper'

import SwiperSlide from './swiper-slide'

function TopBackground () {
  let indexes = [ '1', '3', '4' ]
  return (
    <header className='masthead'>
      <div className='header-slides'>
        <div className='swiper-wrapper'>
          {
            indexes.map(value => <SwiperSlide value={value} key={`00${value}`} />)
          }
        </div>
        <div className='swiper-pagination' />
      </div>
    </header>
  )
}

export default compose(
  lifecycle({
    componentDidMount () {
      let swiper = new Swiper('.header-slides', { //   eslint-disable-line no-unused-vars
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        loop: true,
        lazy: true,
        pagination: {
          el: '.swiper-pagination'
        }
      })
    }
  })
)(TopBackground)
