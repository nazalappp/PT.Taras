import QRCode from 'qrcode'

/**
 *
 * Query Params
 *
 * @param {Number} page
 * @param {Number} limit
 * @param {*} moreParams
 * @returns {String}
 */
export const queryParams = (
  page = 1,
  limit = 10,
  moreParams
) => {
  return `?page=${page}&limit=${limit}`
}

/**
 *
 * @param {Number} limit
 * @param {String} description
 * @returns {String}
 */
export const limitDescription = (
  limit,
  description
) => {
  description = description.substring(0, limit) + ' ...'
  return description
}

/**
 *
 * Generate QRCode
 *
 * @param {String} payload
 * @returns
 */
export const generateQRCode = (payload) => {
  const base = QRCode.toDataURL(payload).then(res => res)

  return base
}
