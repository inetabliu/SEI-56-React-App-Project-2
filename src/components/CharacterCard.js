/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'



const CharacterCard = ( { id, image, name }) => {
  return (
    <Link to={`/characters/${id}`}>
      <div className='card card-style'>
        <div className ='card-image'>
          <figure className='image is-flex image-is-1by1'>
            <img src={image} alt={name} />
          </figure>
        </div>
      </div>
    </Link>
  ) 
}



export default CharacterCard