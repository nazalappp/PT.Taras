import MetaHead from '@/components/core/MetaHead'
import InfoBerlanggananContainer from '@/containers/user/info-berlangganan/InfoBerlanggananContainer'
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
        <InfoBerlanggananContainer {...this.props} />
      </Fragment>
    )
  }
}
