import React from 'react'
import PropTypes from 'prop-types'
import GrandComponent2 from './GrandComponent2'
import GrandComponent3 from './GrandComponent3'

function GrandComponent({age}) {
  return (
    <>
        <div>{age}</div>
        <GrandComponent2 items={[1,2,3]} />
        <GrandComponent3 
            items={
                [
                    {
                        name: "nazala",
                        age: 16,
                        address: "bandung"
                    },
                    {
                        name: "raza",
                        age: 16,
                        address: "bandung"
                    },
                    {
                        name: "putri",
                        age: 16,
                        address: "bandung"
                    }
                ]
            }
        />
    </>
  )
}

GrandComponent.propTypes = {
    age: PropTypes.number
}

export default GrandComponent
