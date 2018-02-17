import React from 'react'

const withRecipe = Component => ({ params, ...rest }) => {
  console.log(params, rest)
  let { recipe } = rest.location.state
  return <Component {...rest} recipe={recipe} />
  // return <Component {...rest} />
}

export default withRecipe
