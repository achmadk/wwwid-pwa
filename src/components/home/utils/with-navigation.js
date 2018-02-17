import React from 'react'

const withNavigation = Component => ({history, recipe, ...rest}) => {
  let element = null
  const goToRecipe = () => {
    const { top, right, bottom, left, width, height } = element.getBoundingClientRect()
    let from = { top: top + 72, right, bottom, left, width, height }
    history.push({
      pathname: `/articles.html`,
      search: `id=${recipe.guid}`,
      state: {
        to: 'modal',
        meta: { from },
        recipe
      }
    })
  }
  return (
    <div ref={el => { element = el }}>
      <Component recipe={recipe} onClick={goToRecipe} {...rest} />
    </div>
  )
}

export default withNavigation
