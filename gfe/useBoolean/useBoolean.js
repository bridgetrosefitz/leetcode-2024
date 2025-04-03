import { useState } from 'react'

export default function useBoolean(initialValue) {
  const [value, setValue] = useState(initialValue || false)

  return {
    value
    setTrue: () => setValue(true)
    setFalse: () => setValue(false)
  }

}