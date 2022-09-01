import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'

function Cardless ({
  wrapAction,
  maxHeight,
  title,
  image,
  published,
  subtitle
}) {
  return (
    <div className='cardless'>
      {
        wrapAction && (
          <Link href='#'>
            <a>
              <div className='cardless__section'>
                <div
                  className='cardless__section__media'
                  style={{
                    height: `${maxHeight}px`,
                    maxHeight: `${maxHeight}px`
                  }}
                >
                  <div className='cardless__section__media__image'>
                    <Image
                      className='cardless__radius'
                      src={image}
                      alt='image'
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                </div>
                <h1 className='cardless__section__title text-green'>
                  {title}
                </h1>
                {
                  published && (
                    <span className='cardless__section__published'>
                      {published}
                    </span>
                  )
                }
                {
                  subtitle && (
                    <span
                      className='cardless__section__subtitle font-weight-bold'
                    >
                      {subtitle}
                    </span>
                  )
                }
                {/* {
                    caption && (
                      <div className='cardless__section__caption'>
                        {caption}
                      </div>
                    )
                  } */}
              </div>
            </a>
          </Link>
        )
      }
    </div>
  )
}

Cardless.propTypes = {
  wrapAction: PropTypes.bool,
  maxHeight: PropTypes.number.isRequired,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  image: PropTypes.string,
  published: PropTypes.string,
  subtitle: PropTypes.string
}

export default Cardless
