/**
 * @param boolean initialValue
 * @return Object
 */

import { useState, useCallback } from 'react'
export default function useBoolean(initialValue) {
  const [value, setValue] = useState(initialValue || false)

  const setFalse = useCallback(() => setValue(false), [setValue])
  const setTrue = useCallback(() => setValue(true), [setValue])

  return {
    value,
    setTrue
    setFalse
  }
}