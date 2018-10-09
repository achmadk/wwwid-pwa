import React from 'react'
import * as parse from 'qs/lib/parse'

const withQueryString = Component => props => {
  let { search } = props.location
  let params = parse(search.substring(1))
  return <Component params={params} {...props} />
}

export default withQueryString
