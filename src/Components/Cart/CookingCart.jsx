
const CookingCart = ({preparingRecipes}) => {
    // console.log(preparingRecipes)
    return (
        <div>
            {
                preparingRecipes.map(preparingRecipe=><CookingItem 
                                                        key={preparingRecipe.name}
                                                        name={preparingRecipe.name}
                                                        preparing_time={preparingRecipe.preparing_time}
                                                        calories={preparingRecipe.calories}
                                                        ></CookingItem>)
            }
        </div>
    );
};

export default CookingCart;




const CookingItem =({name,preparing_time,calories})=>{
    
    return(
        <div className="cookingItem  h-[60px] flex flex-row items-center mt-1 rounded-xl p-1 justify-start text-[16px] mx-1 bg-green-300">
            <p className="w-[180px] text-left mr-6 ml-1">{name}</p>
            <p className="mr-14">{preparing_time}</p>
            <p>{calories}</p>
        </div>
    )
}

