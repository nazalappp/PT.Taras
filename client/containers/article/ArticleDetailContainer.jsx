import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleDetailComponent from '@/components/article/ArticleDetailComponent'
import { connect } from 'react-redux'
import { mapActions, mapStateToProps } from '@/store'

export default connect(
  mapStateToProps('article'),
  mapActions('articleDetail')
)(
  class ArticleDetailContainer extends Component {
    static propTypes = {
      params: PropTypes.any,
      article: PropTypes.any,
      articleDetail: PropTypes.func
    }

    // eslint-disable-next-line space-before-function-paren
    constructor(props) {
      super(props)
      this.state = {
        articles: [
          {
            title: 'PB616',
            name: 'Johan',
            image: 'https://source.unsplash.com/random',
            created_at: '3 menit yang lalu'
          },
          {
            title: 'PB667',
            name: 'Johan',
            image: 'https://source.unsplash.com/random',
            created_at: '3 menit yang lalu'
          },
          {
            title: 'PB668',
            name: 'Johan',
            image: 'https://source.unsplash.com/random',
            created_at: '3 menit yang lalu'
          },
          {
            title: 'PB669',
            name: 'Johan',
            image: 'https://source.unsplash.com/random',
            created_at: '3 menit yang lalu'
          }
        ]
      }
    }

    componentDidMount () {
      this.props.articleDetail(this.props.params.slug)
    }

    render () {
      return (
        <ArticleDetailComponent
          {...this.props}
          {...this.state}
        />
      )
    }
  }
)
