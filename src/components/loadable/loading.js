import React, { Fragment } from 'react'

export default function Loading (props) {
  let { error, retry, ...otherProps } = props
  let loadingStyle = {
    height: '100vh'
  }
  if (error) {
    console.log(error)
    return (
      <Fragment>
        <h1>Error!</h1>
        <p>{JSON.stringify(otherProps, null, 4)}</p>
        <button onClick={retry}>Retry</button>
      </Fragment>
    )
  }
  return (
    <div style={loadingStyle} />
  )
}
