import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Header/Nav'
import Header from './Components/Header/Header'
import Recipes from './Components/Recipes/Recipes'
import WantCart from "./Components/Cart/WantCart"


function App() {



  const [wantedRecipes, setwantedRecipes]=useState([]);

  const handleWantedRecipes=(recipe)=>{
    console.log(recipe)
  }

  return (
    <>
     
     <Nav></Nav>
     <Header></Header>

     <div className="mt-20">
        <h1 className="font-bold text-2xl">Our Recipes</h1>
        <p className="text-gray-600">Discover a wealth of culinary inspiration within Our Recipes section, where each dish is a masterpiece waiting to be savored. From comforting classics to innovative creations, let your gastronomic journey begin here.</p>
      </div>


     <div className='flex'>

      {/* recipies  */}
      <Recipes handleWantedRecipes={handleWantedRecipes}></Recipes>

      {/* recipe cart  */}
      <div className="border ml-3 mt-6 rounded-xl w-[460px]">
        <WantCart></WantCart>
    </div>
     </div>
     


    
    


                
    </> 
  )
}

export default App
