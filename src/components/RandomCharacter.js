/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'



const RandomCharacter = () => {
  const [randomCharacter, setRandomCharacter] = useState([])
  const [location, setLocation] = useState([])
  const [episode, setEpisodes] = useState([])


  useEffect(() => {
    const getData = async () => {
      try {
        const random = Math.floor(Math.random() * 671) + 1 
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${random}`)
        setRandomCharacter(data)
        setLocation(data.location)
        setEpisodes(data.episode)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [] )

  return (
    <section className='section'>
      <div className='container random-container'>
        <div className='positioning-content'>
          <h2 className='title has-text-centered'>{randomCharacter.name}</h2>
          <div className='columns random-columns'>
            <div className='column is-3'>
              <figure>
                <img className='yellow-border' src={randomCharacter.image} alt={randomCharacter.name} />
              </figure>
            </div>
            <div className='column is-3'>
              <div className='random-text'>
                <h4 className='title is-4'>Status</h4>
                <p>{randomCharacter.status}</p>
              </div>
              <div className='random-text'>
                <h4 className='title is-4'>Species</h4>
                <p>{randomCharacter.species}</p>
              </div>
              <div className='random-text'>
                <h4 className='title is-4'>Gender</h4>
                <p>{randomCharacter.gender}</p>
              </div>
              <div className='random-text'>
                <h4 className='title is-4'>Planet</h4>
                <p>{location.name}</p>
              </div>
              <div className='random-text'>
                <h4 className='title is-4'>Episodes</h4>
                <p>{episode.length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

export default RandomCharacter