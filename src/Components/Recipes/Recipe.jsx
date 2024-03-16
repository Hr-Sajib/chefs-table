
const Recipe = ({recipe, handleWantedRecipes}) => {

    const {ingredients_array} = recipe;
    return (
        <div>
                <div className=" flex flex-col justify-between border rounded-xl p-5 h-[800px] w-[400px] bg-green-50">
                    <div>
                        <img className="rounded-xl h-[250px] w-[350px]" src={recipe.image_url} alt="" />
                        <p className="text-left font-bold my-3 text-[16px]">{recipe.name}</p>
                        <p className="text-left text-gray-600 ">{recipe.description}</p>
                        <hr  className="my-3"/>
                        <p className="font-bold text-left text-gray-600">Ingredients: <span>{ingredients_array.length}</span></p>
                        <ul className="list-disc text-left pl-3 text-gray-500 text-[16px]">
                            {
                                recipe.ingredients_array.map(IngredientsItem => <IngredientsItems key={IngredientsItem} IngredientsItem={IngredientsItem} ></IngredientsItems>)    
                            }
                        </ul>
                        <hr  className="my-3"/>
                        <div className="flex items-center gap-1 text-gray-600">
                            <img className="w-5 h-5" src="../../../images/timeIcon.png" alt="" />
                            <p className="text-[18px]"><span>30</span> minutes</p>
                            <img className="w-5 h-5" src="../../../images/caloryIcon.png" alt="" />
                            <p className="text-[18px]"><span>600</span> calories</p>
                        </div>
                    </div>
                        <div className="flex justify-end">
                            <button onClick={()=>handleWantedRecipes(recipe)} className="bg-green-400 hover:bg-green-700 hover:text-white rounded-full h-10 w-[150px] my-2 text-sm">Want To Cook</button>
                        </div>
                    
                </div>

        </div>
    );
};

export default Recipe;

const IngredientsItems=({IngredientsItem})=>{
    return(
        <li>{IngredientsItem}</li>
    )
}
