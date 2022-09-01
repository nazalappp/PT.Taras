import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InfoBerlanggananComponent from '@/components/user/info-berlangganan/InfoBerlanggananComponent'

export default class InfoBerlanggananContainer extends Component {
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
      <InfoBerlanggananComponent
        {...this.props}
        {...this.state}
      />
    )
  }
}
