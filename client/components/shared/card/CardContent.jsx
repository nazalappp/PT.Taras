import React from 'react'
import PropTypes from 'prop-types'

function CardContent ({
  title,
  subtitle,
  children
}) {
  return (
    <div className='card-content'>
      <p className='card-title'>
        {title}
      </p>
      {
        subtitle && (
          <div className='card-subtitle'>
            {subtitle}
          </div>
        )
      }
      <div className='card-body'>
        {children}
      </div>
    </div>
  )
}

CardContent.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node
}

export default CardContent
