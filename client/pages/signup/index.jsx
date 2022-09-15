import MetaHead from '@/components/core/MetaHead'
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
            </Fragment>
        )
    }
}
