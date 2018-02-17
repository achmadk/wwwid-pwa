import React, { Fragment } from 'react'

export default function MenuItem ({ item }) {
  let { lists } = item
  return (
    <Fragment>
      {
        (item && item.title) && <h4>{item.title}</h4>
      }
      {
        lists.map((list, i) => <p key={`${list}-${i}`}>{list}</p>)
      }
    </Fragment>
  )
}
