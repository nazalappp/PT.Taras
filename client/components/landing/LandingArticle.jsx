import React from 'react'
import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import Cardless from '../shared/card/Cardless'

function LandingArticle () {
  const articleState = useSelector(state => state.articles)
  return (
    <section className='landing__article'>
      <h1 className='text-green fs-2'>Article Terbaru</h1>
      <h4 className='fs-4'>
        Info penting seputar olahraga yang wajib kamu baca
      </h4>
      <Grid
        container
        spacing={1}
      >
        {
          articleState?.articles.length > 0 && (
            articleState?.articles.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                lg={3}
                key={index}
              >
                <Cardless
                  wrapAction
                  maxHeight={200}
                  title={item.name}
                  image={item.thumbnail}
                  published='3 menit yang lalu'
                  subtitle={'Jerome Bell'}
                />
              </Grid>
            ))
          )
        }
      </Grid>
    </section>
  )
}

LandingArticle.propTypes = {
}

export default LandingArticle
