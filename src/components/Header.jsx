import IconMoon from "./icons/IconMoon";

const Header =() => {
    return(
        <header className="container mx-auto pt-8 px-4">
            <div className="flex justify-between ">
                <h1 
                className="uppercase text-white text-3xl font-semibold tracking-widest">
                    Todo
                </h1>
                <button>
                <IconMoon className="fill-red-400"/>
                </button>
            </div>
       </header>
    );
};

export default Header;