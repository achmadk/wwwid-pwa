import React from 'react'
import { NavLink } from 'react-router-dom'

import { clickToOtherPage } from '../../utils/navigation'

export default function NavbarItem ({ title, url }) {
  return (
    <li className='nav-item'>
      <NavLink activeClassName='active' className='nav-link' to={`${url}.html`} onClick={clickToOtherPage}>{`${title}`}</NavLink>
    </li>
  )
}
