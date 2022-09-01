import React from 'react'
import PropTypes from 'prop-types'
import {
  Checkbox as MuiCheckbox,
  FormControl,
  FormControlLabel
} from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
  rootControl: {
    width: '100%',
    marginBottom: '1rem'
  }
}))

function Checkbox ({
  name,
  label,
  color,
  size,
  value,
  onChange
}) {
  const classess = useStyles()
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
    <FormControl className={classess.rootControl}>
      <FormControlLabel
        label={label}
        control={
          <MuiCheckbox
            name={name}
            color={color || 'primary'}
            checked={value}
            size={size || 'small'}
            onChange={e => onChange(
              convertParams(name, e.target.checked)
            )}
          />
        }
      ></FormControlLabel>
    </FormControl>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.any,
  color: PropTypes.any,
  size: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.any
}

export default Checkbox
