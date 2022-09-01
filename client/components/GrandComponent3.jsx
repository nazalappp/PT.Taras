import React from 'react'
import PropTypes from 'prop-types'

function GrandComponent3({items}) {
  return (
    <>
       {
         items.length>0 && (
            items.map((item,index)=> (
                <div key={index} className="item">
                    <h3 className="item name">{item.name}</h3>
                    <h3 className="item age">{item.age}</h3>
                    <h3 className='item address'>{item.address}</h3>
                </div>
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

GrandComponent3.propTypes = {
    items: PropTypes.array
}

export default GrandComponent3
