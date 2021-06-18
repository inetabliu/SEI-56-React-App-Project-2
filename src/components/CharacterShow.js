/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

//COMPONENT TO SHOW INDIVIDUAL CHARACTER 
const CharacterShow = () => {

  //States CHARACTER, EPISODE DISPLAY, LOCATION DISPLAY, ERROR HANDLING
  const [character, setCharacter] = useState([])
  const [location, setLocation] = useState([])
  const [episode, setEpisodes] = useState([])
  const { id } = useParams()
  const [hasError, setHasError] = useState(false)

  //GET API DATA FOR INDIVIDUAL CHARACTER BY ID
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        setCharacter(data)
        setLocation(data.location)
        setEpisodes(data.episode)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [id])



  return (
    <section className='section'>
      <div className='container random-container'>
        {character ,location, episode ?
          <div>
            <div className='positioning-content'>
              <h2 className='title has-text-centered'>{character.name}</h2>
              <div className='columns random-columns'>
                <div className='column is-3'>
                  <figure>
                    <img className='yellow-border' src={character.image} alt={character.name} />
                  </figure>
                </div>
                <div className='column is-3'>
                  <div className='random-text'>
                    <h4 className='title is-4'>Status</h4>
                    <p>{character.status}</p>
                  </div>
                  <div className='random-text'>
                    <h4 className='title is-4'>Species</h4>
                    <p>{character.species}</p>
                  </div>
                  <div className='random-text'>
                    <h4 className='title is-4'>Gender</h4>
                    <p>{character.gender}</p>
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
          :
          <h2 className="title has-text-centered">
            {hasError ? 'Something has gone wrong' : <img src='https://thumbs.gfycat.com/BareJoyousAsp.webp' alt='Rick And Morty'/>}
          </h2>
        }
      </div>
    </section>
    
  )
}


export default CharacterShow