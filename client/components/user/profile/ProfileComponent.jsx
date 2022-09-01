import React, { useState } from 'react'
import Image from 'next/image'
import { Form, useForm } from '@/components/core/UseForm'
import Controls from '@/components/shared/form/controls'
import UserLayoutComponent from '@/components/core/user/UserLayoutComponent'
// import PropTypes from 'prop-types'

function ProfileComponent (props) {
  const initialOptions = [
    { id: 'male', text: 'Male' },
    { id: 'female', text: 'Female' }
  ]
  const [initialValues, setInitialValues] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    gender: '',
    image: []
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
    <UserLayoutComponent>
      <div className='profile'>
        <div className='profile-image'>
          <Image
            className='image-carousel'
            src='https://source.unsplash.com/random'
            alt='test'
            width='150'
            height='150'
          />
        </div>
        <div className='profile-form'>
          <Form onSubmit={onSubmit}>
            <Controls.FileUpload
              image={false}
              name='image'
              value={values.image}
              onChange={handleInputChange}
            />
            <Controls.Input
              name='name'
              label='Nama'
              value={values.name}
              onChange={handleInputChange}
            />

            <Controls.Input
              name='address'
              label='Alamat'
              value={values.address}
              multiline
              minRows={4}
              onChange={handleInputChange}
            />

            <Controls.Input
              name='email'
              label='Email'
              value={values.email}
              onChange={handleInputChange}
            />

            <Controls.Input
              name='phone'
              label='Phone'
              value={values.phone}
              onChange={handleInputChange}
            />

            <Controls.RadioGroup
              items={initialOptions}
              name='gender'
              label='Gender'
              value={values.gender}
              onChange={handleInputChange}
            />

            <Controls.Button
              text='simpan'
            />
          </Form>
        </div>
      </div>
    </UserLayoutComponent>
  )
}

ProfileComponent.propTypes = {

}

export default ProfileComponent
