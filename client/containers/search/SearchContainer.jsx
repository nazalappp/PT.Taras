import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchComponent from '@/components/search/SearchComponent'

export default class SearchContainer extends Component {
  static propTypes = {
    data: PropTypes.any
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
      locations: [
        { value: '', text: 'Kota' },
        { value: 'here', text: 'Terdekat' },
        { value: 'jakarta', text: 'Jakarta' },
        { value: 'bandung', text: 'Bandung' },
        { value: 'surabaya', text: 'Surabaya' },
        { value: 'malang', text: 'Malang' },
        { value: 'semarang', text: 'Semarang' }
      ]
    }
  }

  render () {
    return (
      <SearchComponent
        {...this.props}
        {...this.state}
      />
    )
  }
}
