/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

import axios from 'axios'


function App() {
  
  const [character, setCharacter] = useState([])
  const [filteredCharacter, setFilteredCharacter] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://rickandmortyapi.com/api/character')
      setCharacter(data.results)
    }
    getData()
  }, [])

 


  const handleChange = (event) => {
   
    const filteredArray = character.filter(item => {
      return (item.status === event.target.value) || (item.species === event.target.value)
   
      
      
    })
    setCharacter(filteredArray)
  
    
  }

  

  return (
    <>
      <section>
        <div>
          <div> Pick the livelines status
            <br />
            <label htmlFor='alive'>Alive</label>
            <input onClick={handleChange} type="radio" id='alive' name='status'  value='Alive'/>
            <br />
            <label htmlFor='dead'>Dead</label>
            <input onClick={handleChange} type="radio" id='dead' name='status' value='Dead' />
            <br />
            <label htmlFor='unknown'>Unknown</label>
            <input onClick={handleChange} type="radio" id='unknown' name='status' value='unknown'/>
          </div>
          <div>
            <label htmlFor='human'>Human</label>
            <input onClick={handleChange} type="radio" id='human' name='species'  value='Human'/>
            <br />
            <label htmlFor='alien'>Alien</label>
            <input onClick={handleChange} type="radio" id='alien' name='species' value='Alien' />
            <br />
          </div>
        </div>
      </section>
      
      {character.map((item, index) => {
        return <div key={index}>
          <p>Name: {item.name}</p>
          <img src={item.image} alt={item.name} />
          <p>Status: {item.status}</p>
          <p>Species: {item.species}</p>
          <p>Gender: {item.gender}</p>
          <p>Planet: {item.origin.name}</p>
        </div>
      }) 
      }
    </>
  )
  
}

export default App
