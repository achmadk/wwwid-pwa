import React from 'react'
// import compose from 'recompose/compose'

import AppLoadable from '../loadable'

// import withRecipes from './utils/with-recipes'

const LoadableComponent = AppLoadable({
  loader: () => import(/* webpackChunkName: "home", webpackPreload: true */ './home')
})

export default function Home () {
  console.log(LoadableComponent)
  return (
    <LoadableComponent />
  )
}

// export default compose(
//   withRecipes
// )(Home)
