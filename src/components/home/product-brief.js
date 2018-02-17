import React from 'react'

import ProductList from './product-list'

export default function ProductBrief () {
  let productLists = [ 'Catering Service', 'Wedding Decoration' ]
  return (
    <section id='products'>
      <div className='container text-center'>
        <h2 className='section-heading'>Our Products</h2>
        <hr />
        <div className='card-group'>
          {
            productLists.map(item => <ProductList key={item} item={item} />)
          }
          {/* <a href='img/product-catering-service.jpg' className='card image-popup'>
            <img className='card-img-top lazy-load' src='img/product-catering-service-blur.jpg' data-src='img/product-catering-service.jpg' alt='product-catering-service' />
            <div className='card-img-overlay'>
              <h5 className='card-title'>Catering Service</h5>
            </div>
          </a>
          <a href='img/product-wedding-organizer.jpg' className='card image-popup'>
            <img className='card-img-top lazy-load' src='img/product-wedding-organizer-blur.jpg' data-src='img/product-wedding-organizer.jpg' alt='product-wedding-organizer' />
            <div className='card-img-overlay'>
              <h5 className='card-title'>Wedding Organizing</h5>
            </div>
          </a>
          <a href='img/product-wedding-decoration.jpg' className='card image-popup'>
            <img className='card-img-top lazy-load' src='img/product-wedding-decoration-blur.jpg' data-src='img/product-wedding-decoration.jpg' alt='product-wedding-decoration' />
            <div className='card-img-overlay'>
              <h5 className='card-title'>Wedding Decoration</h5>
            </div>
          </a> */}
        </div>
      </div>
    </section>
  )
}
