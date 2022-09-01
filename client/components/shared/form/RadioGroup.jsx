import React from 'react'
import PropTypes from 'prop-types'
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup as MuiRadioGroup
} from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
  rootControl: {
    width: '100%',
    marginTop: '1rem',
    marginBottom: '1rem'
  }
}))

function RadioGroup ({
  name,
  label,
  value,
  items,
  onChange
}) {
  const classess = useStyles()
  return (
    <FormControl component='fieldset' className={classess.rootControl}>
      <FormLabel component='legend'>{label}</FormLabel>
      <MuiRadioGroup
        row
        aria-label={label}
        name={name}
        value={value}
        onChange={onChange}
      >
        {
          items.map((item, index) => (
            <FormControlLabel
              key={index}
              value={item.id}
              control={<Radio />}
              label={item.text}
            />
          ))
        }
      </MuiRadioGroup>
    </FormControl>
  )
}

RadioGroup.propTypes = {
  name: PropTypes.string,
  label: PropTypes.any,
  value: PropTypes.any,
  items: PropTypes.array,
  onChange: PropTypes.any
}

export default RadioGroup
