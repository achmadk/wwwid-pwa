import React, { PureComponent, Fragment } from 'react'
// import compose from 'recompose/compose'
import axios from 'axios'

import RecipeCardList from './recipe-card-list'

// import withRecipes from './utils/with-recipes'

// export default function Home ({ recipes, goToRecipes, history }) {
export default class Home extends PureComponent {
  state = { // eslint-disable-line no-undef
    articles: []
  }
  async componentDidMount () {
    try {
      let { data } = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid')
      let articles = data.items
      console.log(articles)
      this.setState({ articles })
    } catch (e) {
      console.log(e)
    }
  }
  render () {
    let { articles } = this.state
    return (
      <Fragment>
        {
          articles.map(recipe => <RecipeCardList key={`recipe-${recipe.guid}`} recipe={recipe} />)
        }
      </Fragment>
    )
  }
}

// function Home ({ recipes, goToRecipes, history }) {
//   return (
//     <Fragment>
//       {
//         recipes.map(recipe => <RecipeCardList key={`recipe-${recipe.id}`} recipe={recipe} />)
//       }
//     </Fragment>
//   )
// }

//  compose(
//   withRecipes
// )(Home)
