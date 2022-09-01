import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MembershipComponent from '@/components/user/membership/MembershipComponent'

export default class MembershipContainer extends Component {
  static propTypes = {
    data: PropTypes.any
  }

  // eslint-disable-next-line space-before-function-paren
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <MembershipComponent
        {...this.props}
        {...this.state}
      />
    )
  }
}
