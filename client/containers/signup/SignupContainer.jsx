import PropTypes from 'prop-types'
import { mapActions } from '@/store/index'
import React, { Component } from 'react'
import { connect } from 'react-redux'

export default connect(
    null,
    mapActions('authentication')
)(
    class SignupContainer extends Component {
        static propTypes = {
            authentication: PropTypes.func
        }
        
        constructor(props) {
          super(props)
        
          this.state = {
             
          };
        };
        
        render() {
            return (
                <div>SignupContainer</div>
            )
        }
    }
) 