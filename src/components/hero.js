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
                <div className="flex flex-col pt-6 items-center text-center md:text-left md:flex-row md:items-center md:space-x-8">
                    <div className="max-w-2xl">
                        {/* Hero Title */}
                        <h1 className="text-4xl pt-10 md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                            Bienvenido a <span className="text-green-500">Económica</span>
                        </h1>
                        <p className="text-lg md:text-xl mb-8">
                            Somos un grupo de estudiantes que buscan la difusión de la Economía.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
