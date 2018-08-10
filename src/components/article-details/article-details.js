import React, { Fragment } from 'react'
import compose from 'recompose/compose'
import withRouter from 'react-router-dom/withRouter'

import RecipeCard from '../recipe-card'

import withNavigation from './utils/with-navigation'
import withQueryString from '../../utils/with-query-string'
import withRecipe from './utils/with-recipe'

function ArticleDetails ({ recipe, goBack }) {
  console.log(recipe)
  return (
    <Fragment>
      <RecipeCard recipe={recipe} goBack={goBack} expanded />
    </Fragment>
  )
}

export default compose(
  withRouter,
  withQueryString,
  withNavigation,
  withRecipe
)(ArticleDetails)
