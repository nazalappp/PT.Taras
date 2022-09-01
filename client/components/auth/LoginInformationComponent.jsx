import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography } from '@mui/material'
import { SportsSoccer } from '@mui/icons-material'

function LoginInformationComponent ({
  features
}, context) {
  return (
    <Paper
      elevation={1}
      sx={{
        padding: '1rem'
      }}
    >
      <Typography
        component='h5'
        variant='h5'
      >
        Gabung dan gunakan fitur mudahnya
      </Typography>
      <ul
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', listStyle: 'none', padding: 0 }}
      >
        {
          features.length > 0 && (
            features.map((item, index) => (
              <li key={index}>
                <div style={{ display: 'flex', alignItems: 'center', margin: '1rem' }} >
                  <div style={{
                    marginRight: '1rem'
                  }}>
                    <SportsSoccer sx={{ fontSize: '62px' }} />
                  </div>
                  <div style={{
                    marginLeft: '1rem'
                  }}>
                    <Typography
                      component='h6'
                      variant='h6'
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      component='p'
                    >
                      {item.short_description}
                    </Typography>
                  </div>
                </div>
              </li>
            ))
          )
        }
      </ul>
    </Paper>
  )
}

LoginInformationComponent.propTypes = {
  features: PropTypes.array
}

export default LoginInformationComponent
