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
  // const [values, setValues] = useState([])
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
    setCharacter(newCharacters)
    setNextPage(data.info.next)
    setCharacter(character)
  }

  const handleChange = async (event) => {
    try {
      // const path = [ ... values, `${event.target.id}=${event.target.value}`]
      // const pathTwo = path.join('&')
      // console.log('my path >>', path)
      const value = `/?${event.target.id}=${event.target.value}`
      const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${value}`)
      setNextPage(data.info.next)
      setCharacter(data.results)
      // setValues(path)
      
    } catch (err) {
      console.log(err)
    }
  } 

  // console.log(values)
  // console.log('i picked >>', character)

  // https://rickandmortyapi.com/api/character/?page=2&name=rick&status=alive&gender=male
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   const filteredCharacterArray = character
  //   console.log('character', filteredCharacterArray)
  //   setCharacter(filteredCharacterArray)
  //   console.log('make my change')
  // }
  
  return (
    <section className='section is-flex'>
      <div className="container">
        <form>
          <h3>Find a character based on:</h3>
          <div className="select is-small">
            <select id="status"onChange={handleChange} className='select-dropdown'>
              <option value='' className='drowpdown-item'>Status</option>
              <option value='dead' className='dropdown-item'>Dead</option>
              <option value='alive' className='dropdown-item'>Alive</option>
            </select>
          </div>
          <div className="select is-small">
            <select id="gender" onChange={handleChange} className='select-dropdown'>
              <option value='' className='drowpdown-item'>Gender</option>
              <option value='female' className='drowpdown-item'>Female</option>
              <option value='male' className='dropdown-item'>Male</option>
              <option value='genderless' className='dropdown-item'>Genderless</option>
            </select>
          </div>
          <div className="select is-small">
            <select id="species" onChange={handleChange} className='select-dropdown'>
              <option value='' className='drowpdown-item'>Species</option>
              <option value='human' className='drowpdown-item'>Human</option>
              <option value='alien' className='dropdown-item'>Alien</option>
              <option value='unknown' className='dropdown-item'>Unknown</option>
            </select>
          </div>
          <button type="submit" value="filter">Submit filter</button>
        </form>
      </div>
      
      <div className='container margin-top'>
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
