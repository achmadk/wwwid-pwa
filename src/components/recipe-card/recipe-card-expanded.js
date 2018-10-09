import React from 'react'

import CardHeader from '@material-ui/core/CardHeader/CardHeader'
import Avatar from '@material-ui/core/Avatar/Avatar'
import Typography from '@material-ui/core/Typography/Typography'
import IconButton from '@material-ui/core/IconButton/IconButton'
import ArrowBack from '@material-ui/icons/ArrowBack'
import CardContent from '@material-ui/core/CardContent/CardContent'
import HTMLContent from '../html-content'

export default function RecipeCardExpanded ({ classes, recipe, goBack }) {
  let { avatar } = classes
  let { thumbnail, title, content, author, pubDate } = recipe
  let avatarContent = (
    <Avatar aria-label='recipe' className={avatar}>{author[0]}</Avatar>
  )
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
      <img
        src={`https://res.cloudinary.com/dqtlmyuyi/image/fetch/q_auto:good,f_auto,h_360,dpr_auto,c_fit/${thumbnail}`}
        style={{height: '50vh', objectFit: 'cover'}}
        alt={title}
      />
      <CardContent>
        <Typography variant='headline' component='h2'>{title}</Typography>
        <CardHeader avatar={avatarContent} title={author} subheader={pubDate} />
        <Typography component='div'>
          <HTMLContent html={content} />
        </Typography>
      </CardContent>
    </div>
  )
}
