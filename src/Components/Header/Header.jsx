
const Header = () => {
    return (
        <div className=" flex flex-col justify-center lg:mt-8 mx-1 lg:rounded-[50px] rounded-[25px] bg-[url('../../../images/banner.png')] lg:h-[500px] lg:p-10 py-5">
            <h1 className="lg:text-4xl text-2xl text-white font-bold mb-5 px-5">Discover an exceptional cooking class tailored for you!</h1>
            <p className="text-gray-200 mb-5 lg:text-base text-[16px] px-1">Experience the art of culinary bliss with our delectable recipes, crafted to tantalize your taste buds and elevate your dining experience!</p>
            <div className="flex gap-5 justify-center">
                <button id="exloreBtn" onClick={()=>document.getElementById('recipesSect').scrollIntoView({behavior:'smooth'})} className="bg-green-500 rounded-full h-10 w-[150px] font-bold hover:bg-green-400">Explore Now</button>
                <button className=" border border-2 border-white text-white font-bold rounded-full h-10 w-[160px] px-1">Our Feedback</button>
            </div>
        </div>
    );
};

export default Header;

