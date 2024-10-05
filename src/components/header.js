import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "./assets/img/complete_logo.png"

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 shadow-md bg-white md:bg-transparent">
            <div className="relative h-20">
                {/* White section (1/4 width) - hidden on mobile */}
                <div className="absolute top-0 left-0 w-1/4 h-full bg-white z-10 hidden md:block"></div>

                {/* Green gradient section - hidden on mobile */}
                <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-r from-green-600 via-teal-700 to-[#000066] z-20 hidden md:block"></div>

                {/* Diagonal overlay - hidden on mobile */}
                <div
                    className="absolute top-0 left-1/4 w-1/4 h-full bg-white transform -skew-x-12 origin-top-left z-30 hidden md:block"
                    style={{
                        clipPath: 'polygon(0 0, 100% 0, 0 100%)'
                    }}
                ></div>

                {/* Content */}
                <div className="container mx-auto flex items-center justify-between h-full px-4 md:px-8 relative z-40">
                    {/* Logo */}
                    <a href="/" className="flex items-center">
                        <img
                            src={logo}
                            alt="ECONÓMICA"
                            className="w-40 h-auto"
                        />
                    </a>

                    {/* Mobile menu button */}
                    <button
                        className="text-green-600 md:text-white md:hidden focus:outline-none"
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                    {/* Navigation */}
                    <nav
                        className={`md:flex-row md:flex items-center md:space-x-8 ${isMobileMenuOpen
                                ? 'flex flex-col absolute top-full left-0 right-0 bg-gradient-to-r from-green-600 via-teal-700 to-[#000066] p-4'
                                : 'hidden'
                            } md:relative md:bg-transparent md:p-0`}
                    >
                        <a href="#about" className="block py-2 md:py-0 text-white hover:text-blue-300 transition">
                            Nosotros
                        </a>
                        <a href="#team" className="block py-2 md:py-0 text-white hover:text-blue-300 transition">
                            Multimedia
                        </a>
                        <a href="#team" className="block py-2 md:py-0 text-white hover:text-blue-300 transition">
                            Cursos
                        </a>
                        <div className="relative group">
                            <a
                                href="#"
                                className="block py-2 md:py-0 text-white hover:text-blue-300 transition flex items-center"
                            >
                                Publicaciones <i className="ml-1">▼</i>
                            </a>
                            <ul className="md:absolute hidden group-hover:flex flex-col bg-white shadow-md border rounded mt-2 space-y-1 py-2">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-green-600 md:text-inherit">
                                        Secciones
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-green-600 md:text-inherit">
                                        Notas Informativas
                                    </a>
                                </li>
                                <li>
                                    <a href="blog.html" className="block px-4 py-2 hover:bg-gray-100 text-green-600 md:text-inherit">
                                        Artículos
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-green-600 md:text-inherit">
                                        Boletines
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <a href="" className="block flex items-center justify-center py-2 md:py-0">
                            <button className='bg-teal-800 text-white rounded px-4 py-2 hover:bg-teal-900'>Contacto</button>
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;