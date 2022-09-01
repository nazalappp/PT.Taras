import MetaHead from '@/components/core/MetaHead'
import RiwayatPemesananContainer from '@/containers/user/riwayat-pemesanan/RiwayatPemesananContainer'
import React, { Component, Fragment } from 'react'

export default class index extends Component {
  // eslint-disable-next-line space-before-function-paren
  constructor(props) {
    super(props)
    this.state = {
      meta: {
        title: ' | Info Berlangganan ',
        description: 'LAPANGAN.ID Info Berlangganan'
      }
    }
  }

  render () {
    return (
      <Fragment>
        <MetaHead {...this.state.meta} />
        <RiwayatPemesananContainer {...this.props} />
      </Fragment>
    )
  }
}
