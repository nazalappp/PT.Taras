import React from 'react'
import PropTypes from 'prop-types'
import { Autocomplete, TextField } from '@mui/material'

function FilterSelect ({
  name,
  label,
  value,
  size,
  sizeInput,
  margin,
  variant,
  options,
  error = null,
  onChange,
  ...other
}) {
  const filteredOptions = Array.isArray(value)
    ? options.filter(item => !value?.map(i => i?.id)?.includes(item?.id))
    : options.filter(item => item.id !== value?.id)

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
    <Autocomplete
      freeSolo
      size={size || 'small'}
      getOptionSelected={(option, value) => option.value === value}
      getOptionLabel={option => (option.text ? option.text : '')}
      options={filteredOptions}
      value={value}
      onChange={(e, v) => onChange(convertParams(name, v))}
      {...other}
      renderInput={(params) => (
        <TextField
          {...params}
          name={name}
          sizeInput={sizeInput || 'small'}
          label={label}
          margin={margin || 'normal'}
          variant={variant || 'outlined'}
          inputProps={{ ...params.inputProps, type: 'search' }}
          {...(error && { error: true, helperText: error })}
        />
      )}
    />
  )
}

FilterSelect.propTypes = {
  name: PropTypes.string,
  label: PropTypes.any,
  value: PropTypes.any,
  size: PropTypes.any,
  sizeInput: PropTypes.any,
  margin: PropTypes.any,
  variant: PropTypes.any,
  options: PropTypes.array,
  error: PropTypes.any,
  onChange: PropTypes.func
}

export default FilterSelect
