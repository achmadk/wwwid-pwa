import React, { PureComponent, Fragment } from 'react'
import connect from 'react-redux/lib/connect/connect'

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
      <Fragment>
        {
          articles.map(recipe => <RecipeCardList key={`recipe-${recipe.guid}`} recipe={recipe} />)
        }
      </Fragment>
    )
  }
}

const mapStateToProps = ({ articles }) => ({ articles: articles.data })

const mapDispatchToProps = {
  getArticles
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
