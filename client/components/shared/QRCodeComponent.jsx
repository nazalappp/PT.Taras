import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

function QRCodeComponent ({ base64 }) {
  return (
    <Image
      src={base64}
      alt='QR Code'
      width='250'
      height='250'
    />
  )
}

QRCodeComponent.propTypes = {
  base64: PropTypes.string.isRequired
}

export default QRCodeComponent
