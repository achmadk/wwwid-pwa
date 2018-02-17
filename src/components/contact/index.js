import React from 'react'
import compose from 'recompose/compose'
import lifecycle from 'recompose/lifecycle'

import AppLoadable from '../loadable'

const LoadableComponent = AppLoadable({
  loader: () => import(/* webpackChunkName: "contact" */ './contact')
})

function Contact () {
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
)(Contact)
