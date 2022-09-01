import React from 'react'
import PropTypes from 'prop-types'
import { Container, Grid } from '@mui/material'
import LayoutComponent from '../LayoutComponent'
import Card from '@/components/shared/card/Card'

function UserLayoutComponent ({
  children
}) {
  return (
    <LayoutComponent headerClear={true}>
      <section className='user'>
        <Container maxWidth='lg'>
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              sm={12}
              md={3}
              lg={3}
            >
              <Card fillAction={false}>
                <div className='user-menu'>
                  <ul className='user-menu-list'>
                    <li className='user-menu-list item'>
                      <p>Riwayat Pemesanan</p>
                    </li>
                    <li className='user-menu-list item'>
                      <p>Riwayat Penilaian</p>
                    </li>
                    <li className='user-menu-list item'>
                      <p>Membership</p>
                    </li>
                    <li className='user-menu-list item'>
                      <p>Info Berlangganan</p>
                    </li>
                    <li className='user-menu-list item'>
                      <p>Profil</p>
                    </li>
                    <li className='user-menu-list item'>
                      <p>Keluar Akun</p>
                    </li>
                  </ul>
                </div>
              </Card>
            </Grid>
            <Grid
              item
              sm={12}
              md={9}
              lg={9}
            >
              <Card fillAction={false}>
                {children}
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>
    </LayoutComponent>
  )
}

UserLayoutComponent.propTypes = {
  children: PropTypes.node
}

export default UserLayoutComponent
