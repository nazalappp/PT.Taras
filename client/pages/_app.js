import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '@/styles/theme'
import Head from 'next/head'
import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import '../scss/main.scss'
import { initializeStore } from '../store'
import PropTypes from 'prop-types'

const __REDUX_STORE__ = '__REDUX_STORE__'

// * Get Or Create Redux Store
function getOrCreateStore () {
  const initialState = {}

  const isServer = typeof window === 'undefined'
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState)
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__REDUX_STORE__]) {
    window[__REDUX_STORE__] = initializeStore(initialState)
  }
  return window[__REDUX_STORE__]
}

class Lapangan extends Component {
  // eslint-disable-next-line space-before-function-paren
  constructor(props) {
    super(props)
    this.reduxStore = getOrCreateStore()
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Fragment>
        <Provider store={this.reduxStore}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Head>
              <meta
                name='viewport'
                content='initial-scale=1, width=device-width'
              />
            </Head>
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </Fragment>
    )
  }
}

Lapangan.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any
}

export default Lapangan
