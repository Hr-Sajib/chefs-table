import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";

const Recipes = ({handleWantedRecipes}) => {


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

            <div className="flex w-full justify-between gap-1 mt-6">



                {/* recipes  */}
                <div className="grid grid-cols-2 gap-3 " >
                    
                    {
                        recipes.map(recipe=><Recipe
                                            key={recipe.id}
                                            recipe={recipe}
                                            handleWantedRecipes={handleWantedRecipes}
                                            ></Recipe>)
                    }
                    
                    
                </div>


            </div>
        </div>
    );
};


export default Recipes;