import React from 'react'
import PropTypes from 'prop-types'
import HeaderComponent from '../HeaderComponent'
import FooterComponent from '../FooterComponent'
import HeaderV2Component from '../HeaderV2Component'

function LayoutComponent ({
  headerClear,
  children,
  type,
  landing,
  bannerText
}) {
  return (
    <div className='root'>
      {
        type === 1
          ? (
            <HeaderComponent headerClear />
          )
          : <>
            <HeaderV2Component
              landing={landing}
              bannerText={bannerText}
            />
          </>
      }
      <main>
        {children}
      </main>
      <FooterComponent />
    </div>
  )
}

LayoutComponent.propTypes = {
  headerClear: PropTypes.bool,
  children: PropTypes.node,
  type: PropTypes.number,
  landing: PropTypes.bool,
  bannerText: PropTypes.string
}

export default LayoutComponent
