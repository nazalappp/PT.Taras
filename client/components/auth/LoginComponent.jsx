import React from 'react'
import LayoutComponent from '@/components/core/LayoutComponent'
import { Container, Grid } from '@mui/material'
import LoginInformationComponent from '@/components/auth/LoginInformationComponent'
import PropTypes from 'prop-types'
import LoginCardComponent from '@/components/auth/LoginCardComponent'

function LoginComponent ({
  features,
  authentication = () => { }
}, context) {
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
            <LoginInformationComponent features={features} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <LoginCardComponent
              authentication={authentication}
            />
          </Grid>
        </Grid>
      </Container>
    </LayoutComponent>
  )
}

LoginComponent.propTypes = {
  features: PropTypes.array,
  authentication: PropTypes.func
}

export default LoginComponent
