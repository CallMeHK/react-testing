import React from 'react'

const AsyncProcess = () => {
  const [isTimeoutRunning, setIsTimeoutRunning] = React.useState(true)
  React.useEffect(() => {
    let timeout
    timeout = setTimeout(() => setIsTimeoutRunning(false), 1000)
    return () => {clearTimeout(timeout)}
  }, [])

  return <div>
    <b>AsyncProcess: </b>
    {isTimeoutRunning ? 'Timeout is running....' : 'Timeout has stopped!' }
  </div>
}

export default AsyncProcess
