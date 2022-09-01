import React, { useState, useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Autocomplete, CircularProgress, TextField } from '@mui/material'

/**
 *
 * Set Countdown when effect
 *
 * @param {*} delay
 * @returns
 */
const countdown = (delay = 0) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

function AsyncSelect ({
  fetchSelect = () => { },
  label,
  variant,
  colorLoader,
  sizeLoader,
  value
}, props) {
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState([])
  const loading = open && options.length === 0

  useEffect(() => {
    let active = true

    if (!loading) {
      return undefined
    }

    (async () => {
      const response = await fetchSelect().then((res) => {
        if (res?.status === 200) {
          return res.data?.data
        }
      })
      await countdown(1e3)

      if (active) {
        await setOptions(response)
      }
    })()

    return () => {
      active = false
    }
  }, [fetchSelect, loading])

  return (
    <Autocomplete
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      getOptionSelected={
        (option, value) => option.value === value.value
      }
      getOptionLabel={
        option => (option.text ? option.text : '')
      }
      value={value}
      options={options}
      loading={loading}
      renderInput={(params) => {
        <TextField
          {...params}
          label={label}
          variant={variant || 'outlined'}
          InputProps={{
            ...params.inputProps,
            endAdornment: (
              <Fragment>
                {
                  loading
                    ? <CircularProgress
                      color={colorLoader || 'inherit'}
                      size={sizeLoader || 20}
                    />
                    : null
                }
                {params.inputProps.endAdornment}
              </Fragment>
            )
          }}
        />
      }}
    ></Autocomplete>
  )
}

AsyncSelect.propTypes = {
  fetchSelect: PropTypes.func,
  label: PropTypes.string,
  variant: PropTypes.any,
  colorLoader: PropTypes.any,
  sizeLoader: PropTypes.any,
  value: PropTypes.any
}

export default AsyncSelect
