import * as React from 'react'

type UseLocalStorateStateProps = {
  key: string
  defaultValue: any
  serialize?: any
  deserialize?: any
}

function useLocalStorateState({
  key,
  defaultValue = '',
  serialize = JSON.stringify,
  deserialize = JSON.parse,
}: UseLocalStorateStateProps) {
  const [state, setState] = React.useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key)
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage)
    }

    return typeof defaultValue === 'function' ? defaultValue() : defaultValue
  })

  const prevKeyRef = React.useRef(key)

  React.useEffect(() => {
    const prevKey = prevKeyRef.current
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey)
    }

    prevKeyRef.current = key
    window.localStorage.setItem(key, serialize(state))
  }, [key, state, serialize])

  return [state, setState]
}

export default useLocalStorateState
