import React from 'react'
import { parse } from 'qs'

const withQueryString = Component => props => {
  let { search } = props.location
  let params = parse(search.substring(1))
  return <Component params={params} {...props} />
}

export default withQueryString
