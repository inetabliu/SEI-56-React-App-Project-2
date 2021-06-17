/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CharacterShow from './components/CharacterShow'
import Home from './components/Home'
import Navbar from './components/Navbar'



function App() {
 
  

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/characters" >
          <CharacterShow />
        </Route>
        <Route path="/">
          <Home />
        </Route>

      </Switch>
    
    </BrowserRouter>
 
  )
  
}

export default App
