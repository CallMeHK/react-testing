import React from 'react'
import { useSomeContext } from './SomeContext'

const ContextUse = () => {
  const {state, setState } = useSomeContext()
  const onChange = (e) => setState(s => ({ ...s, key: e.target.value }))
  const showError = state.key === ''
  return <>
    <div><b>ContextUse: </b>value from context: {state.key}</div>
    <div>change key in context: <input onChange={onChange} value={state.key} /></div>
    {showError && <div style={{color: 'red'}}>Key cannot be empty</div>}
    </>
}

export default ContextUse
