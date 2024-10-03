import React from 'react';
import background from "./assets/img/hero-bg.jpg"

const Hero = () => {
    return (
        <section id="hero" className="bg-gray-900 text-white py-20 md:py-32 relative">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{ backgroundImage: `url(${background}` }}
            ></div>

            <div className="container mx-auto relative z-10 px-4">
                <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-center md:space-x-8">
                    <div className="max-w-2xl">
                        {/* Hero Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                            Bienvenido a <span className="text-yellow-400">Económica</span>
                        </h1>

                        {/* Hero Description */}
                        <p className="text-lg md:text-xl mb-8">
                            Somos un grupo de estudiantes que buscan la difusión de la Economía.
                        </p>

                        {/* Call to Action */}
                        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                            <a
                                href="#about"
                                className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition"
                            >
                                Conócenos
                            </a>
                            <a
                                href="#services"
                                className="text-yellow-500 border border-yellow-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500 hover:text-gray-900 transition"
                            >
                                Nuestros Servicios
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
