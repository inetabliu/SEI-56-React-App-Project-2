/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'



const CharacterCard = ( { id, image, name }) => {
  return (
    <div className='column card-column is-one-fifth-desktop'>
      <Link to={`/characters/${id}`}>
        <div className='card'>
          <div className ='card-image'>
            <figure className='image image-is-1by1'>
              <div className='img_wrap'>
                <img id='' src={image} alt={name} title={name}/>
                <p className="hover">{name}</p>
              </div>
            </figure>
          </div>
        </div>
      </Link>
    </div>
  ) 
}



export default CharacterCard