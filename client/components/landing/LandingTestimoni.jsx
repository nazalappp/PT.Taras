import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Paper, Typography } from '@mui/material'
import { Person } from '@mui/icons-material'

function LandingTestimoni ({
  testimonies
}) {
  return (
    <Paper
      elevation={2}
    >
      <Grid
        container
        spacing={2}
        alignContent='center'
      >
        {
          testimonies.length > 0 && (
            testimonies.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                key={index}
              >
                <div
                  style={{ display: 'flex', alignItems: 'center', padding: '2rem' }}
                >
                  <Person sx={{ fontSize: '62px' }} />
                  <div>
                    <Typography
                      component='p'
                    >
                      {item.content}
                    </Typography>
                    <Typography
                      component='h5'
                    >
                      - {item.name}
                    </Typography>
                  </div>
                </div>
              </Grid>
            ))
          )
        }
      </Grid>
    </Paper>
  )
}

LandingTestimoni.propTypes = {
  testimonies: PropTypes.array
}

export default LandingTestimoni
