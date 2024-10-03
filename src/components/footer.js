import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 text-gray-700">
            {/* Newsletter Section */}
            <div className="bg-blue-50 py-8">
                <div className="container mx-auto text-center">
                    <h3 className="text-2xl font-semibold mb-2">Join Our Newsletter</h3>
                    <p className="mb-4">
                        Subscribe to our newsletter and receive the latest news about our products and services!
                    </p>
                    <div className="flex justify-center">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="p-3 w-full max-w-md rounded-l-md border border-gray-300 focus:outline-none"
                        />
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Links Section */}
            <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
                {/* Company Info */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">BizLand</h4>
                    <p>A108 Adam Street<br />New York, NY 535022</p>
                    <p className="mt-3">
                        <strong>Phone:</strong> +1 5589 55488 55<br />
                        <strong>Email:</strong> info@example.com
                    </p>
                </div>

                {/* Useful Links */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">Useful Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-blue-600">Home</a></li>
                        <li><a href="#" className="hover:text-blue-600">About us</a></li>
                        <li><a href="#" className="hover:text-blue-600">Services</a></li>
                        <li><a href="#" className="hover:text-blue-600">Terms of service</a></li>
                    </ul>
                </div>

                {/* Our Services */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">Our Services</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-blue-600">Web Design</a></li>
                        <li><a href="#" className="hover:text-blue-600">Web Development</a></li>
                        <li><a href="#" className="hover:text-blue-600">Product Management</a></li>
                        <li><a href="#" className="hover:text-blue-600">Marketing</a></li>
                    </ul>
                </div>

                {/* Follow Us */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                    <p className="mb-4">Síguenos en nuestras redes</p>
                    <div className="flex space-x-3">
                        <a href="#" className="text-gray-700 hover:text-blue-600">
                            <Twitter className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-700 hover:text-blue-600">
                            <Facebook className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-700 hover:text-blue-600">
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-700 hover:text-blue-600">
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="bg-gray-100 py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 BizLand. All Rights Reserved</p>
                    <p>
                        Designed by <a href="https://bootstrapmade.com/" className="text-blue-600 hover:underline">BootstrapMade</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
