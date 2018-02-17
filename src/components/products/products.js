import React, { Fragment } from 'react'
import compose from 'recompose/compose'
import lifecycle from 'recompose/lifecycle'

import TitleSection from '../title-section'
import ProductItem from './product-item'
import ContactItem from '../contact/contact-item'

import initLazyLoadImages from '../../scripts/lazy-load-images'
import initImagePopup from '../../scripts/image-popup'

function Products () {
  let productData = [{
    title: 'Catering Service',
    images: [
      'catering-service-1',
      'catering-service-2',
      'catering-service-3',
      'catering-service-4',
      'catering-service-5',
      'catering-service-6',
      'catering-service-7',
      'catering-service-8'
    ]
  }, {
    title: 'Wedding Decoration',
    images: [
      'wedding-decoration-01',
      'wedding-decoration-02',
      'wedding-decoration-03',
      'wedding-decoration-04',
      'wedding-decoration-05',
      'wedding-decoration-06',
      'wedding-decoration-07',
      'wedding-decoration-08',
      'wedding-decoration-09',
      'wedding-decoration-10',
      'wedding-decoration-11',
      'wedding-decoration-12',
      'wedding-decoration-13'
    ]
  }]
  return (
    <Fragment>
      <TitleSection title='Our Products' />
      {
        productData.map(product => <ProductItem {...product} key={`${product.title}-${product.images.length}`} />)
      }
      <ContactItem />
    </Fragment>
  )
}

export default compose(
  lifecycle({
    componentDidMount () {
      initLazyLoadImages()
      initImagePopup()
    }
  })
)(Products)
