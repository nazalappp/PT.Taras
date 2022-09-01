import React, { useState } from 'react'
import Controls from './controls'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { makeStyles } from '@mui/styles'

const useStyle = makeStyles({
  fileUpload: {
    display: 'none'
  },
  imagePreview: {
    maxWidth: '100%',
    width: '200px',
    height: 'auto'
  },
  formInput: {
    padding: '5px'
  },
  label: {
    margin: '4px',
    padding: 0,
    fontFamily: `'Roboto', 'Helvetica', 'Arial', 'sans-serif'`,
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: '0.00938em'
  },
  helperText: {
    color: '#F44366',
    marginLeft: '14px',
    marginRight: '14px',
    margin: 0,
    fontSize: '0.75rem',
    marginTop: '3px',
    textAlign: 'left',
    fontFamily: `'Roboto', 'Helvetica', 'Arial', 'sans-serif'`,
    fontWeight: 400,
    lineHeight: 1.66,
    letterSpacing: '0.03333em'
  }
})

function FileUpload ({
  label,
  buttonColor = 'primary',
  buttonVariant = 'contained',
  value,
  name,
  buttonText = 'Upload File',
  error = null,
  onChange,
  image = true,
  ...other
}) {
  const classes = useStyle()
  const [pathName, setPathName] = useState('')
  const [pathSrc, setPathSrc] = useState('')
  /**
   * Convert To Definition Event Params
   * @param {*} name
   * @param {*} value
   */
  const convertParams = (name, value) => {
    setPathName(value.name || '')
    // eslint-disable-next-line no-undef
    const reader = new FileReader()
    reader.readAsDataURL(value)
    reader.onloadend = function (e) {
      setPathSrc(reader.result || '')
    }
    const obj = {
      target: {
        name, value
      }
    }
    return obj
  }
  return (
    <div
      className={classes.formInput}
      {...other}
    >
      {
        label && (
          <p className={classes.label}>
            {label}
          </p>
        )
      }
      {image && (
        pathSrc && (
          <Image
            className={classes.imagePreview}
            src={pathSrc}
            alt={`preview-${name}`}
          />
        )
      )}
      <input
        {...(image && { accept: 'image/*' })}
        className={classes.fileUpload}
        type='file'
        name={name}
        id={name}
        onChange={(e) => onChange(
          convertParams(name, e.target.files[0])
        )}
      />
      <label htmlFor={name}>
        <Controls.Button
          variant={buttonVariant}
          color={buttonColor}
          text={buttonText}
          component='span'
        />
      </label>
      {pathName && (
        <p>{pathName}</p>
      )}
      {error && (
        <p className={classes.helperText}>
          {error}
        </p>
      )}
      {image && (
        value && (
          <div>
            <strong>Related Image</strong>
            <Image
              className={classes.imagePreview}
              src={value}
              alt={`related-${name}`}
            />
          </div>
        )
      )}
    </div>
  )
}

FileUpload.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.any,
  buttonColor: PropTypes.any,
  buttonVariant: PropTypes.any,
  buttonText: PropTypes.any,
  error: PropTypes.any,
  image: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.func
}

export default FileUpload
