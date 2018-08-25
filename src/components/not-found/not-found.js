import React from 'react'

import Warning from '@material-ui/icons/Warning'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

function NotFoundPage ({ classes }) {
  let { content, icon } = classes
  return (
    <div className={content}>
      <Warning className={icon} color='disabled' />
      <Typography
        variant='subheading'
        align='center'
        color='textSecondary'
      >
        Please connect to internet to view this page
      </Typography>
    </div>
  )
}

const styles = {
  icon: {
    fontSize: 96
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '80vh'
  }
}

export default withStyles(styles)(NotFoundPage)
