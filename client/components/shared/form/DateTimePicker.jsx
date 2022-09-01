import React from 'react'
import PropTypes from 'prop-types'
import {
  LocalizationProvider,
  DateTimePicker as MuiDateTimePicker
} from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { TextField } from '@mui/material'

function DateTimePicker ({
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
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MuiDateTimePicker
        label={label}
        value={value}
        renderInput={(params) => <TextField {...params} />}
        onChange={value => onChange(convertParams(name, value))}
      />
    </LocalizationProvider>
  )
}

DateTimePicker.propTypes = {
  name: PropTypes.string,
  label: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.any
}

export default DateTimePicker
