import React, { Component, Fragment } from 'react'
import ForgotPasswordContainer from '@/containers/auth/ForgotPasswordContainer'
import MetaHead from '@/components/core/MetaHead'

export default class index extends Component {
  // eslint-disable-next-line space-before-function-paren
  constructor(props) {
    super(props)
    this.state = {
      meta: {
        title: ' | Lupa Password',
        description: 'LAPANGAN.ID Lupa Password'
      }
    }
  }

  render () {
    return (
      <Fragment>
        <MetaHead {...this.state.meta} />
        <ForgotPasswordContainer />
      </Fragment>
    )
  }
}
