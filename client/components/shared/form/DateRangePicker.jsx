import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import {
  LocalizationProvider,
  DateRangePicker as MuiDateRangePicker
} from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'

function DateRangePicker ({
  name,
  label,
  value,
  calendar,
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
      <div>
        <Typography
          sx={{ mt: 2, mb: 1 }}
        >
          {label}
        </Typography>
        <MuiDateRangePicker
          calendars={calendar || 1}
          value={value}
          name={name}
          onChange={value => onChange(convertParams(name, value))}
          renderInput={(startProps, endProps) => (
            <Fragment>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </Fragment>
          )}
        />
      </div>
    </LocalizationProvider>
  )
}

DateRangePicker.propTypes = {
  name: PropTypes.string,
  label: PropTypes.any,
  value: PropTypes.any,
  calendar: PropTypes.number,
  onChange: PropTypes.any
}

export default DateRangePicker
