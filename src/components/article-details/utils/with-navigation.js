import React from 'react'

const withNavigation = Component => ({ history, ...rest }) => {
  const goBack = () => {
    history.goBack()
  }
  return <Component goBack={goBack} {...rest} />
}

export default withNavigation
