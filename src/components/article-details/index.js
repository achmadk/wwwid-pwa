import React from 'react'

import AppLoadable from '../loadable'

const LoadableComponent = AppLoadable({
  loader: () => import(/* webpackChunkName: "article-details" */ './article-details')
})

function ArticleDetails () {
  return (
    <LoadableComponent />
  )
}

export default ArticleDetails
