import React from 'react'

import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ArrowBack from '@material-ui/icons/ArrowBack'
import CardContent from '@material-ui/core/CardContent'

export default function RecipeCardExpanded ({ recipe, goBack }) {
  let { thumbnail, title, ...otherProps } = recipe
  return (
    <div className='header'>
      {
        goBack && (
          <div className='actions'>
            <IconButton color='primary' onClick={goBack}>
              <ArrowBack />
            </IconButton>
          </div>
        )
      }
      <img src={thumbnail} style={{height: '50vh', objectFit: 'cover'}} />
      <CardContent>
        <Typography variant='headline' component='h2'>{title}</Typography>
        {`${JSON.stringify(otherProps, null, 4)}`}
      </CardContent>
    </div>
  )
}
