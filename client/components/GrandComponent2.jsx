import React from 'react'
import PropTypes from 'prop-types'

function GrandComponent2({items}) {
  return (
    <>
       {
         items.length>0 && (
            items.map((item,index)=> (
                <div key={index}>{item}</div>
            ))
        ) 
       }
        {
            items.length===0 && (
                <div>item tidak ditemukan</div>
            )
        }
    </>
  )
}

GrandComponent2.propTypes = {
    items: PropTypes.array
}

export default GrandComponent2
