import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import Cardless from '../shared/card/Cardless'

function LandingPartner ({
  partners
}) {
  const arenaState = useSelector(state => state.arenas)
  return (
    <section className='landing-partner'>
      <h1 className='text-green fs-2'>Partner</h1>
      <h4 className='fs-4'>
        Bekerja sama dengan berbagai partner terbaik dari seluruh Indonesia
      </h4>
      <Grid
        container
        spacing={1}
      >
        {
          arenaState?.arenas.length > 0 && (
            arenaState?.arenas.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={2}
                lg={2}
                key={index}
              >
                <Cardless
                  wrapAction
                  maxHeight={140}
                  title={item.name}
                  image={item.logo}
                  subtitle={'Jerome Bell'}
                />
              </Grid>
            ))
          )
        }
      </Grid>
    </section>
  )
}

LandingPartner.propTypes = {
  partners: PropTypes.array
}

export default LandingPartner
