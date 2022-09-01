import React from 'react'
import LayoutComponent from '@/components/core/LayoutComponent'
import { Container, Grid } from '@mui/material'
import ListArticle from '@/components/shared/article/ListArticle'
import PropTypes from 'prop-types'

function ArticleDetailComponent ({
  articles
}) {
  return (
    <LayoutComponent>
      <section className='article-detail'>
        <Container maxWidth='lg'>
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              sm={12}
              md={12}
              lg={12}
            >
              <div className='article-content'>
                <h1 className='article-content-title'>
                  Selamatkan Negeri Dengan Olahraga
                </h1>
                <p className='article-content-paragraph'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro autem esse molestiae ea, ipsam dolore id deserunt molestias, numquam repellendus, quos maxime voluptas! Reprehenderit cupiditate aspernatur, hic incidunt sit aliquid!
                </p>
                <p className='article-content-paragraph'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro autem esse molestiae ea, ipsam dolore id deserunt molestias, numquam repellendus, quos maxime voluptas! Reprehenderit cupiditate aspernatur, hic incidunt sit aliquid!
                </p>
                <p className='article-content-paragraph'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro autem esse molestiae ea, ipsam dolore id deserunt molestias, numquam repellendus, quos maxime voluptas! Reprehenderit cupiditate aspernatur, hic incidunt sit aliquid!
                </p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className='related-article'>
        <Container maxWidth='xl'>
          <ListArticle
            title='Artikel Terkait'
            articles={articles}
          />
        </Container>
      </section>
    </LayoutComponent>
  )
}

ArticleDetailComponent.propTypes = {
  articles: PropTypes.array
}

export default ArticleDetailComponent
