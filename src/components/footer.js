import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 text-gray-700">
            {/* Newsletter Section */}
            <div className="bg-blue-50 py-8">
                <div className="container mx-auto text-center">
                    <h3 className="text-2xl font-semibold mb-2">Suscríbete a Económica</h3>
                    <p className="mb-4">
                        Suscribete para recibir publicaciones, artículos, cursos y más
                    </p>
                    <div className="flex justify-center">
                        <input
                            type="email"
                            placeholder="Ingresa tu dirección de correo electrónico"
                            className="p-3 w-full max-w-md rounded-l-md border border-gray-300 focus:outline-none"
                        />
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none">
                            Suscribirse
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Links Section */}
            <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
                {/* Company Info */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">Económica</h4>
                    <p>Pontificia Universidad Católica del Perú</p>
                    <p className="mt-3">
                        <strong>Email:</strong> area.web.economica@gmail.com
                    </p>
                </div>

                {/* Useful Links */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-green-600">Home</a></li>
                        <li><a href="#" className="hover:text-green-600">About us</a></li>
                        <li><a href="#" className="hover:text-green-600">Services</a></li>
                        <li><a href="#" className="hover:text-green-600">Terms of service</a></li>
                    </ul>
                </div>

                {/* Our Services */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">Nuestros Servicios</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-green-600">Cursos</a></li>
                        <li><a href="#" className="hover:text-green-600">Podcasts</a></li>
                    </ul>
                </div>

                {/* Follow Us */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">Siguenos</h4>
                    <p className="mb-4">Síguenos en nuestras redes</p>
                    <div className="flex space-x-3">
                        <a href="#" className="text-gray-700 hover:text-green-600">
                            <Twitter className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-700 hover:text-green-600">
                            <Facebook className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-700 hover:text-green-600">
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-700 hover:text-green-600">
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
