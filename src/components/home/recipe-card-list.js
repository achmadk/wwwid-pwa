import React from 'react'
import compose from 'recompose/compose'

import RecipeCard from '../recipe-card'

import { withRouter } from 'react-router-dom'
import withNavigation from './utils/with-navigation'

const RecipeCardWithNavigation = compose(
  withRouter,
  withNavigation
)(RecipeCard)

export default function RecipeCardList ({ recipe }) {
  let style = { margin: 8, cursor: 'pointer' }
  return (
    <div style={style}>
      <RecipeCardWithNavigation recipe={recipe} />
    </div>
  )
}
