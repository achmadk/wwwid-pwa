import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

const withRecipe = Component => ({ params, articles, ...rest }) => {
  let recipe = rest.location.state?.recipe || articles.find(({ guid }) => params.id === guid)
  return <Component {...rest} recipe={recipe} />
}

const mapStateToProps = ({ articles }) => ({
  articles: articles.data
})

export default compose(
  connect(mapStateToProps),
  withRecipe,
)
