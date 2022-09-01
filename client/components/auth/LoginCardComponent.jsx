import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography } from '@mui/material'
import { Form, useForm } from '@/components/core/UseForm'
import Controls from '@/components/shared/form/controls'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
  'input-space': {
    marginBottom: theme.spacing(2)
  }
}))

function LoginCardComponent ({
  login,
  authentication = () => { }
}) {
  const classess = useStyles()

  const [initialValues, setInitialValues] = useState({
    username: '',
    password: 'Password!123'
  })

  const validate = (fieldOfValue = values) => {
    const temp = { ...errors }

    if ('username' in fieldOfValue)
      temp.username = fieldOfValue.username
        ? ''
        : 'Username tidak boleh kosong.'

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

  const onSubmit = async (e) => {
    e.preventDefault()
    if (validate()) {
      console.log('validated')
      const payload = {
        email: values.username,
        password: values.password
      }

      await authentication(payload).then(() => {
        resetForm()
        setInitialValues({
          username: '',
          password: 'Password!123'
        })
      })
    }
  }
  return (
    <Paper
      elevation={2}
      sx={{
        padding: '1rem'
      }}
    >
      <Typography
        component='h5'
        variant='h5'
      >
        Login / Daftar
      </Typography>
      <Typography
        component='p'
        variant='p'
        sx={{
          marginBottom: '1rem'
        }}
      >
        Perjalan seru dimulai dari sini...
      </Typography>
      <Form onSubmit={onSubmit}>
        <Controls.Input
          name='username'
          value={values.username}
          onChange={handleInputChange}
          placeholder='Nomor Handphone / Email'
          error={errors.username}
          className={classess['input-space']}
        />
        <Controls.Button
          text='Lanjutkan'
          sx={{
            textAlign: 'center'
          }}
          type='submit'
          fullWidth={true}
          className={classess['input-space']}
        />
        <div className='text-sparator'>atau</div>
        <Controls.Button
          text='Masuk dengan Apple'
          sx={{
            textAlign: 'center'
          }}
          fullWidth={true}
          className={classess['input-space']}
        />
        <Controls.Button
          text='Masuk dengan Facebook'
          sx={{
            textAlign: 'center'
          }}
          fullWidth={true}
          className={classess['input-space']}
        />
        <Controls.Button
          text='Masuk dengan Google'
          sx={{
            textAlign: 'center'
          }}
          fullWidth={true}
          className={classess['input-space']}
        />
      </Form>
    </Paper>
  )
}

LoginCardComponent.propTypes = {
  login: PropTypes.func,
  authentication: PropTypes.func
}

export default LoginCardComponent
