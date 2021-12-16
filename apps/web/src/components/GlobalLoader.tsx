import { Spinner } from 'react-bootstrap'
import { useIsFetching } from 'react-query'

function GlobalLoader() {
  const isFetching = useIsFetching()

  return (
    <Spinner
      animation="border"
      variant="success"
      style={{
        position: 'fixed',
        bottom: '0.5rem',
        right: '0.5rem',
        pointerEvents: 'none',
        opacity: isFetching ? 1 : 0,
      }}
    />
  )
}

export default GlobalLoader
