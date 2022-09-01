import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

function CardMedia ({
  image,
  classImage,
  title
}) {
  return (
    <div className={`card-media ${classImage}`}>
      <div className='card-media-image'>
        <Image
          src={image}
          alt={title}
          layout='fill'
          objectFit='cover'
        />
      </div>
    </div>
  )
}

CardMedia.propTypes = {
  image: PropTypes.string,
  classImage: PropTypes.string,
  title: PropTypes.string
}

export default CardMedia
