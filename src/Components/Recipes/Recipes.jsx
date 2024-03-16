import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";

const Recipes = () => {


    // load recipes json

    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        fetch('recipes.json')
        .then(res=>res.json())
        .then(data=> setRecipes(data))
    }
    ,[])





    return (
        <div>
            <div className="mt-20">
                <h1 className="font-bold text-2xl">Our Recipes</h1>
                <p className="text-gray-600">Discover a wealth of culinary inspiration within Our Recipes section, where each dish is a masterpiece waiting to be savored. From comforting classics to innovative creations, let your gastronomic journey begin here.</p>
            </div>

            <div className="flex w-full justify-between gap-1 mt-6">
                {/* recipes  */}
                <div className="grid grid-cols-2 gap-3 " >
                    
                    {
                        recipes.map(recipe=><Recipe
                                            key={recipe.id}
                                            recipe={recipe}
                                            ></Recipe>)
                    }
                    
                    
                </div>

                {/* recipe cart  */}
                <div className="border ml-3 rounded-xl">
                    
                </div>
            </div>
        </div>
    );
};


export default Recipes;