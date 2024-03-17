

const Nav = () => {

    return (
        <div className="flex items-center justify-between lg:px-5 ">

            <div className="dropdown dropdown-bottom lg:hidden flex ">
                <div tabindex="0" role="button" className="btn m-1"><img className="h-6 lg:hidden flex" src="../../../images/options-lines_82122.png" alt=""></img>
                </div>
                <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Home</a></li>
                  <li><a>Recipes</a></li>
                  <li><a>About</a></li>
                  <li><a>Search</a></li>
                </ul>
            </div>

            <div className='flex '>
                <img className='lg:h-10 h-8' src="../../../images/pot.gif" alt="" />
                <h1 className="font-bold lg:text-2xl pt-1 text-[26px]">Royal Chef</h1>
            </div>
            <ul className="lg:flex hidden gap-3 text-gray-600 ">
                <li className="text-green-600 font-bold">Home</li>
                <li className="hover:text-green-600">Recipes</li>
                <li className="hover:text-green-600">About</li>
                <li className="hover:text-green-600">Search</li>
            </ul>
            <div className='flex gap-1 items-center lg:pr-0 pr-1'>
                <div className='border flex bg-gray-100 rounded-3xl'>
                    <div className="lg:flex hidden">
                        <input className="rounded-3xl bg-gray-100 h-[50px] pl-6 mr-1" placeholder="Search" type="text" name="" id="" />
                        <button className='px-5 rounded-3xl w-16 bg-gray-100 h-[50px]'><img src="../../../images/searchIcon.png" alt="" /></button>
                    </div>
                </div>
                <img className='w-[55px] rounded-full border border-[3px] border-green-500' src='../../../images/man.png' alt="" />
            </div>
        </div>
    );
};




export default Nav;