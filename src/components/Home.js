import React from 'react' 
import { Link } from 'react-router-dom'
// import initialImage from '../images/first-Image.png'

const Home = () => {

  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1 has-text-centered">
            <span className="logo-emoji" role="img" aria-label="logo"></span>
            <Link to="/characters"><img className='inital-image' src='https://thumbs.gfycat.com/BareJoyousAsp.webp' alt='initialGif' /></Link>
            {/* <img src={initialImage} alt={initialImage}/> */}
            <span className="logo-emoji" role="img" aria-label="logo"></span>
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Home