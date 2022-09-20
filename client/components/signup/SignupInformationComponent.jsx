import PropTypes from 'prop-types'
import { SportsSoccer } from '@mui/icons-material'
import { Paper, Typography } from '@mui/material'
import React from 'react'

export default function SignupInformationComponent({
    features
}, context) {
  return (
    <Paper
        elevation={1}
        sx={{
            padding: '1rem'
        }}
    >
        <h1 className='title'>Gabung dan gunakan fitur mudahnya</h1>
        <ul
            style={{display: 'flex', flexDirection: 'column', alignItems: 'center', listStyle: 'none', padding: 0}}
        >
            {
                features.length > 0 && (
                    features.map((item, index) => (
                        <li key={index}>
                            <div style={{display: 'flex', alignItems: 'center', margin: '1rem'}}>
                                <div style={{
                                    marginRight: '1rem'
                                }}>
                                    <SportsSoccer sx={{fontsize: '62px'}} />
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

SignupInformationComponent.propTypes = {
    features: PropTypes.array
}