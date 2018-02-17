import React from 'react'
import compose from 'recompose/compose'
import lifecycle from 'recompose/lifecycle'

import AppLoadable from '../loadable'

const LoadableComponent = AppLoadable({
  loader: () => import(/* webpackChunkName: "products" */ './products')
})

function Products () {
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
)(Products)
