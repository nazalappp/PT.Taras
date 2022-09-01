import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import UserLayoutComponent from '@/components/core/user/UserLayoutComponent'
import { Form, useForm } from '@/components/core/UseForm'
import Controls from '@/components/shared/form/controls'

function InfoBerlanggananComponent (props) {
  const [initialValues, setInitialValues] = useState({
    promotion: false,
    article: false
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
      <div className='subscribe'>
        <div className='subscribe-form'>
          <Form onSubmit={onSubmit}>
            <Controls.Checkbox
              name='promotion'
              label='Promosi'
              value={values.promotion}
              onChange={handleInputChange}
            />

            <Controls.Checkbox
              name='article'
              label='Artikel Terbaru'
              value={values.article}
              onChange={handleInputChange}
            />

            <Controls.Button
              text='Simpan'
            />
          </Form>
        </div>
      </div>
    </UserLayoutComponent>
  )
}

InfoBerlanggananComponent.propTypes = {

}

export default InfoBerlanggananComponent
