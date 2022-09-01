import React from 'react'
import PropTypes from 'prop-types'
import LandingCarousel from '@/components/landing/LandingCarousel'
import LandingSearch from '@/components/landing/LandingSearch'
import LandingPartner from '@/components/landing/LandingPartner'
// import LandingTestimoni from '@/components/landing/LandingTestimoni'
import LandingArticle from './LandingArticle'
import { Container } from '@mui/material'
import LayoutLandingComponent from '../core/LayoutLandingComponent'

function LandingComponent ({
  sports,
  location,
  partners,
  testimonies,
  articles
}) {
  return (
    <LayoutLandingComponent
      type={2}
    >
      <div className='landing'>
        {/* Section Carousel */}
        <LandingCarousel />
        <Container maxWidth='lg'>
          {/* Section Search */}
          <LandingSearch
            sports={sports}
            locations={location}
          />
          {/* Section Partner */}
          <LandingPartner partners={partners} />
          {/* Section Testi */}
          {/* <LandingTestimoni testimonies={testimonies} /> */}
          {/* Section Article */}
          <LandingArticle articles={articles} />
        </Container>
      </div>
    </LayoutLandingComponent >
  )
}

LandingComponent.propTypes = {
  sports: PropTypes.array,
  location: PropTypes.array,
  partners: PropTypes.array,
  testimonies: PropTypes.array,
  articles: PropTypes.array,
  carousel: PropTypes.array
}

export default LandingComponent
