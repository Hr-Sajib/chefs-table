
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
            <div className='flex gap-1 items-center'>
                <div className='border flex bg-gray-100 rounded-3xl'>
                    <div>
                        <input className="rounded-3xl bg-gray-100 h-[50px] pl-6 mr-1" placeholder="Search" type="text" name="" id="" />
                        <button className='px-5 rounded-3xl w-16 bg-gray-100 h-[50px]'><img src="../../../images/searchIcon.png" alt="" /></button>
                    </div>
                </div>
                <img className='w-10 h-10' src={NavProfile} alt="" />
            </div>
        </div>
    );
};




export default Nav;