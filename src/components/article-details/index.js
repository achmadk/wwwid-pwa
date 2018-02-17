import React from 'react'
import compose from 'recompose/compose'

import AppLoadable from '../loadable'

const LoadableComponent = AppLoadable({
  loader: () => import(/* webpackChunkName: "article-details" */ './article-details')
})

function ArticleDetails () {
  return (
    <LoadableComponent />
  )
}

export default compose(

)(ArticleDetails)
