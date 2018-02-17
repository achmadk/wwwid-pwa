import React from 'react'

import ProductImageItem from './product-image-item'

export default function ProductItem ({ title, images }) {
  return (
    <section>
      <div className='container text-center'>
        <h3 className='section-heading'>{title}</h3>
        <hr />
        <div className='row no-gutters'>
          {
            (images.length > 0) && images.map((image, index) => <ProductImageItem image={image} key={`${title}-${index}`} />)
          }
        </div>
      </div>
    </section>
  )
}
