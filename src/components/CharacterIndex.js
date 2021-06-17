/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import CharacterCard from './CharacterCard'
import CharacterShow from './CharacterShow'




const CharacterIndex = () => {

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
    <section className='section'>
      <div className='container'>
        <div className='columns-style columns is-multiline'>
          {character.map(character => {
            return <CharacterCard key={character.id} {... character}/>
          })} 
        </div>
        <button onClick={handlePageChange}>Show me more</button>
      </div>
    </section>
  
  )
}


export default CharacterIndex
