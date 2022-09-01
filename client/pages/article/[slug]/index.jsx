import React, { Component, Fragment } from 'react'
import ArticleDetailContainer from '@/containers/article/ArticleDetailContainer'
import MetaHead from '@/components/core/MetaHead'

export default class index extends Component {
  // eslint-disable-next-line space-before-function-paren
  constructor(props) {
    super(props)
    this.state = {
      meta: {
        title: ' | Article ',
        description: 'LAPANGAN.ID Article'
      }
    }
  }

  render () {
    return (
      <Fragment>
        <MetaHead {...this.state.meta} />
        <ArticleDetailContainer {...this.props} />
      </Fragment>
    )
  }
}
