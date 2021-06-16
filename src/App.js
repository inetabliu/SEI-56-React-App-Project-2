/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Pagination from 'bulma-pagination-react'
import axios from 'axios'

const arrayPages = [
  'https://rickandmortyapi.com/api/character/?page=1',
  'https://rickandmortyapi.com/api/character/?page=2',
  'https://rickandmortyapi.com/api/character/?page=3',
  'https://rickandmortyapi.com/api/character/?page=4',
  'https://rickandmortyapi.com/api/character/?page=5',
  'https://rickandmortyapi.com/api/character/?page=6',
  'https://rickandmortyapi.com/api/character/?page=7',
  'https://rickandmortyapi.com/api/character/?page=8',
  'https://rickandmortyapi.com/api/character/?page=9',
  'https://rickandmortyapi.com/api/character/?page=10',
  'https://rickandmortyapi.com/api/character/?page=11',
  'https://rickandmortyapi.com/api/character/?page=12',
  'https://rickandmortyapi.com/api/character/?page=13',
  'https://rickandmortyapi.com/api/character/?page=14',
  'https://rickandmortyapi.com/api/character/?page=15',
  'https://rickandmortyapi.com/api/character/?page=16',
  'https://rickandmortyapi.com/api/character/?page=17',
  'https://rickandmortyapi.com/api/character/?page=18',
  'https://rickandmortyapi.com/api/character/?page=19',
  'https://rickandmortyapi.com/api/character/?page=20',
  'https://rickandmortyapi.com/api/character/?page=21',
  'https://rickandmortyapi.com/api/character/?page=22',
  'https://rickandmortyapi.com/api/character/?page=23',
  'https://rickandmortyapi.com/api/character/?page=24',
  'https://rickandmortyapi.com/api/character/?page=25',
  'https://rickandmortyapi.com/api/character/?page=26',
  'https://rickandmortyapi.com/api/character/?page=27',
  'https://rickandmortyapi.com/api/character/?page=28',
  'https://rickandmortyapi.com/api/character/?page=29',
  'https://rickandmortyapi.com/api/character/?page=30',
  'https://rickandmortyapi.com/api/character/?page=31',
  'https://rickandmortyapi.com/api/character/?page=32', 
  'https://rickandmortyapi.com/api/character/?page=33',
  'https://rickandmortyapi.com/api/character/?page=34'
]

const random = Math.floor(Math.random() * arrayPages.length)
arrayPages[random]
console.log(random)

function App() {
  
  const [character, setCharacter] = useState([])
  const [filteredCharacter, setFilteredCharacter] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(arrayPages[random])
      // console.log(data)
      setCharacter(data.results)
    }
    getData()
  }, [])

 


  const handleChange = (event) => {
   
    const filteredArray = character.filter(item => {
      return (item.status === event.target.value) || (item.species === event.target.value) || (item.gender === event.target.value)
    })
    setCharacter(filteredArray)
  }

  

  return (
    <>
      <section>
        <div>
          <div> Pick the livelines status:
            <br />
            <label htmlFor='alive'>Alive</label>
            <input onClick={handleChange} type="radio" id='alive' name='status'  value='Alive'/>
            <br />
            <label htmlFor='dead'>Dead</label>
            <input onClick={handleChange} type="radio" id='dead' name='status' value='Dead' />
            <br />
            <label htmlFor='unknown'>Unknown</label>
            <input onClick={handleChange} type="radio" id='unknown' name='status' value='unknown'/>
          </div>
          <div> Youre a human or an alien?
            <label htmlFor='human'>Human</label>
            <input onClick={handleChange} type="radio" id='human' name='species'  value='Human'/>
            <br />
            <label htmlFor='alien'>Alien</label>
            <input onClick={handleChange} type="radio" id='alien' name='species' value='Alien' />
            <br />
          </div>
          <div> Pick your gender:
            <label htmlFor='gender'>Male</label>
            <input onClick={handleChange} type="radio" id='human' name='gender'  value='Male'/>
            <br />
            <label htmlFor='gender'>Female</label>
            <input onClick={handleChange} type="radio" id='alien' name='gender' value='Female' />
            <br />
            <label htmlFor='human'>Unknown</label>
            <input onClick={handleChange} type="radio" id='human' name='gender'  value='unknown'/>
            <br />
            <label htmlFor='alien'>Genderless</label>
            <input onClick={handleChange} type="radio" id='alien' name='gender' value='Genderless' />
            <br />
          </div>
        </div>
      </section>
      
      {character.map((item, index) => {
        return <div key={index}>
          <p>Name: {item.name}</p>
          <img src={item.image} alt={item.name} />
          <p>Status: {item.status}</p>
          <p>Species: {item.species}</p>
          <p>Gender: {item.gender}</p>
          <p>Planet: {item.origin.name}</p>
        </div>
      }) 
      }
    </>
  )
  
}

export default App
