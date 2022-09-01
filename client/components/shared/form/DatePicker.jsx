import React from 'react'
import PropTypes from 'prop-types'
import { LocalizationProvider, DatePicker as MuiDatePicker } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { TextField } from '@mui/material'

function DatePicker ({
  name,
  label,
  value,
  error = null,
  onChange
}) {
  /**
   * Convert To Definition Event Params
   * @param {*} name
   * @param {*} value
   */
  const convertParams = (name, value) => ({
    target: {
      name, value
    }
  })

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} >
      <MuiDatePicker
        views={['day', 'month', 'year']}
        label={label}
        value={value}
        sx={{
          height: 'auto'
        }}
        onChange={date => onChange(convertParams(name, date))}
        InputAdornmentProps={{ position: 'start' }}
        renderInput={(params) =>
          <TextField
            {...params}
            size='small'
            margin='dense'
            fullWidth
            {...(error && { error: true, helperText: error })}
          />
        }
      />
    </LocalizationProvider>
  )
}

DatePicker.propTypes = {
  name: PropTypes.string,
  label: PropTypes.any,
  value: PropTypes.any,
  error: PropTypes.any,
  onChange: PropTypes.any
}

export default DatePicker
