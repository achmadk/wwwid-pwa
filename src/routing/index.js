import React, { PureComponent } from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import compose from 'recompose/compose'
import classnames from 'classnames'

import CSSTransition from '../components/css-transition'

import Navbar from '../components/navbar'
import Home from '../components/home'
import ArticleDetails from '../components/article-details'
// import About from '../components/about'
// import Products from '../components/products'
// import Menu from '../components/menu'
// import Faq from '../components/faq'
// import Contact from '../components/contact'
// import Footer from '../components/footer'

class App extends PureComponent {
  componentWillReceiveProps () {
    this.previousView = this.props.location
  }

  render () {
    const { location } = this.props
    const modal = location.state && location.state.to === 'modal'

    let activeModal = classnames('modal-container', {
      'modal-enter modal-enter-active': modal && !this.previousView
    })

    let pos = modal ? location.state.meta.from : {}
    let homeLocation = modal ? this.previousView : location
    return (
      <div className='app'>
        <Navbar />
        <div className='view-container'>
          <Switch location={homeLocation}>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
        <TransitionGroup>
          <CSSTransition in timeout={450} classNames='modal' key={location.pathname}
            mountOnEnter appear>
            <div className={activeModal} style={pos}>
              <Switch location={location}>
                <Route path='/articles' component={ArticleDetails} />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
        {/* <Footer /> */}
      </div>
    )
  }
}

export default compose(
  hot(module),
  withRouter
)(App)
