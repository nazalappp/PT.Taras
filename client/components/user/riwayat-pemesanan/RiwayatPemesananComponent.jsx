import UserLayoutComponent from '@/components/core/user/UserLayoutComponent'
import React from 'react'
import Image from 'next/image'
import Controls from '@/components/shared/form/controls'
// import PropTypes from 'prop-types'

function RiwayatPemesananComponent (props) {
  const initialOptions = [
    { value: 90, text: '90 Hari terakhir' }
  ]

  return (
    <UserLayoutComponent>
      <div className='history'>
        <div className='history-filter'>
          <Controls.Select
            className='history-filter-date'
            options={initialOptions}
            name='location'
            value=''
            label='Kota'
          />
        </div>
        <div className='history-result'>
          <h3 className='history-result-title'>
            September 2021
          </h3>
          <div className='history-result-content'>
            <ul className='history-result-list'>
              <li className='history-result-list-item'>
                <div className='history-order'>
                  <div className='history-order-detail'>
                    <p>No Pemesanan: 12312312312312</p>
                    <p>PB. Merdeka 666 - Lapang 2</p>
                    <p>Pukul 10:00 - 12:00</p>
                    <strong>Pemesanan Berhasil</strong>
                  </div>
                  <div className='history-order-qrcode'>
                    <Image
                      className='image-carousel'
                      src='https://source.unsplash.com/random'
                      alt='test'
                      width='120'
                      height='120'
                    />
                    <div className='history-order-price'>
                      Rp 120.000
                    </div>
                  </div>
                </div>
              </li>
              <li className='history-result-list-item'>
                <div className='history-order'>
                  <div className='history-order-detail'>
                    <p>No Pemesanan: 12312312312312</p>
                    <p>PB. Merdeka 666 - Lapang 2</p>
                    <p>Pukul 10:00 - 12:00</p>
                    <strong>Pemesanan Berhasil</strong>
                  </div>
                  <div className='history-order-qrcode'>
                    <Image
                      className='image-carousel'
                      src='https://source.unsplash.com/random'
                      alt='test'
                      width='120'
                      height='120'
                    />
                    <div className='history-order-price'>
                      Rp 120.000
                    </div>
                  </div>
                </div>
              </li>
              <li className='history-result-list-item'>
                <div className='history-order'>
                  <div className='history-order-detail'>
                    <p>No Pemesanan: 12312312312312</p>
                    <p>PB. Merdeka 666 - Lapang 2</p>
                    <p>Pukul 10:00 - 12:00</p>
                    <strong>Pemesanan Berhasil</strong>
                  </div>
                  <div className='history-order-qrcode'>
                    <Image
                      className='image-carousel'
                      src='https://source.unsplash.com/random'
                      alt='test'
                      width='120'
                      height='120'
                    />
                    <div className='history-order-price'>
                      Rp 120.000
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </UserLayoutComponent>
  )
}

RiwayatPemesananComponent.propTypes = {

}

export default RiwayatPemesananComponent
