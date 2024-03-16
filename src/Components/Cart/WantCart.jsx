
import WantedItem from './WantedItem'
const WantCart = ({wantedRecipes, handlepreparingRecipes}) => {

    return (
        // <div>
            wantedRecipes.map(item=><WantedItem key={item.id}
                                                name={item.name}
                                                preparing_time={item.preparing_time}
                                                calories={item.calories}
                                                handlepreparingRecipes={handlepreparingRecipes}
                                                ></WantedItem>)
        // </div>
        
    );
};

export default WantCart;




