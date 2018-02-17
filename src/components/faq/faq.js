import React, { Fragment } from 'react'
import Clipboard from 'clipboard'
import compose from 'recompose/compose'
import lifecycle from 'recompose/lifecycle'

import FaqItem from './faq-item'
import ContactItem from '../contact/contact-item'

function Faq () {
  let faqLists = [{
    question: 'Apakah kami dapat memilih atau mengubah menu yang ditawarkan?',
    answer: 'Macam-macam menu dapat dipilih atau diubah sesuai permintaan.'
  }, {
    question: 'Apa sajakah yang kami terima ketika memesan di sini?',
    answer: 'Pemesanan sudah termasuk pelayanan, peralatan, dan dekorasi hidangan makanan.'
  }, {
    question: 'Apakah pemesanan di sini sudah termasuk biaya sewa gedung?',
    answer: 'Pesanan tidak termasuk biaya sewa gedung.'
  }, {
    question: 'Adakah jumlah minimal porsi pesanan di sini?',
    answer: 'Pesanan memakai gubug minimal 200 porsi. Pesanan dibawah minimal dikenakan biaya tambahan 10% jasa pelayanan.'
  }, {
    question: 'Berapa uang muka yang perlu kami bayar ketika memesan di sini?',
    answer: 'Uang muka dibayar 50% dari jumlah pemesanan dan dibayar sebelum acara dimulai.'
  }, {
    question: 'Apakah uang muka yang telah kami bayar akan dikembalikan apabila pemesanan dibatalkan?',
    answer: 'Uang muka akan hilang apabila pemesanan dibatalkan.'
  }, {
    question: 'Kapan batas waktu pembayaran pesanan kami?',
    answer: 'Pembayaran paling lambat 1 (satu) minggu sebelum tanggal acara dimulai.'
  }, {
    question: 'Dalam kondisi apa sajakah pembayaran di sini tidak dapat dikembalikan?',
    answer: 'Pembayaran tidak akan dikembalikan apabila terjadi bencana alam (gempa bumi, kerusuhan, kebakaran, force majeur) pada tanggal pelaksanaan atau 3 (tiga) hari sebelum acara dimulai.'
  }, {
    question: 'Apakah kami dapat melakukan pembayaran melalui transfer bank?',
    answer: 'Pembayaran dapat ditransfer ke Bank Mandiri atas nama CV. Arry Utama dengan nomor rekening'
  }]
  return (
    <Fragment>
      <section id='faq'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 mx-auto text-center'>
              <h2 className='section-heading'>FAQ</h2>
              <hr />
              <div id='accordion' role='tablist'>
                {
                  faqLists.map((list, index) => <FaqItem {...list} index={index} key={`${index}-${list.question.length}`} />)
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactItem />
    </Fragment>
  )
}

export default compose(
  lifecycle({
    componentDidMount () {
      let clipboard = new Clipboard('.btn-copy') //   eslint-disable-line no-unused-vars
    }
  })
)(Faq)
