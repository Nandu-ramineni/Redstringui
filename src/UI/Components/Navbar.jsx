import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Cancel01Icon, Menu03Icon } from 'hugeicons-react';
import Logo from '@/assets/Main1.jpg';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = () => {
        setIsMenuOpen(false); // Close the menu when a nav link or button is clicked
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-black/50 z-50 backdrop-blur-sm border-gray-800">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center px-4">
                    <img src={Logo} alt="Red String" className="h-9 w-auto md:h-12" loading='lazy' />
                    {/* <span className="text-red-600 font-semibold text-3xl tracking-wide">Red</span>
                    <span className="text-white font-semibold text-3xl tracking-wide">string</span> */}
                </Link>

                {/* Menu Toggle */}
                <button
                    className="sm:hidden text-gray-300 hover:text-white focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <Cancel01Icon size={24} /> : <Menu03Icon size={24} />}
                </button>

                {/* Navigation Links */}
                <div
                    className={`${
                        isMenuOpen ? 'flex flex-col space-y-4' : 'hidden'
                    } sm:flex sm:flex-row sm:space-y-0 sm:space-x-8 items-center absolute sm:static top-16 left-0 w-full sm:w-auto bg-black/80 sm:bg-transparent px-4 py-4 sm:p-0`}
                >
                    {/* <Link
                        to="/alumni"
                        onClick={handleNavClick}
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        Alumni
                    </Link>
                    <Link
                        to="/explore"
                        onClick={handleNavClick}
                        className="text-gray-300 hover:text-white transition-colors"
                    >
                        Explore Program
                    </Link> */}
                    <Link
                        to='/join'
                        onClick={handleNavClick}
                        className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-6 w-auto self-center text-center py-2 rounded-md"
                    >
                        Join the club
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
