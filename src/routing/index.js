import React, { PureComponent } from 'react'
import withRouter from 'react-router/withRouter'
import Route from 'react-router/Route'
import Switch from 'react-router/Switch'
// import { withRouter, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import compose from 'recompose/compose'
import classnames from 'classnames'

import CSSTransition from '../components/css-transition'

import Navbar from '../components/navbar'
import Home from '../components/home'
import ArticleDetails from '../components/article-details'
import NotFound from '../components/not-found'

class App extends PureComponent {
  componentWillReceiveProps () {
    this.previousView = this.props.location
  }

  render () {
    const { location } = this.props
    console.log('location: ', location)
    const modal = (location?.state?.to === 'modal') || (location.pathname === '/articles')
    console.log('modal: ', modal)
    let activeModal = classnames('modal-container', {
      'modal-enter modal-enter-active': modal && !this.previousView
    })

    let pos = modal ? (location?.state?.meta?.from || {}) : {}
    let homeLocation = modal ? this.previousView : location
    console.log('homeLocation: ', homeLocation)
    console.log('location: ', location)
    console.log('modal: ', modal)
    console.log('activeModal: ', activeModal)
    return (
      <div className='app'>
        <Navbar />
        <div className='view-container'>
          <Switch location={homeLocation}>
            <Route exact path='/' component={Home} />
            <Route component={NotFound} />
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
