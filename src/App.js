/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

import axios from 'axios'


function App() {
  
  const [character, setCharacter] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://rickandmortyapi.com/api/character/')
      // console.log('data ', data.results)
      setCharacter(data.results)
      // console.log('character', character)
    }
    getData()
  }, [character])
  


  return (
    <>
      <h1>Hello World</h1>
      {character.map((item, index) => {
        return <div key={index}>
          <p>{item.name}</p>
          <p>{item.status}</p>
          <p>{item.species}</p>
          <p>{item.gender}</p>
          <img src={item.image} alt={item.name} />
        </div>
      }) 
      }
    </>
  )
  
}

export default App
