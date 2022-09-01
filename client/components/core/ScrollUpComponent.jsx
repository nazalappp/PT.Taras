import React from 'react'
import PropTypes from 'prop-types'
import { useScrollTrigger, Zoom } from '@mui/material'
import { Box } from '@mui/system'

function ScrollUpComponent ({
  children,
  window
}) {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  })

  const handleClick = (event) => {
    const anchor = (event.target.onwerDocument || document).querySelector(
      '#back-to-top'
    )

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  }

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role='presentation'
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16
        }}
      >
        {children}
      </Box>
    </Zoom>
  )
}

ScrollUpComponent.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
}

export default ScrollUpComponent
