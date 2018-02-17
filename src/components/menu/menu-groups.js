import React from 'react'

import MenuGroup from './menu-group'

export default function MenuGroups ({ title, groups, image, imageBlur }) {
  let imageAlt = title.toLowerCase().split(' ').join('-')
  let addPaddingBottom = { paddingBottom: 24 }
  return (
    <div className='col-md-6' style={addPaddingBottom}>
      <div className='card ml-auto mr-auto'>
        <img className='card-img-top lazy-load' src={imageBlur} data-src={image} alt={imageAlt} />
        <div className='card-img-overlay'>
          <h5 className='card-title'>{title}</h5>
        </div>
      </div>
      {
        groups.map((group, i) => <MenuGroup group={group} key={`${title}-${i}`} />)
      }
    </div>
  )
}
