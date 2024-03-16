import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Header/Nav'
import Header from './Components/Header/Header'
import Recipes from './Components/Recipes/Recipes'

function App() {
  

  return (
    <>
     
     <Nav></Nav>
     <Header></Header>
     <Recipes></Recipes>
    </> 
  )
}

export default App
