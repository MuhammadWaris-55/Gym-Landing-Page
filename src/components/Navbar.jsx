import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {

      const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-[#050706] h-16 flex items-center px-6 md:px-14 relative">

            <div className="flex items-center">
                <img src={logo} alt="Vyayamshala Logo" className="h-10 w-auto" />
            </div>

            <div className="hidden md:flex items-center gap-12 ml-auto text-base font-light text-gray-300">

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

            <div className="md:hidden ml-auto text-gray-300 text-2xl cursor-pointer z-50"
                 onClick={() => setIsOpen(!isOpen)}>

                {isOpen ? (
                    <i className="fa-solid fa-xmark"></i>
                ) : (
                    <i className="fa-solid fa-bars"></i>
                )}

            </div>

            <div className={`absolute top-16 left-0 w-full bg-[#050706] flex flex-col items-center gap-6 py-6 text-gray-300 text-lg transition-all duration-500 ease-in-out
                ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}>

                <a href="#home" onClick={() => setIsOpen(false)} className="text-yellow-400">
                    Home
                </a>

                <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">
                    About
                </a>

                <a href="#reviews" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">
                    Reviews
                </a>

                <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">
                    Services
                </a>

                <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">
                    Contact
                </a>

            </div>

        </nav>
    );
};

export default Navbar;
