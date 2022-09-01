import React from 'react'
import PropTypes from 'prop-types'

function ButtonV2 ({
  className,
  fullWidth,
  children,
  onClick,
  ...other
}) {
  return (
    <button
      className={`button ${className}`}
      {...fullWidth && { style: { width: '100%' } }}
      onClick={onClick}
      {...other}
    >
      {children}
    </button>
  )
}

ButtonV2.propTypes = {
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  children: PropTypes.any,
  onClick: PropTypes.func
}

export default ButtonV2
