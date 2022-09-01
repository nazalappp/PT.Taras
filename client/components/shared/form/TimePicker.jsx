import React from 'react'
import PropTypes from 'prop-types'
import { LocalizationProvider, TimePicker as MuiTimePicker } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { TextField } from '@mui/material'

function TimePickert ({
  name,
  label,
  value,
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
      <MuiTimePicker
        label={label}
        value={value}
        renderInput={(params) => <TextField {...params} />}
        onChange={value => onChange(convertParams(name, value))}
      />
    </LocalizationProvider>
  )
}

TimePickert.propTypes = {
  name: PropTypes.string,
  label: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.any
}

export default TimePickert
