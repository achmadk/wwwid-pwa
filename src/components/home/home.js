import React, { PureComponent } from 'react'
import connect from 'react-redux/es/connect/connect'

import RecipeCardList from './recipe-card-list'

import { getArticles } from '../../store/actions/articles'

class Home extends PureComponent {
  async componentDidMount () {
    try {
      await this.props.getArticles()
    } catch (e) {
      console.log(e)
    }
  }
  render () {
    let { articles } = this.props
    return (
      <>
        {
          articles.map(recipe => <RecipeCardList key={`recipe-${recipe.guid}`} recipe={recipe} />)
        }
      </>
    )
  }
}

const mapStateToProps = ({ articles }) => ({ articles: articles.data })

const mapDispatchToProps = {
  getArticles
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
