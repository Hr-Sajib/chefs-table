
const Header = () => {
    return (
        <div className=" flex flex-col justify-center mt-8 rounded-[50px] bg-[url('../../../images/banner.png')] lg:h-[500px] p-10">
            <h1 className="text-4xl text-white font-bold mb-5 px-5">Discover an exceptional cooking class tailored for you!</h1>
            <p className="text-gray-200 mb-5">Experience the art of culinary bliss with our delectable recipes, crafted to tantalize your taste buds and elevate your dining experience!</p>
            <div className="flex gap-5 justify-center">
                <button className="bg-green-500 rounded-full h-10 w-[150px] font-bold">Explore Now</button>
                <button className=" border border-2 border-white text-white font-bold rounded-full h-10 w-[160px] px-1">Our Feedback</button>
            </div>
        </div>
    );
};

export default Header;

