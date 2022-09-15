import { Container, Grid } from '@mui/material'
import React from 'react'
import LayoutComponent from '../core/LayoutComponent'

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

            </Grid>
            <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
            >

            </Grid>
        </Grid>
    </Container>
    </LayoutComponent>
  )
}
