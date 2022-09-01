import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Card from '@/components/shared/card/Card'
import { Grid } from '@mui/material'

function ListArticle ({
  title,
  articles
}) {
  return (
    <Fragment>
      <h4>{title}</h4>
      <Grid
        container
        spacing={1}
      >
        {
          articles.length > 0 && (
            articles.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                lg={3}
                key={index}
              >
                <Card
                  image={item.image}
                  title={item.title}
                  subtitle={item.created_at}
                  loading={index === 1}
                  fillAction={true}
                  to={item.title}
                  classImage='article'
                >
                  <p>
                    {item.name}
                  </p>
                </Card>
              </Grid>
            ))
          )
        }
      </Grid>
    </Fragment>
  )
}

ListArticle.propTypes = {
  title: PropTypes.string,
  articles: PropTypes.array
}

export default ListArticle
