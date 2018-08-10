import React from 'react'
import compose from 'recompose/compose'
import withStyles from '@material-ui/core/styles/withStyles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'

function Navbar ({ classes }) {
  let { rootElement, flex, menuButton } = classes
  return (
    <div className={rootElement}>
      <AppBar>
        <Toolbar>
          <IconButton className={menuButton} aria-label='menu' color='inherit'>
            <MenuIcon />
          </IconButton>
          <Typography variant='title' color='inherit' className={flex}>
            WWWID PWA
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const styles = {
  rootElement: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

export default compose(
  withStyles(styles)
)(Navbar)
