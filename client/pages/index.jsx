import React, { Component, Fragment } from 'react'
import MetaHead from '@/components/core/MetaHead'
import LandingContainer from '@/containers/landing/LandingContainer'

export default class Home extends Component {
  // eslint-disable-next-line space-before-function-paren
  constructor(props) {
    super(props)
    this.state = {
      meta: {
        title: ' | Landing',
        description: 'LAPANGAN.ID Landing'
      }
    }
  }

  render () {
    return (
      <Fragment>
        <MetaHead {...this.state.meta} />
        <LandingContainer />
      </Fragment>
    )
  }
}
