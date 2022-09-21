import PropTypes from 'prop-types'
import { SportsSoccer } from '@mui/icons-material'
import { Paper, Typography } from '@mui/material'
import React from 'react'

export default function SignupInformationComponent({
    features
}, context) {
  return (
    <div>
        <h1 className='title'>Gabung dan Gunakan Fitur Mudahnya</h1>
        <div className="sigunupInformationImages" style={{position: 'relative', display: 'flex'}}>
            <div style={{width: '27%', display: 'absolute', transform: 'translateX(35px)', zIndex: 2}}>
                <img src="/images/img1.jpg" alt="img1" style={{borderRadius: '10px', width: '100%'}} />
            </div>
            <div style={{width: '27%', display: 'absolute', transform: 'translateY(55px) translateX(20px)', zIndex: 1}}>
                <img src="/images/img2.jpg" alt="img1" style={{borderRadius: '10px', width: '100%'}} />
            </div>
            <div style={{width: '27%', display: 'absolute', height: '190px', transform: 'translateX(-10px)'}}>
                <img src="/images/img3.jpg" alt="img1" style={{borderRadius: '10px', width: '100%', height: '100%'}} />
            </div>
        </div>
    </div>
  )
}

SignupInformationComponent.propTypes = {
    features: PropTypes.array
}