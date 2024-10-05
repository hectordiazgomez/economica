import React, { useState } from 'react';
import logo from "./assets/img/complete_logo.png"

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 bg-white shadow-md z-50">
            <div className="container mx-auto flex items-center justify-between py-6 px-4 md:px-8">
                <a href="/" className="flex items-center">
                    <img
                        src={logo}
                        alt="ECONÓMICA"
                        className="w-40 h-auto"
                    />
                </a>
                <button
                    className="text-gray-700 md:hidden focus:outline-none"
                    onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <i className={`bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'} text-2xl`}></i>
                </button>
                <nav
                    className={`flex-col md:flex-row md:flex items-center md:space-x-8 ${isMobileMenuOpen ? 'flex' : 'hidden'}`}
                >
                    <a href="#about" className="block py-2 md:py-0 text-gray-700 hover:text-blue-500 transition">
                        Nosotros
                    </a>
                    <a href="#team" className="block py-2 md:py-0 text-gray-700 hover:text-blue-500 transition">
                        Multimedia
                    </a>
                    <a href="#team" className="block py-2 md:py-0 text-gray-700 hover:text-blue-500 transition">
                        Cursos
                    </a>
                    <div className="relative group">
                        <a
                            href="#"
                            className="block py-2 md:py-0 text-gray-700 hover:text-blue-500 transition flex items-center"
                        >
                            Publicaciones <i className="bi bi-chevron-down ml-1"></i>
                        </a>
                        <ul className="absolute hidden group-hover:flex flex-col bg-white shadow-md border rounded mt-2 space-y-1 py-2">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    Secciones
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    Notas Informativas
                                </a>
                            </li>
                            <li>
                                <a href="blog.html" className="block px-4 py-2 hover:bg-gray-100">
                                    Artículos
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                    Boletines
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a href="" className="block flex items-center justify-center py-2 md:py-0 text-gray-700 hover:text-blue-500 transition">
                        <button className='bg-green-800 text-white rounded px-4 py-2 hover:bg-green-900'>Contacto</button>
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
