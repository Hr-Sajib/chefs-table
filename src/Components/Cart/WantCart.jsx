
const WantCart = ({wantedRecipes}) => {
    // const{name,preparing_time,calories}=wantedRecipes;
    return (
        <div>
            wantedRecipes.map(item=><WantedItem key={item.id}
                                                name={item.name}
                                                preparing_time={item.preparing_time}
                                                calories={item.calories}
                                                ></WantedItem>)
        </div>
        
    );
};

export default WantCart;




const WantedItem =({name,preparing_time,calories})=>{
    return(
        <div className="p-5 flex gap-1">
            <p className="font-bold">Want to cook: 01</p>
            <p>{name}</p>
            <p>{preparing_time}</p>
            <p>{calories}</p>
        </div>
    )
}