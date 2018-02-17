import React, { Fragment } from 'react'

import IconButton from 'material-ui/IconButton'
import ArrowBack from 'material-ui-icons/ArrowBack'

export default function RecipeCardExpanded ({ classes, recipe, goBack }) {
  let { thumbnail } = recipe
  return (
    <Fragment>
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
        <img src={thumbnail} />
      </div>
    </Fragment>
  )
}
