import React, { Fragment, useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import PropTypes from 'prop-types'
import NextSwiper from '../shared/NextSwiper'
import Image from 'next/image'
import { Button, IconButton, Skeleton } from '@mui/material'
import Controls from '../shared/form/controls'
import { useSelector } from 'react-redux'
import { Menu } from '@mui/icons-material'
import Link from 'next/link'

function HeaderV2Component ({
  landing,
  bannerText
}) {
  const sliderState = useSelector(state => state.sliders)
  const [open, setopen] = useState(false)
  return (
    <header className='header__v2'>
      <nav className='nav__v2__desktop hidden-sm'>
        <div className='navbar__v2__desktop'>
          <div>
            <Button
              className='navbar__brand'
              disabled
            >
              <Image
                src='/lapangan.png'
                alt='Master Card'
                layout='fill'
                objectFit='contain'
                priority
              />
            </Button>
          </div>
          <ul className='navbar__menu'>
            <li className='navbar__menu__item active'>
              <p className='fs-7'>Home</p>
            </li>
            <li className='navbar__menu__item'>
              <p className='fs-7'>Lapangan</p>
            </li>
            <li className='navbar__menu__item'>
              <p className='fs-7'>Partner</p>
            </li>
            <li className='navbar__menu__item'>
              <p className='fs-7'>Blog</p>
            </li>
          </ul>
          <ul className='navbar__action'>
            <li className='navbar__action__item'>
              <Controls.Button
                className='btn-green fs-5'
                text='Log In'
              />
            </li>
            <li className='navbar__action__item'>
              <Controls.Button
                className='btn-transparent fs-5'
                text='Daftar'
              />
            </li>
          </ul>
        </div>
      </nav>
      {
        landing
          ? (
            <Fragment>
              {
                sliderState.loading && (
                  <Skeleton
                    variant='rectangular'
                    animation='wave'
                    className='skeleton-carousel'
                  />
                )
              }

              {
                !sliderState.loading && (
                  <section
                    className='landing-carousel hidden-sm'
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
                            </SwiperSlide>
                          ))
                        )
                      }
                    </NextSwiper>
                    {/* Increase the priority of the hero background image */}
                  </section>
                )
              }
            </Fragment>
          )
          : <Fragment>
            <section className='banner hidden-sm'>
              {
                <Image
                  className='image-carousel'
                  src='https://source.unsplash.com/random'
                  alt='test'
                  layout='fill'
                  objectFit='cover'
                />
              }
              <div className='banner__wrapper'></div>
              <div className='banner__wrapper__content'>
                <h1 className='text-center font-weight-bold fs-1'>
                  {bannerText}
                </h1>
              </div>
            </section>
          </Fragment>
      }

      <nav className='nav__v2__mobile hidden-md'>
        <div className='navbar__v2__mobile__wrap'>
          <div>
            <h1>LAPANGAN.ID</h1>
            {/* <Button
              className='navbar__brand'
              disabled
            >
              <Image
                src='/lapangan.png'
                alt='Master Card'
                layout='fill'
                objectFit='contain'
              />
            </Button> */}
          </div>
          <div>
            <IconButton
              onClick={() => setopen(!open)}
            >
              <Menu />
            </IconButton>
          </div>
        </div>
        <div
          className={
            open
              ? 'navbar__v2__mobile__collapse active'
              : 'navbar__v2__mobile__collapse'
          }
        >
          {
            open && (
              <ul className='navbar__v2__mobile__collapse__menu'>
                <li className='navbar__v2__mobile__collapse__menu item'>
                  <Link href='login'>
                    <a>Log In</a>
                  </Link>
                </li>
                <li className='navbar__v2__mobile__collapse__menu item'>
                  <Link href='register'>
                    <a>Daftar</a>
                  </Link>
                </li>
              </ul>
            )
          }
        </div>
      </nav>
    </header>
  )
}

HeaderV2Component.propTypes = {
  landing: PropTypes.bool,
  bannerText: PropTypes.string
}

export default HeaderV2Component
