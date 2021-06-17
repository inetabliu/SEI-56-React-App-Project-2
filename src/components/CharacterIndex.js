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
  // const [locations, setLocation] = useState([])


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

  const handleChange = async (event) => {
    try {
      const value = `/?${event.target.id}=${event.target.value}`
      const { data } = await axios.get(`https://rickandmortyapi.com/api/character${value}`)
      setNextPage(data.info.next)
      setCharacter(data.results)
    } catch (err) {
      console.log(err)
    }
  } 
  
  // const handleLocationChange = async (event) => {
  //   try {
  //     const locationValue = `${event.target.value}`
  //     const { data } = await axios.get(`https://rickandmortyapi.com/api/location/${locationValue}`)
  //     console.log('my data', data.results)
  //     setLocation(locations)
    

  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // handleLocationChange()

  
  return (
    <section className='section'>
      <form>
        <select id="status"onChange={handleChange} className='select-dropdown'>
          <option value='' className='drowpdown-item'>Status</option>
          <option  value='dead' className='dropdown-item'>Dead</option>
          <option  value='alive' className='dropdown-item'>Alive</option>
        </select>
        <select id="gender" onChange={handleChange} className='select-dropdown'>
          <option value='' className='drowpdown-item'>Gender</option>
          <option value='female' className='drowpdown-item'>Female</option>
          <option  value='male' className='dropdown-item'>Male</option>
          <option  value='genderless' className='dropdown-item'>Genderless</option>
        </select>
        <select id="species" onChange={handleChange} className='select-dropdown'>
          <option value='' className='drowpdown-item'>Species</option>
          <option value='human' className='drowpdown-item'>Human</option>
          <option  value='alien' className='dropdown-item'>Alien</option>
          <option  value='unknown' className='dropdown-item'>Unknown</option>
        </select>
        {/* <select onChange={handleLocationChange} id={locations.id}className='select-dropdown'>
          {locations.map((item, id) => {
            return <option key={id} value={item.id}>{locations.dimention}</option>
          })}
        </select> */}
      </form>
      <br></br>
      <div className='container'>
        <div className='columns-style columns is-multiline'>
          {character.map(character => {
            return <CharacterCard key={character.id} {... character}/>
          })} 
        </div>
        <button id="styled-button" className="button is-primary-is-focused" onClick={handlePageChange}>Show me more</button>
      </div>
    </section>
  
  )
}


export default CharacterIndex
