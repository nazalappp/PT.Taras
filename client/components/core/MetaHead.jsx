import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

function MetaHead ({
  title,
  description
}) {
  return (
    <Head>
      <title>Lapangan.id {title}</title>
      <meta name='description' content={description} />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}

MetaHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
}

export default MetaHead
