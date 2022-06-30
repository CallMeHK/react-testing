import React from 'react'
import request from '../utils/request'

const FetchingJokes = () => {
  const [loading, setLoading] = React.useState(true)
  const [response, setResponse] = React.useState()
  React.useEffect(() => {
    try {
      request.get('https://icanhazdadjoke.com').then(data => {
        setLoading(false)
        setResponse(data.joke)
      })
    } catch(e) {
      console.error(e)
    }
  }, [])

  return <div>
    <b>FetchingJokes: </b>
    {loading ? 'Loading...' : response }
  </div>
}

export default FetchingJokes
