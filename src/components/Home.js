/* eslint-disable no-unused-vars */
import React from 'react' 
import { Link } from 'react-router-dom'
import useSound from 'use-sound'
import Sound from '../sounds/allaboardmf.wav'


const Home = () => {

  //Play sound on entering the characters page
  const [play] = useSound(Sound)
  
  return (
    <>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <Link onClick={play}to="/characters"><img className='inital-image' src='https://thumbs.gfycat.com/BareJoyousAsp.webp' alt='initialGif' /></Link>
            <h1 className="larger is-responsive">Welcome to Rick & Morty Character World</h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home