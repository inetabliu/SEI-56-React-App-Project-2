import { useHistory } from 'react-router-dom'
import React from 'react'

const CharacterAlive = () => {
  const history = useHistory()
  const routeChange = () => {
    const path = 'alive'
    history.push(path)
  }

  return (
    <button className='in-danger' onClick={routeChange}>Alive</button>
  )
}






export default CharacterAlive