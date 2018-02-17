import React from 'react'

import Card from 'material-ui/Card/Card'
import red from 'material-ui/colors/red'

import RecipeCardExpanded from './recipe-card-expanded'
import RecipeCardNotExpanded from './recipe-card-not-expanded'

import compose from 'recompose/compose'
import withStyles from 'material-ui/styles/withStyles'

function RecipeCard ({ recipe, expanded = false, goBack = null, classes, onClick, ...rest }) {
  let cardClassName = !expanded ? classes.card : 'recipe'
  return (
    <Card className={cardClassName} onClick={onClick}>
      {
        !expanded && <RecipeCardNotExpanded classes={classes} recipe={recipe} />
      }
      {
        expanded && <RecipeCardExpanded classes={classes} recipe={recipe} goBack={goBack} />
      }
      {/* <CardHeader avatar={avatarContent} title={name} subheader='' />
      <CardMedia className={media} image={mainImageUrl} title={name} />
      <CardContent>
        <Typography component='p'>name</Typography>
      </CardContent> */}
    </Card>
  )
}

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 200
  },
  avatar: {
    backgroundColor: red[500]
  },
  navIcon: {
    color: 'white'
  }
}

export default compose(
  withStyles(styles)
)(RecipeCard)
