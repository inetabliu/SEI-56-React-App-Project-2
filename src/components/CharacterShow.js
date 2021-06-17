/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const CharacterShow = () => {
  const [character, setCharacter] = useState([])
  // const [hasError, setHasError] = useState(false)
  // const [nextPage, setNextPage] = useState('')
  const { id } = useParams()
  console.log('my id',id)


  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        setCharacter(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])

  return (
    <div key={id}>
      <p>{character.name}</p>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      {/* <p>Planet: {character.origin.name}</p> */}
    </div>
  )
}


export default CharacterShow