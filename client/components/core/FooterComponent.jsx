import React from 'react'
import { Button, Container, Grid } from '@mui/material'
import Controls from '../shared/form/controls'
import Link from 'next/link'
import Image from 'next/image'

export default function FooterComponent () {
  return (
    <footer className='footer'>
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
          >
            {/* <h3 className='fs-4 font-weight-bold'>
              LAPANGAN.ID
            </h3> */}
            <div className='footer__brand'></div>
            <p className='fs-6 mb-2'>
              Cara asyik cari tempat olahraga!
            </p>
            <Controls.ButtonV2
              className='btn-black fs-5 p-1 font-weight-bold btn-help'
            >
              Jadi Partner Lapangan
            </Controls.ButtonV2>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={2}
            lg={2}
          >
            <h3 className='fs-4 font-weight-bold'>
              Dukungan
            </h3>
            <ul className='footer__list'>
              <li className='footer__list__item'>
                <Link href='#'>
                  <a className='footer__link fs-6'>
                    Pusat Bantuan
                  </a>
                </Link>
              </li>
              <li className='footer__list__item'>
                <Link href='#'>
                  <a className='footer__link fs-6'>
                    Kebijakan Privasi
                  </a>
                </Link>
              </li>
              <li className='footer__list__item'>
                <Link href='#'>
                  <a className='footer__link fs-6'>
                    Syarat dan Ketentuan
                  </a>
                </Link>
              </li>
              <li className='footer__list__item'>
                <Link href='#'>
                  <a className='footer__link fs-6'>
                    Tentang Kami
                  </a>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={2}
            lg={2}
          >
            <h3 className='fs-4 font-weight-bold'>
              Lainya
            </h3>
            <ul className='footer__list'>
              <li className='footer__list__item'>
                <Link href='#'>
                  <a className='footer__link fs-6'>
                    Blog
                  </a>
                </Link>
              </li>
              <li className='footer__list__item'>
                <Link href='#'>
                  <a className='footer__link fs-6'>
                    Promo
                  </a>
                </Link>
              </li>
              <li className='footer__list__item'>
                <Link href='#'>
                  <a className='footer__link fs-6'>
                    Membership
                  </a>
                </Link>
              </li>
              <li className='footer__list__item'>
                <Link href='#'>
                  <a className='footer__link fs-6'>
                    Store
                  </a>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
          >
            <h3 className='fs-4 font-weight-bold'>
              Partner Pembayaran
            </h3>
            <ul className='footer__partner'>
              <li className='footer__partner__item'>
                <Button
                  className='partner__payment'
                  disabled
                >
                  <Image
                    src='/images/master-card.png'
                    alt='Master Card'
                    layout='fill'
                    objectFit='contain'
                  />
                </Button>
              </li>
              <li className='footer__partner__item'>
                <Button
                  className='partner__payment'
                  disabled
                >
                  <Image
                    src='/images/visa.png'
                    alt='Master Card'
                    layout='fill'
                    objectFit='contain'
                  />
                </Button>
              </li>
              <li className='footer__partner__item'>
                <Button
                  className='partner__payment'
                  disabled
                >
                  <Image
                    src='/images/american-express.png'
                    alt='Master Card'
                    layout='fill'
                    objectFit='contain'
                  />
                </Button>
              </li>
            </ul>
            <ul
              className='footer__partner'
              style={{ marginTop: '-20px' }}
            >
              <li className='footer__partner__item'>
                <Button
                  className='partner__payment'
                  disabled
                >
                  <Image
                    src='/images/master-card.png'
                    alt='Master Card'
                    layout='fill'
                    objectFit='contain'
                  />
                </Button>
              </li>
              <li className='footer__partner__item'>
                <Button
                  className='partner__payment'
                  disabled
                >
                  <Image
                    src='/images/visa.png'
                    alt='Master Card'
                    layout='fill'
                    objectFit='contain'
                  />
                </Button>
              </li>
              <li className='footer__partner__item'>
                <Button
                  className='partner__payment'
                  disabled
                >
                  <Image
                    src='/images/american-express.png'
                    alt='Master Card'
                    layout='fill'
                    objectFit='contain'
                  />
                </Button>
              </li>
            </ul>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={2}
            lg={2}
          >
            <h3 className='fs-4 font-weight-bold visibility-hidden hidden-sm'>
              Download CTA
            </h3>
            <ul className='footer__download'>
              <li className='footer__download__item btn-cta'>
                <Link href='#'>
                  <a
                    className='footer__download__item__cta'
                    style={{
                      backgroundImage: 'url(/images/app-store-dark.png)'
                    }}
                  ></a>
                </Link>
              </li>
              <li className='footer__download__item btn-cta'>
                <Link href='#'>
                  <a
                    className='footer__download__item__cta'
                    style={{
                      backgroundImage: 'url(/images/google-play-dark.png)'
                    }}
                  ></a>
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Grid
          container
          direction='row'
          justifyContent='flex-end'
          spacing={2}
          mb={3}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
          >
            <div className='footer__help'>
              <Controls.ButtonV2
                className='btn-green-outlined btn-help'
              >
                Perlu Bantuan ?
              </Controls.ButtonV2>
            </div>
          </Grid>
        </Grid>
        <hr style={{ border: '0.5px solid #fff' }} />
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
            <p className='font-weight-bold fs-7 footer__copyright'>
              Copyright &copy; 2021 PT. Awalnya Satu Babak
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <ul className='footer__social__media'>
              <li className='footer__social__media__item'>
                <Button className='btn-social-media'>
                  <Image
                    src='/icon/facebook-green.png'
                    alt='facebook'
                    layout='fill'
                    objectFit='contain'
                  />
                </Button>
              </li>
              <li className='footer__social__media__item'>
                <Button className='btn-social-media'>
                  <Image
                    src='/icon/instagram-green.png'
                    alt='instagram'
                    layout='fill'
                    objectFit='contain'
                  />
                </Button>
              </li>
              <li className='footer__social__media__item'>
                <Button className='btn-social-media'>
                  <Image
                    src='/icon/twitter-green.png'
                    alt='twitter'
                    layout='fill'
                    objectFit='contain'
                  />
                </Button>
              </li>
              <li className='footer__social__media__item'>
                <Button className='btn-social-media'>
                  <Image
                    src='/icon/tiktok-green.png'
                    alt='tiktok'
                    layout='fill'
                    objectFit='contain'
                  />
                </Button>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}
