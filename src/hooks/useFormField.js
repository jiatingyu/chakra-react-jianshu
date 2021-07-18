import { useState } from 'react'

export default function useFormField (initialState) {
  let [value, setValue] = useState(initialState)
  function onChange (e) {
    setValue(e.target.value)
  }
  return { value, onChange }
}
