import { Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Form, useForm } from '../core/UseForm'
import Controls from '../shared/form/controls'
import { FaGoogle } from 'react-icons/fa'
import { FaApple } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'


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

    // const validate = (fieldOfValue = values) => {
    //     const temp = { ...errors}

    //     if ('name' in fieldOfValue)
    //     temp.name = fieldOfValue.name
    //     ? ''
    //     : 'Nama tidak boleh kosong.'
    //     setErrors({
    //         ...temp
    //     })

    //     if (fieldOfValue === values)
    //         return Object.values(temp).every(x => x === '')

    //     else if ('no_handphone' in fieldOfValue)
    //     temp.no_handphone = fieldOfValue.no_handphone
    //     ? ''
    //     : 'No handphone tidak boleh kosong'

    //     setErrors({
    //         ...temp
    //     })

    //     if (fieldOfValue === values)
    //         return Object.values(temp).every(x => x === '')

    //     else if ('password' in fieldOfValue)
    //     temp.password = fieldOfValue.password
    //     ? ''
    //     : 'Password tidak boleh kosong  '

    //     setErrors({
    //         ...temp
    //     })

    //     if (fieldOfValue === values)
    //         return Object.values(temp).every(x => x === '')
    // }

    const validate = (fieldOfValue = values) => {
        const temp = { ...errors }

        if ('name' in fieldOfValue)
            temp.name = fieldOfValue.name
                ? ''
                : 'Nama tidak boleh kosong.'

        setErrors({
            ...temp
        })


        if ('no_handphone' in fieldOfValue)
            temp.no_handphone = fieldOfValue.no_handphone
                ? ''
                : 'No Handphone tidak boleh kosong.'

        setErrors({
            ...temp
        })

        if ('password' in fieldOfValue)
            temp.password = fieldOfValue.password
                ? ''
                : 'Password tidak boleh kosong.'

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
            <h1 className='title'>Sign Up</h1>
            <p className='h3'>Buat akun untuk pengalaman yang lebih menyenangkan</p>
            <Form onSubmit={onSubmit}>
                <Controls.Input
                    name='name'
                    value={values.name}
                    onChange={handleInputChange}
                    placeholder='Masukan Nama Lengkap'
                    error={errors.name}
                    className={classess['input-space']}
                />
                <Controls.Input
                    name='no_handphone'
                    values={values.no_handphone}
                    placeholder='Nomor Handphone / Email'
                    onChange={handleInputChange}
                    error={errors.no_handphone}
                    className={classess['input-space']}
                />
                <Controls.Input
                    type='password'
                    name='password'
                    values={values.password}
                    placeholder='Password'
                    onChange={handleInputChange}
                    error={errors.password}

                    className={classess['input-space']}
                />
                <button className='button' type='submit'>Lanjutkan</button>
                {/* <Controls.Button
                    text='Lanjutkan'
                    sx={{
                        textAlign: 'center'
                    }}
                    type='submit'
                    fullWidth={true}
                    className={classess['input-space']}
                /> */}
                <h3 className='h3'>------------------------------- Masuk Dengan -------------------------------</h3>

                <button className='div'><FaApple /></button>

                <button className='div'><FaFacebook /></button>

                <button className='div'><FaGoogle /></button>
            </Form>
        </Paper>
    )
}

SignupCardComponent.propTypes = {
    signup: PropTypes.func,
    authentication: PropTypes.func
}