import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, IconButton, Typography } from '@mui/material'
import { Menu } from '@mui/icons-material'
import Link from 'next/link'

function HeaderComponent ({
  headerClear
}) {
  const [open, setOpen] = useState(false)
  return (
    <header id='back-to-top'>
      <nav className='navbar'>
        {/* Navbar on Desktop */}
        <div className='navbar-desktop'>
          <div className='navbar-brand'>
            <Typography
              component='h1'
              variant='h6'
            >
              LAPANGAN.ID
            </Typography>
          </div>
          {
            !headerClear && (
              <div>
                <Button
                  className='navbar-desktop-action'
                  variant='text'
                  color='inherit'
                  sx={{
                    borderRadius: '10px'
                  }}
                  size='small'
                >
                  Login
                </Button>
                <Button
                  size='small'
                  className='navbar-desktop-action'
                  variant='contained'
                  sx={{
                    borderRadius: '10px'
                  }}
                  color='primary'
                >
                  Daftar
                </Button>
              </div>
            )
          }
        </div>
        {/* Navbar on Mobile */}
        <div className='navbar-mobile'>
          <div className='navbar-logo'>
            <Typography
              component='h1'
              variant='h6'
            >
              LAPANGAN.ID
            </Typography>
          </div>
          <div>
            <IconButton
              onClick={() => setOpen(!open)}
            >
              <Menu />
            </IconButton>
          </div>
        </div>
        <div className={open ? 'navbar-collapse active' : 'navbar-collapse'}>
          {
            open && (
              <ul className='navbar-collapse-menu'>
                <li className='navbar-collapse-menu item'>
                  <Link href='login'>
                    <a>Log In</a>
                  </Link>
                </li>
                <li className='navbar-collapse-menu item'>
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

HeaderComponent.propTypes = {
  headerClear: PropTypes.any
}

export default HeaderComponent
