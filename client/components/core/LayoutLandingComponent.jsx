import React from 'react'
import PropTypes from 'prop-types'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import HeaderV2Component from './HeaderV2Component'

function LayoutLandingComponent ({
  headerClear,
  children,
  type
}) {
  return (
    <div className='root'>
      {
        type === 1
          ? (
            <HeaderComponent headerClear />
          )
          : <>
            <HeaderV2Component landing />
          </>
      }
      <main>
        {children}
      </main>
      <FooterComponent />
    </div>
  )
}

LayoutLandingComponent.propTypes = {
  headerClear: PropTypes.bool,
  children: PropTypes.node,
  type: PropTypes.number
}

export default LayoutLandingComponent
