import MetaHead from '@/components/core/MetaHead'
import SearchContainer from '@/containers/search/SearchContainer'
import React, { Component, Fragment } from 'react'

export function getServerSideProps ({ query }) {
  return {
    props: { router: query }
  }
}

export default class index extends Component {
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
        <SearchContainer
          {...this.props}
          {...this.state}
        />
      </Fragment>
    )
  }
}
