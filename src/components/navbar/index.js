import React from 'react'
import compose from 'recompose/compose'
import withStyles from 'material-ui/styles/withStyles'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Typography from 'material-ui/Typography'

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
