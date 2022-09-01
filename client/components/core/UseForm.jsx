import React, { useState } from 'react'
import PropTypes from 'prop-types'
/**
 *
 * @param {*} initialValues
 * @param {Boolean} validateOnChange
 * @param {*} validate
 */
export function useForm (
  initialValues,
  validateOnChange = false,
  validate
) {
  // * Set Value and Error Form
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  /**
   * Set Handle Input Change
   * @param {*} e
   */
  const handleInputChange = e => {
    const { name, value } = e.target
    // * Set Dynamic Value from Form
    setValues({
      ...values,
      [name]: value
    })

    // * Validate When On Change
    if (validateOnChange)
      validate({ [name]: value })
  }

  /**
   * Reset Form
   */
  const resetForm = () => {
    setValues(initialValues)
    setErrors({})
  }

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm

  }
}

/**
 *
 * @param {*} props
 */
export function Form ({
  children,
  ...other
}) {
  return (
    <form
      autoComplete='off'
      {...other}
    >
      {children}
    </form>
  )
}

Form.propTypes = {
  children: PropTypes.node
}
