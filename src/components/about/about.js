import React, { Fragment } from 'react'

import ContactItem from '../contact/contact-item'

export default function About () {
  return (
    <Fragment>
      <section id='about'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 mx-auto text-center'>
              <h2 className='section-heading'>About Us</h2>
              <hr />
              <p className='text-faded'>CV Arry Utama Catering Services & wedding Organizing adalah penyedia jasa makanan dan dekorasi yang meliputi jasa catering untuk resepsi pernikahan dirumah maupun digedung atau acara anda dirumah seperti khitanan, syukuran, akad nikah, arisan, aqiqah, ulang tahun, maupun acara di kantor seperti meeting, peresmian, dan lain-lain.</p>
              <p className='text-faded'>Arry Catering melayani jasa pelayanan resepsi pernikahan from A-Z dengan kualitas rasa & pelayanan yang terbaik serta memuaskan karena berpengalaman hampir 30 tahun dan mempunyai pelanggan tetap mulai selebritas, pejabat, tokoh masyarakat, petinggi militer, hingga masyarakat umum. Konsep one stop service yang diusung oleh Arry Catering sehingga memudahkan calon pasangan tanpa harus mengeluarkan anggaran yang besar. One stop service pernikahan meliputi fotografi, dekorasi, tata rias, catering, seni musik dalam lingkup wedding organizer. Kantor yang beroperasi di Pesanggrahan, Jakarta Barat memudahkan mobilisasi di sekitar Jakarta.</p>
            </div>
          </div>
        </div>
      </section>
      <ContactItem />
    </Fragment>
  )
}
