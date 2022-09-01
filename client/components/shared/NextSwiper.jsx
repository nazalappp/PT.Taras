import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

// Import Swiper React components
import { Swiper } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import Swiper core and required modules
import SwiperCore, {
  Autoplay, Pagination
} from 'swiper'

// install Swiper modules
SwiperCore.use([Autoplay, Pagination])

function NextSwiper ({
  children,
  className
}) {
  return (
    <Fragment>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        className={`mySwiper ${className}`}
      >
        {children}
      </Swiper>
    </Fragment>
  )
}

NextSwiper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default NextSwiper
