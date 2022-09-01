import React, { Component, Fragment } from 'react'
import MetaHead from '@/components/core/MetaHead'
import LoginContainer from '@/containers/auth/LoginContainer'

export default class index extends Component {
  // eslint-disable-next-line space-before-function-paren
  constructor(props) {
    super(props)
    this.state = {
      meta: {
        title: ' | Login',
        description: 'LAPANGAN.ID Login'
      }
    }
  }

  render () {
    return (
      <Fragment>
        <MetaHead {...this.state.meta} />
        <LoginContainer />
      </Fragment>
    )
  }
}
