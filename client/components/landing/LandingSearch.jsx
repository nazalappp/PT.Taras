import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Grid, InputAdornment } from '@mui/material'
import Controls from '@/components/shared/form/controls'
import { useRouter } from 'next/router'
import { Form, useForm } from '@/components/core/UseForm'
import { EmojiEvents } from '@mui/icons-material'

function LandingSearch ({
  sports,
  locations
}) {
  const router = useRouter()
  const [initialValues, setInitialValues] = useState({
    sport: '',
    location: '',
    date: null,
    rating: '',
    facility: ''
  })

  const validate = (fieldOfValue = values) => {
    const temp = { ...errors }

    setErrors({
      ...temp
    })

    if (fieldOfValue === values)
      return Object.values(temp).every(x => x === '')
  }

  const {
    values,
    errors,
    setErrors,
    resetForm,
    handleInputChange
  } = useForm(initialValues, true, validate)

  const onSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      router.push({
        pathname: '/search',
        query: {
          sport: 'test',
          city: 'test',
          date: 'test',
          rating: 'test',
          facility: 'test',
          sortBy: 'test'
        }
      })
      resetForm()
      setInitialValues({
        sport: '',
        location: '',
        date: null,
        rating: '',
        facility: ''
      })
    }
  }

  return (
    <section className='landing__search'>
      <h1 className='text-green fs-2'>Cari Tempat Olahraga</h1>
      <h3 className='fs-3'>Lapangan terbaik hanya untuk kamu</h3>
      <Form onSubmit={onSubmit}>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
          >
            <Controls.Select
              options={sports}
              name='sport'
              value={values.sport}
              startAdornment={
                <InputAdornment position='start'>
                  <EmojiEvents />
                </InputAdornment>
              }
              sx={{
                width: '100%'
              }}
              label='Cabang Olahraga'
              onChange={handleInputChange}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
          >
            <Controls.Select
              options={locations}
              name='location'
              value={values.location}
              label='Kota'
              sx={{
                width: '100%'
              }}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={2}
            lg={2}
          >
            <Controls.DatePicker
              name='date'
              value={values.date}
              label='Tanggal'
              onChange={handleInputChange}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={2}
            lg={2}
          >
            <Controls.Input
              name='rating'
              value={values.rating}
              label='Rating'
              onChange={handleInputChange}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={2}
            lg={2}
          >
            <Controls.Input
              name='facility'
              value={values.facility}
              label='Fasilitas'
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction='row'
          justifyContent='flex-end'
          mt={2}
        >
          <Grid
            item
            xs={12}
            md={3}
            lg={3}
          >
            <div className='landing__search__action'>
              <Controls.ButtonV2
                className='btn-green fs-5 p-1 font-weight-bold'
                type='submit'
              >
                Cari Sekarang
              </Controls.ButtonV2>
            </div>
          </Grid>
        </Grid>
      </Form>
    </section>
  )
}

LandingSearch.propTypes = {
  sports: PropTypes.array,
  locations: PropTypes.array
}

export default LandingSearch
