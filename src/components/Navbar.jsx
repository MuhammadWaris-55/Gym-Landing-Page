import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <nav className="w-full bg-[#050706] h-16 flex items-center px-14">

            <div className="flex items-center">
                <img src={logo} alt="Vyayamshala Logo" className="h-10 w-auto"/>
            </div>

            <div className="flex items-center gap-12 ml-auto text-base font-light text-gray-300">

                <a href="#home" className="text-yellow-400 transition">
                    Home
                </a>

                <a href="#about" className="hover:text-yellow-400 transition">
                    About
                </a>

                <a href="#reviews" className="hover:text-yellow-400 transition">
                    Reviews
                </a>

                <a href="#services" className="hover:text-yellow-400 transition">
                    Services
                </a>

                <a href="#contact" className="hover:text-yellow-400 transition">
                    Contact
                </a>

            </div>
        </nav>
    );
};

export default Navbar;
