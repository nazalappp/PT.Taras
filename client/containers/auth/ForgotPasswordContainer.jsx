import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ForgotPasswordComponent from '@/components/auth/ForgotPasswordComponent'

export default class ForgotPasswordContainer extends Component {
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
      <ForgotPasswordComponent
        {...this.state}
      />
    )
  }
}
