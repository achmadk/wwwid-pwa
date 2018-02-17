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
  return (
    <div style={{margin: 8}}>
      <RecipeCardWithNavigation recipe={recipe} />
    </div>
  )
}
