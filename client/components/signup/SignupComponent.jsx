import { Container, Grid } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'
import LayoutComponent from '../core/LayoutComponent'
import SignupInformationComponent from './SignupInformationComponent'
import SignupCardComponent from './SignupCardComponent'

export default function SignupComponent({
    features,
    authentication = () => {}
}, content) {
  return (
    <LayoutComponent headerClear={true}>
        <Container maxWidth='lg'>
        <Grid
            container
            spacing={2}
        >
            <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
            >
                <SignupInformationComponent features={features} />
            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
            >
                <SignupCardComponent
                    authentication={authentication}
                />
            </Grid>
        </Grid>
    </Container>
    </LayoutComponent>
  )
}

SignupComponent.propTypes = {
    features: PropTypes.array,
    authentication: PropTypes.func
}