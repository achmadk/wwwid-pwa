import React from 'react'
import { Link } from 'react-router-dom'

import { clickToOtherPage } from '../../utils/navigation'

export default function AboutBrief () {
  return (
    <section className='bg-primary'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 mx-auto text-center'>
            <p className='text-faded'>
              Kami adalah perusahaan Paket Catering Pernikahan Jakarta yang sudah berpengalaman dan konsisten demi mempertahankan kualitas sebagai jasa penyedia catering pernikahan Jakarta. Didukung dengan pemilihan bahan baku terbaik serta Quality Control dengan standarisasi khusus untuk menjaga rasa dan mutu penyajian hidangan di setiap pelayanan katering kami. Dengan dukungan sumber daya manusia yang berpengalaman, Arry Utama juga menawarkan Paket Catering Pernikahan di Jakarta dengan dekorasi pernikahan yang di dalamnya termasuk dekorasi pelaminan, menu catering serta tata rias pengantin yang menarik dan tata letak yang mengutamakan detail serta inovatif dalam setiap pergelaran. Kepuasan dari tamu undangan membuktikan Arry Utama menjunjung tinggi profesionalisme.
            </p>
            <Link className='btn btn-primary btn-xl page-scroll'
              to='/about.html'
              onClick={clickToOtherPage}>
              Selengkapnya
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
