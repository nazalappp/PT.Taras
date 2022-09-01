import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Skeleton } from '@mui/material'
import { useRouter } from 'next/router'

function Card ({
  image,
  classImage,
  title,
  subtitle,
  children,
  fillAction,
  to,
  loading
}) {
  const router = useRouter()

  return (
    <Fragment>
      {
        loading && (
          <Fragment>
            <Skeleton
              animation='wave'
              variant='rectangular'
              className={`card-skeleton card-skeleton-image ${classImage}`}
            />
            <Skeleton
              animation='wave'
              variant='h3'
              className='card-skeleton card-skeleton-title'
            />
            {
              subtitle && (
                <Skeleton
                  animation='wave'
                  className='card-skeleton card-skeleton-subtitle'
                />
              )
            }
            <Skeleton
              animation='wave'
              className='card-skeleton card-skeleton-body'
            />
            <Skeleton
              animation='wave'
              className='card-skeleton card-skeleton-body'
            />
            <Skeleton
              animation='wave'
              className='card-skeleton card-skeleton-body'
            />
          </Fragment>
        )
      }
      {
        !loading && (
          <div className='card'>
            {
              fillAction && (
                <button
                  className='card-fill-action'
                  onClick={() => router.push('/')}
                >
                  {children}
                  <span className='card-highlight'></span>
                  <span className='card-ripple'></span>
                </button>
              )
            }
            {
              !fillAction && (
                <Fragment>
                  {children}
                </Fragment>
              )
            }
          </div>
        )
      }
    </Fragment>
  )
}

Card.propTypes = {
  image: PropTypes.string,
  classImage: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  fillAction: PropTypes.bool,
  to: PropTypes.string,
  loading: PropTypes.bool
}

export default Card
