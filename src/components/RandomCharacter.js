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
    <section className='section random-section'>
      <div className='container'>
        <div className='positioning-content'>
          <h2 className='title has-text-centered'>{randomCharacter.name}</h2>
          <hr />
          <div className='columns random-columns'>
            <div className='column is-3'>
              <figure>
                <img src={randomCharacter.image} alt={randomCharacter.name} />
              </figure>
            </div>
            <div className='column is-3'>
              <h4 className='title is-4'>Status</h4>
              <p>{randomCharacter.status}</p>
              <hr />
              <h4 className='title is-4'>Species</h4>
              <p>{randomCharacter.species}</p>
              <hr />
              <h4 className='title is-4'>Gender</h4>
              <p>{randomCharacter.gender}</p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

export default RandomCharacter