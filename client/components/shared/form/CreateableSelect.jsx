import React from 'react'
import PropTypes from 'prop-types'
import { Autocomplete, createFilterOptions, TextField } from '@mui/material'

const filter = createFilterOptions()

function CreateableSelect ({
  name,
  label,
  value,
  size,
  variant,
  options,
  error = null,
  onChange
}) {
  /**
   * Convert To Definition Event Params
   * @param {*} name
   * @param {*} value
   */
  const convertParams = (name, val) => {
    if (typeof val === 'string') {
      const value = val
      const obj = {
        target: { name, value }
      }
      return obj
    } else if (val && val.inputval) {
      // Create a new val from the user input
      const value = val.inputValue
      const obj = {
        target: { name, value }
      }
      return obj
    } else {
      const value = val
      const obj = {
        target: { name, value }
      }
      return obj
    }
  }
  return (
    <Autocomplete
      multiple
      value={value}
      size={size || 'small'}
      options={options}
      onChange={
        (e, v) => onChange(convertParams(name, v))
      }
      filterOptions={(options, params) => {
        const filtered = filter(options, params)

        // Suggest the creation of a new value
        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            title: `Add "${params.inputValue}"`
          })
        }

        return filtered
      }}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue
        }
        // Regular option
        return option.text
      }}
      renderOption={(option) => option.text}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      freeSolo
      renderInput={(params) => (
        <TextField
          {...params}
          name={name}
          label={label}
          variant={variant || 'outlined'}
          {...(error && { error: true, helperText: error })}
          InputProps={{ ...params.InputProps, type: 'search' }}
        />
      )}
    />
  )
}

CreateableSelect.propTypes = {
  name: PropTypes.string,
  label: PropTypes.any,
  value: PropTypes.any,
  size: PropTypes.any,
  variant: PropTypes.any,
  options: PropTypes.array,
  error: PropTypes.any,
  onChange: PropTypes.any
}

export default CreateableSelect
