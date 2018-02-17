import React from 'react'
import { Link } from 'react-router-dom'

import { clickToOtherPage } from '../../utils/navigation'

export default function ProductList ({ item }) {
  let editedItem = item.toLowerCase().split(' ').join('-')
  console.log(editedItem)
  let blurredImage = require(`../../assets/img/product-${editedItem}-blur.jpg`)
  let dataImageSource = require(`../../assets/img/product-${editedItem}.jpg`)
  return (
    <Link to='/products.html' className='card' onClick={clickToOtherPage}>
      <img className='card-img-top lazy-load' src={blurredImage} data-src={dataImageSource} alt={`product-${editedItem}`} />
      <div className='card-img-overlay'>
        <h5 className='card-title'>{item}</h5>
      </div>
    </Link>
  )
}
