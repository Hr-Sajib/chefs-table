
const WantedItem =({name,preparing_time,calories, handlepreparingRecipes})=>{
    const recipe = { name, preparing_time, calories };

    return(
        <div className="flex flex-row items-center mt-1 rounded-xl p-1 flex justify-start text-[16px] mx-1 bg-green-100">
            <p className="w-[160px] text-left mr-6 ml-1">{name}</p>
            <p className="mr-14">{preparing_time}</p>
            <p>{calories}</p>
            <button onClick={()=>handlepreparingRecipes(recipe)} className=" bg-green-500 rounded-xl h-[40px] w-[100px] ml-5 hover:bg-green-400">Prepare</button>
        </div>
    )
}

export default WantedItem;