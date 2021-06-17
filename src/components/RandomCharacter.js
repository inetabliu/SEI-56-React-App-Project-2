/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { data } from 'browserslist'
// import { useParams } from 'react-router-dom'
// import image from '../images/first-Image.png'


const RandomCharacter = () => {
  const [randomCharacter, setRandomCharacter] = useState([])
  //const { id } = useParams()


  useEffect(() => {
    const getData = async () => {
      try {
        const random = Math.floor(Math.random() * 671) + 1 
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${random}`)
        setRandomCharacter(data)
        console.log(data.image)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
    
  }, [] )

  return (
    <div>
      <p>{randomCharacter.name}</p>
      <img src={randomCharacter.image} alt={randomCharacter.name} />
      <p>Status: {randomCharacter.status}</p>
      <p>Species: {randomCharacter.species}</p>
      <p>Gender: {randomCharacter.gender}</p>
      {/* <p>Planet: {character.origin.name}</p> */}
    </div>
  )

}

export default RandomCharacter