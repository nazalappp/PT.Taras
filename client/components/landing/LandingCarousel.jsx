import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { Paper, Skeleton, Grid } from '@mui/material'
import { SwiperSlide } from 'swiper/react'
import NextSwiper from '@/components/shared/NextSwiper'
import { useSelector } from 'react-redux'
import Link from 'next/link'

function LandingCarousel ({
  post
}) {
  const sliderState = useSelector(state => state.sliders)
  return (
    <Fragment>
      {
        sliderState.loading && (
          <Skeleton variant='rectangular' animation='wave' className='skeleton-carousel' />
        )
      }

      {
        !sliderState.loading && (
          <Paper
            className='landing-carousel hidden-md'
            component='section'
          >
            <NextSwiper>
              {
                sliderState.sliders?.length > 0 && (
                  sliderState.sliders.map((item, index) => (
                    <SwiperSlide
                      key={index}
                    >
                      {
                        <Image
                          className='image-carousel'
                          src={item.banner}
                          alt={item.alt}
                          layout='fill'
                          objectFit='cover'
                        />
                      }
                      <div className='carousel-wrapper'></div>
                      <Grid container>
                        <Grid
                          item
                          md={6}

                        >
                          <div className='carousel-wrapper-content'>
                            <h1>
                              {item.title}
                            </h1>
                            <h5>
                              {item.body}
                            </h5>
                            <Link
                              variant='subtitle1'
                              href={item.button_url}
                            >
                              <a className='button btn-green'>
                                {item.button_text}
                              </a>
                            </Link>
                          </div>
                        </Grid>
                      </Grid>
                    </SwiperSlide>
                  ))
                )
              }
            </NextSwiper>
            {/* Increase the priority of the hero background image */}
          </Paper>
        )
      }
    </Fragment>

  )
}

LandingCarousel.propTypes = {
  post: PropTypes.any
}

export default LandingCarousel
