/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'




const CharacterShow = () => {

  const [character, setCharacter] = useState([])
  const [nextPage, setNextPage] = useState('')

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://rickandmortyapi.com/api/character')
      setCharacter(data.results)
      setNextPage(data.info.next)
    }
    getData()
  }, [])

  const handlePageChange = async () => {
    const { data } = await axios.get(nextPage)
    const newCharacters = character.concat(data.results)
    console.log('this is my new character array', newCharacters)
    setCharacter(newCharacters)
    setNextPage(data.info.next)
  }
  return (
    <>
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
      <button onClick={handlePageChange}>Show me more</button>
    </>
  
  )
}


export default CharacterShow
