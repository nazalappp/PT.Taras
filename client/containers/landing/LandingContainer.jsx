import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LandingComponent from '@/components/landing/LandingComponent'
import { connect } from 'react-redux'
import { mapActions, mapStateToProps } from '@/store/'

export default connect(
  mapStateToProps('test', 'testArticle', 'taras'),
  mapActions('getSliders', 'getArticles', 'getArenas', 'getDetails', 'getTestArticles', 'getTaras')
)(
  class LandingContainer extends Component {
    static propTypes = {
      getSliders: PropTypes.func,
      getArenas: PropTypes.func,
      getArticles: PropTypes.func,
      getDetails: PropTypes.func,
      test: PropTypes.array,
      getTestArticle: PropTypes.func,
      testArticle: PropTypes.array,
      getTaras: PropTypes.func,
      taras: PropTypes.array
    }

    /* eslint-disable-next-line space-before-function-paren */
    constructor(props) {
      super(props)
      this.state = {
        sports: [
          { value: '', text: 'Pilih Cabang Olahraga' },
          { value: 'foot_ball', text: 'Sepak Bola' },
          { value: 'badminton', text: 'Badminton' },
          { value: 'futsal', text: 'Futsal' }
        ],
        location: [
          { value: '', text: 'Kota' },
          { value: 'here', text: 'Terdekat' },
          { value: 'jakarta', text: 'Jakarta' },
          { value: 'bandung', text: 'Bandung' },
          { value: 'surabaya', text: 'Surabaya' },
          { value: 'malang', text: 'Malang' },
          { value: 'semarang', text: 'Semarang' }
        ],
        partners: [
          {
            name: 'PB666',
            image: 'https://source.unsplash.com/random',
            short_description: 'Lizards are a widespread group of squamate reptiles'
          },
          {
            name: 'PB666',
            image: 'https://source.unsplash.com/random',
            short_description: 'Lizards are a widespread group of squamate reptiles'
          },
          {
            name: 'PB666',
            image: 'https://source.unsplash.com/random',
            short_description: 'Lizards are a widespread group of squamate reptiles'
          },
          {
            name: 'PB666',
            image: 'https://source.unsplash.com/random',
            short_description: 'Lizards are a widespread group of squamate reptiles'
          },
          {
            name: 'PB666',
            image: 'https://source.unsplash.com/random',
            short_description: 'Lizards are a widespread group of squamate reptiles'
          },
          {
            name: 'PB666',
            image: 'https://source.unsplash.com/random',
            short_description: 'Lizards are a widespread group of squamate reptiles'
          }
        ],
        testimonies: [
          {
            name: 'Kenny',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          },
          {
            name: 'Kenny',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          },
          {
            name: 'Kenny',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          }
        ],
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

    async componentDidMount () {
      await this.props.getSliders()
      await this.props.getArenas({ page: 1, limit: 6 })
      await this.props.getArticles({ page: 1, limit: 4 })
      await this.props.getDetails({ page: 1, limit: 6})
      await this.props.getTestArticles({ page: 1, limit: 4 })
      await this.props.getTaras({page: 1, limit:4})

      setTimeout(() => {
        console.log('in container arenas: ', this.props.test.arenas)
      }, 5000); 
      setTimeout(() => {
        console.log('in container articles: ', this.props.testArticle.articles)
      }, 5000);
      setTimeout(() => {
        console.log('in container taras: ', this.props.taras)
      }, 5000)
    }

    render () {
      return (
        <LandingComponent
          {...this.state}
        />
      )
    }
  }
)
