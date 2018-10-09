/**
 * import app.scss file.
 * It will generate css file in production
 * It will generate inlined css in development
 */
import './assets/style/app.scss'

// import libraries related to loop landing page development
import React from 'react'
import { render, hydrate } from 'react-dom'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { PersistGate } from 'redux-persist/integration/react'
import Provider from 'react-redux/es/components/Provider'
import 'lazysizes/lazysizes.min.js'

import AppRouting from './routing'

import { store, persistor } from './store'
import theme from './theme'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      let registration = await navigator.serviceWorker.register('/service-worker.js')
      console.log('SW registered: ', registration)
    } catch (registrationError) {
      console.log('SW registration failed: ', registrationError)
    }
  })
}

function App () {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <AppRouting />
          </BrowserRouter>
        </MuiThemeProvider>
      </PersistGate>
    </Provider>
  )
}

let appElement = document.getElementById('app')
let init = appElement.hasChildNodes() ? hydrate : render
init(<App />, appElement)
