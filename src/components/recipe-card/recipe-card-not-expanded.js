import React, { Fragment } from 'react'

import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import SanitizedHTML from 'react-sanitized-html'

export default function RecipeCardNotExpanded ({ classes, recipe }) {
  let { media, avatar } = classes
  let { title, thumbnail, pubDate, author, description } = recipe
  let avatarContent = (
    <Avatar aria-label='recipe' className={avatar}>{author[0]}</Avatar>
  )
  return (
    <Fragment>
      <CardHeader avatar={avatarContent} title={author} subheader={pubDate} />
      <CardMedia className={media} image={thumbnail} title={title} />
      <CardContent>
        <Typography variant='headline' component='h2'>{title}</Typography>
        <Typography component='p'>
          <SanitizedHTML html={description} />
        </Typography>
      </CardContent>
    </Fragment>
  )
}
