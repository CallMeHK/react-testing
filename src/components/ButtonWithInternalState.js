import React from 'react'

const ButtonWithInternalState = ({title}) => {
  const [state, setState] = React.useState(false)
  const onClick = () => setState(st => !st)

  return <div>
    <b>ButtonWithInternalState - {title}: </b>
    <button onClick={onClick}>click to set state to { state ? 'false' : 'true'}</button>
  </div>
}

export default ButtonWithInternalState
