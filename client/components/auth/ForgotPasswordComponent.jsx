import React, { useState } from 'react'
import PropTypes from 'prop-types'
import LayoutComponent from '@/components/core/LayoutComponent'
import { Container, Grid, Paper, Typography } from '@mui/material'
import { Form, useForm } from '../core/UseForm'
import Controls from '@/components/shared/form/controls'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
  'input-space': {
    marginBottom: theme.spacing(2)
  }
}))

function ForgotPasswordComponent ({
  resendEmail = () => { }
}, context) {
  const classess = useStyles()

  const [initialValues, setInitialValues] = useState({
    username: ''
  })

  const validate = (fieldOfValue = values) => {
    const temp = { ...errors }

    setErrors({
      ...temp
    })

    if (fieldOfValue === values)
      return Object.values(temp).every(x => x === '')
  }

  const {
    values,
    errors,
    setErrors,
    resetForm,
    handleInputChange
  } = useForm(initialValues, true, validate)

  const onSubmit = (e) => {
    e.prefentDefault()
    if (validate()) {
      resetForm()
      setInitialValues({
        sport: '',
        location: '',
        date: null,
        rating: '',
        facility: ''
      })
    }
  }

  return (
    <LayoutComponent headerClear={true}>
      <Container maxWidth='sm'>
        <Grid
          container
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
            <Paper
              elevation={2}
              sx={{
                padding: '1rem',
                marginTop: '5rem',
                marginBottom: '5rem'
              }}
            >
              <Typography
                variant='h5'
                component='h5'
              >
                Lupa Password
              </Typography>
              <Typography
                variant='p'
                component='p'
                className={classess['input-space']}
              >
                Masukan Email untuk mendapatkan Email
              </Typography>
              <Form onSubmit={onSubmit}>
                <Controls.Input
                  className={classess['input-space']}
                  name='email'
                  placeholder='john.doe@mail.com'
                  value={values.email}
                  onChange={handleInputChange}
                />
                <Controls.Button
                  text='Kirim email reset password'
                  sx={{
                    textAlign: 'center'
                  }}
                  fullWidth={true}
                  className={classess['input-space']}
                />
              </Form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </LayoutComponent>
  )
}

ForgotPasswordComponent.propTypes = {
  resendEmail: PropTypes.func
}

export default ForgotPasswordComponent
