import React from 'react'
import PropTypes from 'prop-types'
import GrandComponent from './GrandComponent'

function TestComponent({name}) {
  return (
    <>
        <div>{name}</div>
        <GrandComponent age={16} />
    </>
  )
}

TestComponent.propTypes = {
    name: PropTypes.string.isRequired
}

export default TestComponent
