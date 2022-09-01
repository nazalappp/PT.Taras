import MetaHead from '@/components/core/MetaHead'
import MembershipContainer from '@/containers/user/membership/MembershipContainer'
import React, { Component, Fragment } from 'react'

export default class membership extends Component {
  // eslint-disable-next-line space-before-function-paren
  constructor(props) {
    super(props)
    this.state = {
      meta: {
        title: ' | Membership ',
        description: 'LAPANGAN.ID Membership'
      }
    }
  }

  render () {
    return (
      <Fragment>
        <MetaHead {...this.state.meta} />
        <MembershipContainer {...this.props} />
      </Fragment>
    )
  }
}
