
import NavProfile from '../../../images/NavProfile.png'



const Nav = () => {

    return (
        <div className="flex items-center justify-between px-5">
            
            <h1 className="font-bold text-2xl">Royal Chef</h1>
            <ul className="lg:flex gap-3 text-gray-600">
                <li>Home</li>
                <li>Recipes</li>
                <li>About</li>
                <li>Search</li>
            </ul>
            <div className='flex gap-1'>
                <input className=" bg-green-100  rounded-3xl h-[50px] pl-4" placeholder="Search" type="text" name="" id="" />
                <img src={NavProfile} alt="" />
            </div>
        </div>
    );
};




export default Nav;