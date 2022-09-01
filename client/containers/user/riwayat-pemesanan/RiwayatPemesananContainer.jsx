import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RiwayatPemesananComponent from '@/components/user/riwayat-pemesanan/RiwayatPemesananComponent'

export default class RiwayatPemesananContainer extends Component {
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
      <RiwayatPemesananComponent
        {...this.props}
        {...this.state}
      />
    )
  }
}
