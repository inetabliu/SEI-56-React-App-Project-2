/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'


const CharacterCard = ( { id, image, name }) => {
  return (
    <Link to={`/characters/${id}`}>
      <div key={id}>
        <p>{name}</p>
        <img src={image} alt={name} />
      </div>
    </Link>
  ) 
}



export default CharacterCard