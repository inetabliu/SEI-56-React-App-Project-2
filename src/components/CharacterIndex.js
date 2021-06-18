/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'
import CharacterCard from './CharacterCard'
import CharacterShow from './CharacterShow'




const CharacterIndex = () => {

  //State for pagination handling & setting characters
  const [character, setCharacter] = useState([])
  const [nextPage, setNextPage] = useState('')
 
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://rickandmortyapi.com/api/character')
      setCharacter(data.results)
      setNextPage([data.info.next])
    }
    getData()
  }, [])

  const handlePageChange = async () => {
    try {
      const { data } = await axios.get(nextPage)
      const newCharacters = character.concat(data.results)
      setCharacter(newCharacters)
      setNextPage(data.info.next)
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = async (event) => {
    try {
      const value = `/?${event.target.id}=${event.target.value}`
      const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${value}`)
      setNextPage(data.info.next)
      setCharacter(data.results)
    } catch (err) {
      console.log(err)
    }
  } 

  // ! Potential way of sorting filtering issue
  // const handleChange = (event) => {
  //   setCharacter(nextPage)
  //   const filteredArray = character.filter(item => {
  //     return (item.status === event.target.value) || (item.species === event.target.value) || (item.gender === event.target.value)
  //   })
  //   setCharacter(filteredArray)
  // }



  
  return (
    <section className='section is-flex'>
      <div className="container character-index-container">
        <form>
          <h3>Find a character based on:</h3>
          <div className="select is-small">
            <select name='together' id="status"onChange={handleChange} className='select-dropdown select-width'>
              <option value='' className='drowpdown-item'>Status</option>
              <option value='Dead' className='dropdown-item'>Dead</option>
              <option value='Alive' className='dropdown-item'>Alive</option>
            </select>
          </div>
          <p className='character-index-paragraph'>Or:</p>
          <div className="select is-small">
            <select name='together' id="gender" onChange={handleChange} className='select-dropdown select-width'>
              <option value='' className='drowpdown-item'>Gender</option>
              <option value='Female' className='drowpdown-item'>Female</option>
              <option value='Male' className='dropdown-item'>Male</option>
              <option value='Genderless' className='dropdown-item'>Genderless</option>
            </select>
          </div>
          <p className='character-index-paragraph'>Or:</p>
          <div className="select is-small">
            <select name='together' id="species" onChange={handleChange} className='select-dropdown select-width'>
              <option value='' className='drowpdown-item'>Species</option>
              <option value='Human' className='drowpdown-item'>Human</option>
              <option value='Alien' className='dropdown-item'>Alien</option>
              <option value='unknown' className='dropdown-item'>Unknown</option>
            </select>
          </div>
        </form>
      </div>
      <div className='container margin-top'>
        <h1 className="title">All Character list</h1>
        <div className='columns-style columns is-multiline'>
          {character.map(character => {
            return <CharacterCard key={character.id} {... character}/>
          })} 
        </div>
        <button id="styled-button" className="button is-primary-is-loading is-fullwidth" onClick={handlePageChange}>Show me more</button>
      </div>
    </section>
  
  )
}


export default CharacterIndex
