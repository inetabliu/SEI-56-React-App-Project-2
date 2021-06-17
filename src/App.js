/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CharacterIndex from './components/CharacterIndex'
import CharacterCard from './components/CharacterCard'
import Home from './components/Home'
import Navbar from './components/Navbar'
import CharacterShow from './components/CharacterShow'
import CharacterAlive from './components/CharacterAlive'



function App() {
 
  

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/characters/:id">
          <CharacterShow />
        </Route>
        <Route path="/characters" >
          <CharacterIndex />
        </Route>
        <Route path="/">
          <Home />
        </Route>

      </Switch>
    
    </BrowserRouter>
 
  )
  
}

export default App
