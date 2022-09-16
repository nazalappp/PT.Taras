import { Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import PropTypes from 'prop-types'
import React, {useState} from 'react'
import { Form, useForm } from '../core/UseForm'
import Controls from '../shared/form/controls'

const useStyles = makeStyles(theme => ({
    'input-space': {
        marginBottom: theme.spacing(2)
    }
}))

export default function SignupCardComponent({
    signup,
    authentication = () => { }
}) {
    const classess = useStyles()

    const [initialValues, setInitialValues] = useState({
        name: '',
        no_handphone: '',
        password: ''
    })

    const validate = (fieldOfValue = values) => {
        const temp = { ...errors}

        if ('name' in fieldOfValue)
        temp.name = fieldOfValue.name
        ? ''
        : 'Nama tidak boleh kosong.'
        setErrors({
            ...temp
        })
        
        if (fieldOfValue === values)
            return Object.values(temp).every(x => x === '')

        if ('no_handphone' in fieldOfValue)
        temp.no_handphone = fieldOfValue.no_handphone
        ? ''
        : 'No handphone tidak boleh kosong'

        setErrors({
            ...temp
        })
        
        if (fieldOfValue === values)
            return Object.values(temp).every(x => x === '')

        if ('password' in fieldOfValue)
        temp.password = fieldOfValue.password
        ? ''
        : 'Password tidak boleh kosong  '

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
        resetForm
    } = useForm(initialValues, true, validate)

    const onSubmit = async (e) => {
        e.preventDefault()
        if(validate()) {
            console.log('validated')
            const payload = {
                name: values.name,
                no_handphone: values.no_handphone,
                password: values.password
            }

            await authentication(payload).then(() => {
                resetForm()
                setInitialValues({
                    name: '',
                    no_handphone: '',
                    password: ''
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
            Sign Up
        </Typography>
        <Typography
            component='p'
            variant='p'
            sx={{
                marginBottom: '1rem'
            }}
        >
            Buat akun untuk pengalaman yang lebih menyenangkan
        </Typography>
        <Form onSubmit={onSubmit}>
            <Controls.Input
                name='name'
                values={values.name}
                placeholder='Nama Anda'
                error={errors.name}
                className={classess['input-space']}
            />
            <Controls.Input
                name='no_handphone'
                values={values.no_handphone}
                placeholder='Nomor Handphone / Email'
                error={errors.no_handphone}
                className={classess['input-space']}
            />
            <Controls.Input
                name='password'
                values={values.password}
                placeholder='Password'
                error={errors.password}
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
            <div className='text-sparator'>Masuk dengan</div>
            <Controls.Button
                text='Apple'
                sx={{
                    textAlign: 'center'
                }}
                fullWidth={true}
                className={classess['input-space']}
            />
            <Controls.Button
                text='Facebook'
                sx={{
                    textAlign: 'center'
                }}
                fullWidth={true}
                className={classess['input-space']}
            />
            <Controls.Button
                text='Google'
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

SignupCardComponent.propTypes = {
    signup: PropTypes.func,
    authentication: PropTypes.func
}