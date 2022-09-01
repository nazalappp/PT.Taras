import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProfileComponent from '@/components/user/profile/ProfileComponent'

export default class ProfileContainer extends Component {
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
      <ProfileComponent
        {...this.props}
        {...this.state}
      />
    )
  }
}
