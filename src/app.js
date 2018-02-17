/**
 * import app.scss file.
 * It will generate css file in production
 * It will generate inlined css in development
 */
import './assets/style/app.scss'

// import libraries related to loop landing page development
import React from 'react'
import ReactDOM from 'react-dom'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import AppRouting from './routing'

import theme from './theme'

function App () {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRouting />
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

let appElement = document.getElementById('app')
ReactDOM[appElement.hasChildNodes() ? 'hydrate' : 'render'](<App />, appElement)
