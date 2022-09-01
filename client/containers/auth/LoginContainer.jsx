import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LoginComponent from '@/components/auth/LoginComponent'
import { connect } from 'react-redux'
import { mapActions } from '@/store/'

export default connect(
  null,
  mapActions('authentication')
)(
  class LoginContainer extends Component {
    static propTypes = {
      authentication: PropTypes.func
    }

    // eslint-disable-next-line space-before-function-paren
    constructor(props) {
      super(props)
      this.state = {
        features: [
          {
            title: 'Mudah',
            short_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          },
          {
            title: 'Mudah',
            short_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          },
          {
            title: 'Mudah',
            short_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          },
          {
            title: 'Mudah',
            short_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
          }
        ]
      }
    }

    render () {
      return (
        <LoginComponent
          {...this.props}
          {...this.state}
        />
      )
    }
  }
)
