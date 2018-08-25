import React from 'react'

import AppLoadable from '../loadable'

const LoadableComponent = AppLoadable({
  loader: () =>
    import(/* webpackChunkName: "not-found", webpackPrefetch: true */'./not-found')
})

function ArticleDetails () {
  return <LoadableComponent />
}

export default ArticleDetails
