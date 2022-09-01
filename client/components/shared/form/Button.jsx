import React from 'react'
import PropTypes from 'prop-types'
import {
  Button as MuiButton,
  CircularProgress
} from '@mui/material'

import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
  label: {
    textTransform: 'none'
  }
}))

function Button ({
  text,
  size,
  isBusy = false,
  color,
  variant,
  onClick,
  maxWidth,
  maxHeight,
  ...other
}) {
  const classes = useStyles()

  return (
    <MuiButton
      variant={variant || 'contained'}
      size={size || 'small'}
      color={color || 'primary'}
      disabled={isBusy}
      onClick={onClick}
      {...other}
      classes={{
        root: classes.root,
        label: classes.label
      }}
    >
      {
        isBusy
          ? <CircularProgress />
          : text
      }
    </MuiButton>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.any,
  isBusy: PropTypes.bool,
  color: PropTypes.any,
  variant: PropTypes.string,
  maxWidth: PropTypes.number,
  maxHeight: PropTypes.number,
  onClick: PropTypes.any
}

export default Button
