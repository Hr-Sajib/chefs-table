
const Nav = () => {
    return (
        <div className="flex items-center justify-between border">
            
            <h1 className="font-bold text-2xl">Royal Chef</h1>
            <ul className="lg:flex gap-3">
                <li>Home</li>
                <li>Recipes</li>
                <li>About</li>
                <li>Search</li>
            </ul>
            <input className="border bg-gray-200 rounded-3xl h-[50px] p-3" placeholder="Search" type="text" name="" id="" />
        </div>
    );
};

export default Nav;