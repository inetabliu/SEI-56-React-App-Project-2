/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import Sound from '../sounds/change.mp3'
import useSound from 'use-sound'

//COMPONENT CHARACTER CARD TO USE IN DISPLAYING FIRST 20 CHARACTERS ON CHARACTER SHOW PAGE & LINK TO CHARACTER SHOW PAGE

const CharacterCard = ( { id, image, name }) => {

  const [play] = useSound(Sound)
  
  return (
    <div className='column card-column is-one-fifth-desktop'>
      <Link  onClick={play} to={`/characters/${id}`}>
        <div className='card'>
          <div className ='card-image'>
            <figure className='image home-image image-is-1by1'>
              <div className='img_wrap'>
                <p className="color">{name}</p>
                <img className='yellow-border' src={image} alt={name} title={name}/>
              </div>
            </figure>
          </div>
        </div>
      </Link>
    </div>
  ) 
}



export default CharacterCard