import React, { useContext } from "react";
import { BiChevronDown, BiMenu, BiSearch } from "react-icons/bi";
import { MovieContext } from "../context/Movies.context";
import { Link } from "react-router-dom";

function Navsm() {
    return (
        <>
            <div className="text-white flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold ">It All Starts Here! </h3>
                    <span className="text-gray-499 text-xs flex items-center cursor-pointer hover:text-white">
                        Delhi NCR <BiChevronDown />
                    </span>
                </div>
                <div className="w-8 h-8">
                    <BiSearch className="w-full h-full" />
                </div>
            </div>
        </>
    );
}

function NavMd() {
    const { search, setSearch } = useContext(MovieContext);
    return (
        <>
            <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
                <BiSearch />
                <input 
                    type="search" 
                    className="w-full bg-transparent border-none focus:outline-none" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>


        </>
    )
}

function NavLg() {
    const { search, setSearch } = useContext(MovieContext);
    return (
        <>
            <div className="container flex mx-auto px-4 items-center justify-between">
                <div className="flex items-center w-1/2 gap-3">
                    <div className="w-10 h-10">
                        <Link to="/">
                        <img
                            src="data:image/png;base64,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"
                            alt="logo"
                            href="/"
                            className="w-full h-full rounded-2xl cursor-pointer"

                        /></Link>

                    </div>
                    <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
                        <BiSearch />
                        <input
                            type="search"
                            className="w-full bg-transparent border-none focus:outline-none"
                            value={search}
                            placeholder="Search for movies, events, plays, sports and activities"
                            onChange={(e) => setSearch(e.target.value)}
                        />

                    </div>
                </div>
                <div className="flex items-center gap-3" >
                    <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
                        Delhi NCR <BiChevronDown />
                    </span>
                    <button className="bg-red-600 text-white px-2 py-1 text-sm rounded ">
                        Sign In
                    </button>
                    <div className="w-8 h-8 text-white">
                        <BiMenu className="w-full h-full" />
                    </div>
                </div>
            </div>

        </>
    )
}

const Navbar = () => {
    return (
        <nav className="bg-darkBackground-700 px-4 py-3 sticky top-0 z-50" >
            <div className="md:hidden">
                <Navsm />
            </div>
            <div className=" hidden md:flex lg:hidden">
                <NavMd />
            </div>
            <div className="hidden md:hidden lg:flex">
                <NavLg />
            </div>

        </nav>
    )
};
export default Navbar;