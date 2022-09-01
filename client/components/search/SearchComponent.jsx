import {
  ArrowBackIos,
  ArrowForwardIos, EmojiEvents, Star
} from '@mui/icons-material'
import { Container, Grid, InputAdornment } from '@mui/material'
import React, { useState } from 'react'
import LayoutComponent from '../core/layout/LayoutComponent'
import { Form, useForm } from '../core/UseForm'
import Controls from '../shared/form/controls'
import PropTypes from 'prop-types'
import Image from 'next/image'

function SearchComponent ({ sports, locations }) {
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
    <LayoutComponent
      type={2}
      bannerText='Lapangan'
    >
      <section className='search'>
        <Container
          maxWidth='lg'
        >
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
              xl={3}
            >
              <div className='search__wrapper'>
                <Form onSubmit={onSubmit}>
                  <div className='search__title'>
                    <h1 className='text-green fs-6'>
                      Filter
                    </h1>
                  </div>
                  <div className='search__input'>
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

                    <Controls.DatePicker
                      name='date'
                      value={values.date}
                      label='Tanggal'
                      onChange={handleInputChange}
                    />

                    <Controls.Input
                      name='rating'
                      value={values.rating}
                      label='Rating'
                      onChange={handleInputChange}
                    />

                    <Controls.Input
                      name='facility'
                      value={values.facility}
                      label='Fasilitas'
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className='search__title'>
                    <h1 className='text-green fs-6'>
                      Sort By
                    </h1>
                  </div>
                  <div className='search__input mb-3'>
                    <Controls.Input
                      name='facility'
                      value={values.facility}
                      label='Rekomendasi'
                      onChange={handleInputChange}
                    />
                  </div>
                  <Controls.ButtonV2 className='btn-green' fullWidth>
                    Cari Sekarang
                  </Controls.ButtonV2>
                </Form>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={9}
              lg={9}
              xl={9}
            >
              <div className='search__result'>
                <div className='search__card mb-2'>
                  <div className='search__card__media'>
                    <div className='search__card__media__image'>
                      <Image
                        src='https://source.unsplash.com/random'
                        alt='test'
                        layout='fill'
                        objectFit='cover'
                      />
                    </div>
                  </div>
                  <div className='search__card__content'>
                    <div className='search__card__title'>
                      <h1 className='text-green fs-8 fs-md-5 fs-lg-5 fs-xl-5'>
                        Lapangan A
                      </h1>
                      <div
                        className='search__rating fs-8 fs-md-5 fs-lg-5 fs-xl-5'
                      >
                        <div className='search__rating__icon'>
                          <Star />
                        </div>
                        <div className='search__rating__number'>
                          4.5
                        </div>
                      </div>
                    </div>
                    <div className='search__card__caption fs-8 fs-md-5 fs-lg-5 fs-xl-5'>
                      Jl. Merdeka No 7, Bandung, Jawa Barat
                    </div>
                    <div className='search__card__footer'>
                      <h1
                        className='font-weight-bold fs-8 fs-md-6 fs-lg-6 fs-xl-6'
                      >
                        Sepakbola . Bandung
                      </h1>
                      <div
                        className='search__price text-green text-right fs-8 fs-md-5 fs-lg-5 fs-xl-5'
                      >
                        Rp 250.000
                      </div>
                    </div>
                  </div>
                </div>
                <div className='search__card mb-2'>
                  <div className='search__card__media'>
                    <div className='search__card__media__image'>
                      <Image
                        src='https://source.unsplash.com/random'
                        alt='test'
                        layout='fill'
                        objectFit='cover'
                      />
                    </div>
                  </div>
                  <div className='search__card__content'>
                    <div className='search__card__title'>
                      <h1 className='text-green fs-8 fs-md-5 fs-lg-5 fs-xl-5'>
                        Lapangan A
                      </h1>
                      <div
                        className='search__rating fs-8 fs-md-5 fs-lg-5 fs-xl-5'
                      >
                        <div className='search__rating__icon'>
                          <Star />
                        </div>
                        <div className='search__rating__number'>
                          4.5
                        </div>
                      </div>
                    </div>
                    <div className='search__card__caption fs-8 fs-md-5 fs-lg-5 fs-xl-5'>
                      Jl. Merdeka No 7, Bandung, Jawa Barat
                    </div>
                    <div className='search__card__footer'>
                      <h1
                        className='font-weight-bold fs-8 fs-md-6 fs-lg-6 fs-xl-6'
                      >
                        Sepakbola . Bandung
                      </h1>
                      <div
                        className='search__price text-green text-right fs-8 fs-md-5 fs-lg-5 fs-xl-5'
                      >
                        Rp 250.000
                      </div>
                    </div>
                  </div>
                </div>
                <div className='search__card mb-2'>
                  <div className='search__card__media'>
                    <div className='search__card__media__image'>
                      <Image
                        src='https://source.unsplash.com/random'
                        alt='test'
                        layout='fill'
                        objectFit='cover'
                      />
                    </div>
                  </div>
                  <div className='search__card__content'>
                    <div className='search__card__title'>
                      <h1 className='text-green fs-8 fs-md-5 fs-lg-5 fs-xl-5'>
                        Lapangan A
                      </h1>
                      <div
                        className='search__rating fs-8 fs-md-5 fs-lg-5 fs-xl-5'
                      >
                        <div className='search__rating__icon'>
                          <Star />
                        </div>
                        <div className='search__rating__number'>
                          4.5
                        </div>
                      </div>
                    </div>
                    <div className='search__card__caption fs-8 fs-md-5 fs-lg-5 fs-xl-5'>
                      Jl. Merdeka No 7, Bandung, Jawa Barat
                    </div>
                    <div className='search__card__footer'>
                      <h1
                        className='font-weight-bold fs-8 fs-md-6 fs-lg-6 fs-xl-6'
                      >
                        Sepakbola . Bandung
                      </h1>
                      <div
                        className='search__price text-green text-right fs-8 fs-md-5 fs-lg-5 fs-xl-5'
                      >
                        Rp 250.000
                      </div>
                    </div>
                  </div>
                </div>
                <div className='search__card mb-2'>
                  <div className='search__card__media'>
                    <div className='search__card__media__image'>
                      <Image
                        src='https://source.unsplash.com/random'
                        alt='test'
                        layout='fill'
                        objectFit='cover'
                      />
                    </div>
                  </div>
                  <div className='search__card__content'>
                    <div className='search__card__title'>
                      <h1 className='text-green fs-8 fs-md-5 fs-lg-5 fs-xl-5'>
                        Lapangan A
                      </h1>
                      <div
                        className='search__rating fs-8 fs-md-5 fs-lg-5 fs-xl-5'
                      >
                        <div className='search__rating__icon'>
                          <Star />
                        </div>
                        <div className='search__rating__number'>
                          4.5
                        </div>
                      </div>
                    </div>
                    <div className='search__card__caption fs-8 fs-md-5 fs-lg-5 fs-xl-5'>
                      Jl. Merdeka No 7, Bandung, Jawa Barat
                    </div>
                    <div className='search__card__footer'>
                      <h1
                        className='font-weight-bold fs-8 fs-md-6 fs-lg-6 fs-xl-6'
                      >
                        Sepakbola . Bandung
                      </h1>
                      <div
                        className='search__price text-green text-right fs-8 fs-md-5 fs-lg-5 fs-xl-5'
                      >
                        Rp 250.000
                      </div>
                    </div>
                  </div>
                </div>
                <div className='search__card mb-2'>
                  <div className='search__card__media'>
                    <div className='search__card__media__image'>
                      <Image
                        src='https://source.unsplash.com/random'
                        alt='test'
                        layout='fill'
                        objectFit='cover'
                      />
                    </div>
                  </div>
                  <div className='search__card__content'>
                    <div className='search__card__title'>
                      <h1 className='text-green fs-8 fs-md-5 fs-lg-5 fs-xl-5'>
                        Lapangan A
                      </h1>
                      <div
                        className='search__rating fs-8 fs-md-5 fs-lg-5 fs-xl-5'
                      >
                        <div className='search__rating__icon'>
                          <Star />
                        </div>
                        <div className='search__rating__number'>
                          4.5
                        </div>
                      </div>
                    </div>
                    <div className='search__card__caption fs-8 fs-md-5 fs-lg-5 fs-xl-5'>
                      Jl. Merdeka No 7, Bandung, Jawa Barat
                    </div>
                    <div className='search__card__footer'>
                      <h1
                        className='font-weight-bold fs-8 fs-md-6 fs-lg-6 fs-xl-6'
                      >
                        Sepakbola . Bandung
                      </h1>
                      <div
                        className='search__price text-green text-right fs-8 fs-md-5 fs-lg-5 fs-xl-5'
                      >
                        Rp 250.000
                      </div>
                    </div>
                  </div>
                </div>
                <div className='search__pagination'>
                  <ul className='search__pagination__list'>
                    <li className='search__pagination__list__item next'>
                      <Controls.ButtonV2
                        className='search__pagination__button prev fs-8 fs-md-4 fs-lg-4 fs-xl-4'
                      >
                        <ArrowBackIos />
                      </Controls.ButtonV2>
                    </li>
                    <li className='search__pagination__list__item'>
                      <Controls.ButtonV2
                        className='search__pagination__button active'
                      >
                        1
                      </Controls.ButtonV2>
                    </li>
                    <li className='search__pagination__list__item'>
                      <Controls.ButtonV2
                        className='search__pagination__button fs-8 fs-md-4 fs-lg-4 fs-xl-4'
                      >
                        2
                      </Controls.ButtonV2>
                    </li>
                    <li className='search__pagination__list__item'>
                      <Controls.ButtonV2
                        className='search__pagination__button fs-8 fs-md-4 fs-lg-4 fs-xl-4'
                      >
                        3
                      </Controls.ButtonV2>
                    </li>
                    <li className='search__pagination__list__item'>
                      <Controls.ButtonV2
                        className='search__pagination__button fs-8 fs-md-4 fs-lg-4 fs-xl-4'
                      >
                        4
                      </Controls.ButtonV2>
                    </li>
                    <li className='search__pagination__list__item'>
                      <Controls.ButtonV2
                        className='search__pagination__button fs-8 fs-md-4 fs-lg-4 fs-xl-4'
                      >
                        5
                      </Controls.ButtonV2>
                    </li>
                    <li className='search__pagination__list__item'>
                      <Controls.ButtonV2
                        className='search__pagination__button fs-8 fs-md-4 fs-lg-4 fs-xl-4'
                      >
                        ...
                      </Controls.ButtonV2>
                    </li>
                    <li className='search__pagination__list__item'>
                      <Controls.ButtonV2
                        className='search__pagination__button fs-8 fs-md-4 fs-lg-4 fs-xl-4'
                      >
                        10
                      </Controls.ButtonV2>
                    </li>
                    <li className='search__pagination__list__item'>
                      <Controls.ButtonV2
                        className='search__pagination__button next fs-8 fs-md-4 fs-lg-4 fs-xl-4'
                      >
                        <ArrowForwardIos />
                      </Controls.ButtonV2>
                    </li>
                  </ul>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </LayoutComponent>
  )
}

SearchComponent.propTypes = {
  sports: PropTypes.array,
  locations: PropTypes.array
}

export default SearchComponent
