import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@mui/material'

function Input ({
  name,
  label,
  value,
  autoComplete = 'off',
  variant,
  size,
  error = null,
  onChange,
  ...other
}) {
  return (
    <TextField
      margin='dense'
      variant={variant || 'outlined'}
      label={label}
      name={name}
      value={value}
      size={size || 'small'}
      onChange={onChange}
      fullWidth
      {...other}
      autoComplete={autoComplete}
      {...(error && { error: true, helperText: error })}
    />
  )
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.any,
  value: PropTypes.any,
  autoComplete: PropTypes.any,
  variant: PropTypes.any,
  size: PropTypes.any,
  error: PropTypes.any,
  onChange: PropTypes.any
}

export default Input
