import React, { Fragment } from 'react'

import CardHeader from 'material-ui/Card/CardHeader'
import Avatar from 'material-ui/Avatar'
import CardContent from 'material-ui/Card/CardContent'
import CardMedia from 'material-ui/Card/CardMedia'
import Typography from 'material-ui/Typography'

export default function RecipeCardNotExpanded ({ classes, recipe }) {
  let { media, avatar } = classes
  let { title, thumbnail, pubDate, author } = recipe
  let avatarContent = (
    <Avatar aria-label='recipe' className={avatar}>{author[0]}</Avatar>
  )
  return (
    <Fragment>
      <CardHeader avatar={avatarContent} title={author} subheader={pubDate} />
      <CardMedia className={media} image={thumbnail} title={title} />
      <CardContent>
        <Typography variant='headline' component='h2'>{title}</Typography>
      </CardContent>
    </Fragment>
  )
}
