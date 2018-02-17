import React, { Fragment } from 'react'
import compose from 'recompose/compose'
import lifecycle from 'recompose/lifecycle'

import TitleSection from '../title-section'
import MenuGroups from './menu-groups'
import ContactItem from '../contact/contact-item'

import initLazyLoadImages from '../../scripts/lazy-load-images'

import menuListsData from './menu-lists-data'

function Menu () {
  return (
    <Fragment>
      <TitleSection title='Our Menu' />
      <section className='menu'>
        <div className='container text-center'>
          <div className='row'>
            {
              menuListsData.map(menu => <MenuGroups {...menu} key={menu.title} />)
            }
          </div>
        </div>
      </section>
      <ContactItem />
    </Fragment>
  )
}

export default compose(
  lifecycle({
    componentDidMount () {
      initLazyLoadImages()
    }
  })
)(Menu)
