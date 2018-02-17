import OriginalCSSTransition from 'react-transition-group/CSSTransition'

export default class CSSTransition extends OriginalCSSTransition {
  onEntered = () => { // eslint-disable-line no-undef
    // Do not remove enter classes when active
  }
}
