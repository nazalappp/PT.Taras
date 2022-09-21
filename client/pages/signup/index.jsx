import MetaHead from '@/components/core/MetaHead'
import SignupContainer from '@/containers/signup/SignupContainer'
import React, { Component, Fragment } from 'react'

export default class index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            meta: {
                title: ' | Signup',
                description: 'LAPANGAN.ID Signup'
            }
        }
    }
    render() {
        return (
            <Fragment>
                <MetaHead {...this.state.meta}/>
                <SignupContainer/>
            </Fragment>
        )
    }
}