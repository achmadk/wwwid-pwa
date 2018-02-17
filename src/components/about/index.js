import React from 'react'
import compose from 'recompose/compose'
import lifecycle from 'recompose/lifecycle'

import AppLoadable from '../loadable'

const LoadableComponent = AppLoadable({
  loader: () => import(/* webpackChunkName: "about" */ './about')
})

function About () {
  return (
    <LoadableComponent />
  )
}

export default compose(
  lifecycle({
    componentDidMount () {
      LoadableComponent.preload()
    }
  })
)(About)
