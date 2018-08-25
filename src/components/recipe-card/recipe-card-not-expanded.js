import React, { Fragment } from 'react'

import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import HTMLContent from '../html-content'

export default function RecipeCardNotExpanded ({ classes, recipe }) {
  let { media, avatar } = classes
  let { title, thumbnail, pubDate, author, description } = recipe
  let avatarContent = (
    <Avatar aria-label='recipe' className={avatar}>{author[0]}</Avatar>
  )
  return (
    <Fragment>
      <CardHeader avatar={avatarContent} title={author} subheader={pubDate} />
      <CardMedia className={media} src={thumbnail} title={title}>
        <img
          data-src={thumbnail}
          style={{height: '100%', width: '100%', objectFit: 'cover'}}
          className='lazyload'
          alt={title}
        />
      </CardMedia>
      <CardContent>
        <Typography variant='headline' component='h2'>{title}</Typography>
        <Typography component='div'>
          <HTMLContent html={description} />
        </Typography>
      </CardContent>
    </Fragment>
  )
}
