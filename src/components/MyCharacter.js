import React from 'react'


const MyCharacter = () => {


  return (
    <section className='section is-mobile'>
      <div className='container random-container'>
        <div>
          <div className='positioning-content'>
            <h2 className='title has-text-centered'>Ineta</h2>
            <div className='columns random-columns'>
              <div className='column is-3'>
                <figure>
                  <img className='yellow-border' src='https://media-exp1.licdn.com/dms/image/C4D03AQHgA9iEgEdRug/profile-displayphoto-shrink_200_200/0/1553269019428?e=1629936000&v=beta&t=1jaHswZAjiCwg1rSnCwZtpHCKT1jeZCC4VK7bk6DjGc' alt='Ineta picture' />
                </figure>
              </div>
              <div className='column is-3'>
                <div className='random-text'>
                  <h4 className='title is-4'>Status</h4>
                  <p>Alive</p>
                </div>
                <div className='random-text'>
                  <h4 className='title is-4'>Species</h4>
                  <p>Human</p>
                </div>
                <div className='random-text'>
                  <h4 className='title is-4'>Gender</h4>
                  <p>Female</p>
                </div>
                <div className='random-text'>
                  <h4 className='title is-4'>Planet</h4>
                  <p>Earth 666</p>
                </div>
                <div className='random-text'>
                  <h4 className='title is-4'>GitHub</h4>
                  <a href="_blank" src="https://github.com/inetabliu"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyCharacter