import PropTypes from 'prop-types'
import { mapActions } from '@/store/'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignupComponent from '@/components/signup/SignupComponent'

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
                    }
                ]
            };
        };

        render() {
            return (
                <SignupComponent 
                    {...this.props}
                    {...this.state}
                />
            )
        }
    }
) 