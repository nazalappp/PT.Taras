import MetaHead from '@/components/core/MetaHead'
import ProfileContainer from '@/containers/user/profile/ProfileContainer'
import React, { Component, Fragment } from 'react'

export default class profile extends Component {
  // eslint-disable-next-line space-before-function-paren
  constructor(props) {
    super(props)
    this.state = {
      meta: {
        title: ' | Profile ',
        description: 'LAPANGAN.ID Profile'
      }
    }
  }

  render () {
    return (
      <Fragment>
        <MetaHead {...this.state.meta} />
        <ProfileContainer {...this.props} />
      </Fragment>
    )
  }
}
