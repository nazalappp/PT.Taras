import React, { Component, Fragment } from 'react'
import MetaHead from '@/components/core/MetaHead'
import LandingContainer from '@/containers/landing/LandingContainer'
import Link from "next/link";
import TestComponent from '@/components/TestComponent';

export default class Test extends Component {
  // eslint-disable-next-line space-before-function-paren
  constructor(props) {
    super(props)
    this.state = {
      meta: {
        title: ' | Landing',
        description: 'LAPANGAN.ID Landing'
      }
    }
  }

  render () {
    return (
      <Fragment>
        <div className='test'>
            <p className='test_title red'>1</p>
            <p className='test_title blue'>2</p>
            <p className='test_title black'>3</p>
            <p className='test_title aqua'>4</p>
            <p className='test_title blueviolet'>5</p>
            <p className='test_title'>6</p>
        </div>
        <div className='test2'>
            <p className='test_title red'>1</p>
            <p className='test_title blue'>2</p>
            <p className='test_title black'>3</p>
            <p className='test_title aqua'>4</p>
            <p className='test_title blueviolet'>5</p>
            <p className='test_title'>6</p>
        </div>
        <div className='test3'>
            <p><Link href="https://www.youtube.com/"><a className='test title'>Click here to open Youtube</a></Link></p>
            <p><Link href="https://www.google.com/"><a className='test title'>Click here to open Google</a></Link></p>
            <p><Link href="https://www.instagram.com/?hl=id"><a className='test title'>Click here to open Instagram</a></Link></p>
        </div>
        <TestComponent name={"nazala"} />
      </Fragment>
    )
  }
}