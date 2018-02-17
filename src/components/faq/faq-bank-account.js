import React from 'react'

export default function FaqBankAccount () {
  return (
    <h1 id='account-number'>
      128-00-0478845-8
      <button className='btn btn-copy btn-primary border-0' data-clipboard-text='1280004788458'>
        <i className='fa fa-fw fa-clipboard' />
      </button>
    </h1>
  )
}
