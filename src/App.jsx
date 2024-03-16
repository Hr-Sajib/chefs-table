import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Header/Nav'
import Header from './Components/Header/Header'
import Recipes from './Components/Recipes/Recipes'
import WantCart from "./Components/Cart/WantCart"
import CookingCart from './Components/Cart/CookingCart'


function App() {



  const [wantedRecipes, setwantedRecipes]=useState([]);

  const handleWantedRecipes=(recipe)=>{
    if(!wantedRecipes.includes(recipe)){ 
      const newwantedRecipes=[...wantedRecipes,recipe]
      setwantedRecipes(newwantedRecipes)
    }

  }
  



  const [preparingRecipes, setpreparingRecipes]=useState([]);

  const handlepreparingRecipes=(recipe)=>{
      const newpreparingRecipes=[...preparingRecipes,recipe]
      setpreparingRecipes(newpreparingRecipes)
      
  }
  // console.log(preparingRecipes);


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
        <div className="border ml-3 mt-6 rounded-xl w-[460px] pt-3">
          <p className="font-bold my-1 text-green-700">Want to cook: <span>{wantedRecipes.length}</span></p>
          
          <div className='flex justify-start gap-5 my-1 pl-3'><p className='mr-16'>Name</p><p>Time</p><p>Calories</p></div>
          <hr /> 

          <WantCart
            wantedRecipes={wantedRecipes}
            handlepreparingRecipes={handlepreparingRecipes} >
          </WantCart>

          {/* Cooking cart  */}
          <div>
            <p className="font-bold my-1 text-green-700 mt-5">Currently Cooking <span>0</span></p>
            
            <CookingCart
            preparingRecipes={preparingRecipes}></CookingCart>
          </div>
        </div>

     </div>
     


    
    


                
    </> 
  )
}

export default App
