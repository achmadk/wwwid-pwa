import React from 'react'

import MenuBriefItem from './menu-brief-item'

export default function MenuBrief () {
  let menuItems = [{
    title: 'Menu A',
    src: require('../../assets/img/menu-a-blur.jpg'),
    dataSrc: require('../../assets/img/menu-a.jpg')
  }, {
    title: 'Menu B',
    src: require('../../assets/img/menu-b-blur.jpg'),
    dataSrc: require('../../assets/img/menu-b.jpg')
  }]
  return (
    <section id='menu'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 mx-auto text-center'>
            <h2 className='section-heading'>Our Menu</h2>
            <hr />
            <div className='card-group'>
              {
                menuItems.map(item => <MenuBriefItem {...item} key={item.title} />)
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
