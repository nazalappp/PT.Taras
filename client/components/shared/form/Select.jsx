import React from 'react'
import PropTypes from 'prop-types'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect
} from '@mui/material'

import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
  formControl: {
  },
  select: {
  },
  inputLabel: {
    marginTop: theme.spacing(-1)
  }
}))

function Select ({
  name,
  label,
  value,
  variant,
  margin,
  size,
  options,
  className,
  placeholder,
  startAdornment,
  error = null,
  onChange,
  ...other
}) {
  const classes = useStyles()
  return (
    <FormControl
      variant={variant || 'outlined'}
      margin='dense'
      className={
        className
          ? `${classes.formControl} ${className}`
          : classes.formControl
      }
      {...other}
      {...(error && { error: true })}
    >
      {
        label && (
          <InputLabel
            className={classes.inputLabel}
          >
            {label}
          </InputLabel>
        )
      }
      <MuiSelect
        className={classes.select}
        label={label}
        name={name}
        margin='dense'
        value={value}
        placeholder={placeholder}
        startAdornment={startAdornment}
        size={size || 'small'}
        onChange={onChange}
      >
        {
          options.map((item, index) => (
            <MenuItem
              key={index}
              value={item.value}
            >
              {item.text}
            </MenuItem>
          ))
        }
      </MuiSelect>
    </FormControl>
  )
}

Select.propTypes = {
  name: PropTypes.string,
  label: PropTypes.any,
  value: PropTypes.any,
  variant: PropTypes.any,
  margin: PropTypes.any,
  size: PropTypes.any,
  options: PropTypes.array,
  error: PropTypes.any,
  placeholder: PropTypes.string,
  startAdornment: PropTypes.any,
  className: PropTypes.any,
  onChange: PropTypes.any
}

export default Select
