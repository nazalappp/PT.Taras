import React from 'react'
import PropTypes from 'prop-types'
// import HeaderComponent from '@/components/core/HeaderComponent'
import FooterComponent from '@/components/core/FooterComponent'
import HeaderV2Component from './HeaderV2Component'

function LayoutComponent (props) {
  const { headerClear, children } = props
  return (
    <div className='root'>
      {/* <HeaderComponent headerClear={headerClear} /> */}
      <HeaderV2Component />
      <main>
        {children}
      </main>
      <FooterComponent />
    </div>
  )
}

LayoutComponent.propTypes = {
  headerClear: PropTypes.bool,
  children: PropTypes.node
}

export default LayoutComponent
