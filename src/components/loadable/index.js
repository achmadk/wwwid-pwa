import LoadableVisibility from 'react-loadable-visibility/react-loadable'

import Loading from './loading'

export default function AppLoadable (options) {
  return LoadableVisibility({
    loading: Loading,
    delay: 200,
    timeout: 100000,
    ...options
  })
}
