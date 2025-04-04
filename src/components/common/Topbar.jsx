import React, { useState } from "react";
import logo from "../../assets/logo.png"
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Topbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="sticky top-0 z-50 bg-black/50 backdrop-blur-md shadow-lg border-b border-purple-500 px-6 md:px-10 py-3 flex items-center justify-between transition-all duration-500">

            <div className="flex items-center">
                <Link to={"/"}>
                    <img src={logo} alt="Logo" className="size-12 transition-all duration-700" />
                </Link>
            </div>

            <div className="hidden md:flex items-center gap-8">
                <div className="relative inline-block text-lg font-semibold text-white cursor-pointer group transition-all duration-300">
                    <Link to={"/about"} >About</Link>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                </div>
                <div className="relative inline-block text-lg font-semibold text-white cursor-pointer group transition-all duration-300">
                    <Link to={"/satellite"}>Satellite</Link>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                </div>
                <div className="relative inline-block text-lg font-semibold text-white cursor-pointer group transition-all duration-300">
                    <Link to={"/launchVehicle"}>Drone</Link>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                </div>
                <div className="relative inline-block text-lg font-semibold text-white cursor-pointer group transition-all duration-300">
                    <Link to={"/missile"}>Upcoming Project</Link>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                </div>

            </div>


            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white focus:outline-none transition-transform duration-300"
            >
                {isMenuOpen ? (
                    <X className="size-8 animate-fade-in rotate-180 transition-transform duration-300" />
                ) : (
                    <Menu className="size-8 animate-fade-in rotate-0 transition-transform duration-300" />
                )}
            </button>


            <div
                className={`absolute top-full left-0 w-full bg-black/90 flex flex-col items-center space-y-5 py-5 transition-all duration-500 ${isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                    }`}
            >
                <div className="text-lg font-semibold text-white cursor-pointer transition-all duration-300 hover:text-pink-400">
                    <Link to={"/about"} onClick={() => setIsMenuOpen(!isMenuOpen)}>About</Link>
                </div>
                <div className="text-lg font-semibold text-white cursor-pointer transition-all duration-300 hover:text-pink-400">
                    <Link to={"/satellite"} onClick={() => setIsMenuOpen(!isMenuOpen)}>Satellite</Link>
                </div>
                <div className="text-lg font-semibold text-white cursor-pointer transition-all duration-300 hover:text-pink-400">
                    <Link to={"/launchVehicle"} onClick={() => setIsMenuOpen(!isMenuOpen)}>Drone</Link>
                </div>
                <div className="text-lg font-semibold text-white cursor-pointer transition-all duration-300 hover:text-pink-400">
                    <Link to={"/missile"} onClick={() => setIsMenuOpen(!isMenuOpen)}>Upcoming Project</Link>
                </div>
                <div className="text-lg font-semibold text-white cursor-pointer transition-all duration-300 hover:text-pink-400">
                    <Link to={"/login"} onClick={() => setIsMenuOpen(!isMenuOpen)} className="relative px-4 py-2 text-white font-semibold text-sm rounded-full border border-purple-400 bg-black/40 shadow-[0_0_10px_#8e44ad] hover:shadow-[0_0_20px_#e056fd] transition-all duration-300 hover:scale-105 cursor-pointer">
                        ✨ Login
                    </Link>
                </div>
            </div>


            <div className="hidden md:flex items-center space-x-4">
                <Link to={"/login"} className="relative px-4 py-2 text-white font-semibold text-sm rounded-full border border-purple-400 bg-black/40 shadow-[0_0_10px_#8e44ad] hover:shadow-[0_0_20px_#e056fd] transition-all duration-300 hover:scale-105 cursor-pointer">
                    ✨ Login
                </Link>
            </div>
        </div>
    );
};

export default Topbar;


