import React, { Fragment } from 'react'

import MenuItem from './menu-item'

export default function MenuGroup ({ group }) {
  let { items } = group
  return (
    <Fragment>
      {
        items.map((item, i) => <MenuItem item={item} key={`${items.length}-${i}`} />)
      }
    </Fragment>
  )
}
