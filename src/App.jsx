import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Header/Nav'
import Header from './Components/Header/Header'
import Recipes from './Components/Recipes/Recipes'
import WantCart from "./Components/Cart/WantCart"
import CookingCart from './Components/Cart/CookingCart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {



  const [wantedRecipes, setwantedRecipes]=useState([]);

  const handleWantedRecipes=(recipe)=>{
    if(!wantedRecipes.includes(recipe)){ 
      const newwantedRecipes=[...wantedRecipes,recipe]
      setwantedRecipes(newwantedRecipes)
    }
    else{
      toast('Already added... ')
    }

  }
  



  const [preparingRecipes, setpreparingRecipes]=useState([]);

  const[totalTime,setTotalTime] = useState(0);
  const[totalCalory,setTotalCalory] = useState(0);



  const handlepreparingRecipes=(recipe)=>{
      // update preparing table 
      const newpreparingRecipes=[...preparingRecipes,recipe]
      setpreparingRecipes(newpreparingRecipes)
      console.log(recipe.preparing_time)

      // update totals 
      const newTotalTime = totalTime + parseInt(recipe.preparing_time);
      setTotalTime(newTotalTime)
      const newTotalCalory = totalCalory + parseInt(recipe.calories);
      setTotalCalory(newTotalCalory)

      const newWantedRecipes = wantedRecipes.filter(wantedRecipe=> wantedRecipe.name!==recipe.name)
      setwantedRecipes(newWantedRecipes);
  }



  return (
    <div className=''>
     
     <Nav></Nav>
     <Header></Header>

     <div className="lg:mt-20 mt-10">
        <h1 className="font-bold lg:text-2xl text-xl">Our Recipes</h1>
        <p className="text-gray-600 lg:text-base text-[16px] lg:px-0 px-6">Discover a wealth of culinary inspiration within Our Recipes section, where each dish is a masterpiece waiting to be savored. From comforting classics to innovative creations, let your gastronomic journey begin here.</p>
      </div>


     <div id='recipesSect' className='flex lg:flex-row flex-col'>

        {/* recipies  */}
        <Recipes handleWantedRecipes={handleWantedRecipes}></Recipes>

        {/* recipe cart  */}
        <ToastContainer />

        <div className="border lg:ml-3 mt-6 rounded-xl lg:w-[460px] pt-3">
          <p className="font-bold my-1 text-green-700">Want to cook: <span>{wantedRecipes.length}</span></p>
          
          <div className='flex justify-start gap-5 my-1 pl-3'><p className='mr-16'>Name</p><p>Time</p><p>Calories</p></div>
          <hr className='mb-3'/> 

          <WantCart
            wantedRecipes={wantedRecipes}
            handlepreparingRecipes={handlepreparingRecipes} >
          </WantCart>

          {/* Cooking cart  */}
          <div>
            <p className="font-bold my-1 text-green-700 mt-16">Currently Cooking <span>{preparingRecipes.length}</span></p>
            
            <CookingCart
            preparingRecipes={preparingRecipes}>
            </CookingCart>

            <hr className='my-3'/>

            {/* totals  */}
            <div className='flex  items-center justify-around lg:pr-10 '>
              <p className='text-[18px] w-[150px]'>Total:</p><p>{totalTime} min</p><p>{totalCalory} cal</p>
            </div>
          </div>
        </div>

     </div>
     
     
    </div> 
  )
}

export default App
