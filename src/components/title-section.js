import React from 'react'

export default function TitleSection ({ title }) {
  return (
    <section className='pb-0'>
      <div className='container text-center'>
        <h2 className='section-heading'>{title}</h2>
        <hr />
      </div>
    </section>
  )
}
