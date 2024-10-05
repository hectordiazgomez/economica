import React from 'react';
import { FileSpreadsheetIcon, LucideBetweenHorizontalEnd, EqualSquareIcon, BoxSelectIcon, Calendar, MessageCircle } from 'lucide-react';
import one from "./assets/sections/one-e.jpg"
import two from "./assets/sections/two-e.jpg"
import three from "./assets/sections/three-e.jpg"
import four from "./assets/sections/four-e.jpg"
import five from "./assets/sections/five-e.jpg"
import six from "./assets/sections/six-e.jpg"

const services = [
    {
        icon: <FileSpreadsheetIcon size={40} className="text-green-500 mb-4" />,
        title: "Microsoft Excel",
        description: "Excel para economistas",
        background: one
    },
    {
        icon: <LucideBetweenHorizontalEnd size={40} className="text-green-500 mb-4" />,
        title: "Power BI",
        description: "En este curso aprenderás herramientas de Power BI para economistas",
        background: two
    },
    {
        icon: <EqualSquareIcon size={40} className="text-green-500 mb-4" />,
        title: "R",
        description: "R para economistas",
        background: three
    },
    {
        icon: <BoxSelectIcon size={40} className="text-green-500 mb-4" />,
        title: "Finanzas",
        description: "Conceptos básicos y fundamentos de las finanzas",
        background: four
    },
    {
        icon: <Calendar size={40} className="text-green-500 mb-4" />,
        title: "Stata",
        description: "Algoritmos, tipos de datos, funciones y más",
        background: five
    },
    {
        icon: <MessageCircle size={40} className="text-green-500 mb-4" />,
        title: "Talleres de empleabildiad",
        description: "Incrementa tus oportunidades laborales",
        background: six
    },
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cursos</h2>
                    <p className="text-lg text-gray-600">
                        Revisa nuestros <span className="text-green-500 font-semibold">Cursos</span>
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="rounded-lg shadow-lg p-8 text-center hover:bg-green-50 transition transform hover:-translate-y-2 relative overflow-hidden"
                            style={{
                                backgroundImage: `url(${service.background})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            {/* Overlay for better text visibility */}
                            <div className="absolute inset-0 bg-white bg-opacity-80"></div>

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="flex justify-center">
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>

                                {/* Description */}
                                <p className="text-gray-700 mb-4">{service.description}</p>

                                {/* Call to Action */}
                                <a
                                    href="#"
                                    className="inline-block mt-4 text-green-500 font-semibold hover:text-green-600 border border-green-500 rounded-full px-6 py-2 transition-colors duration-200 bg-white bg-opacity-50 hover:bg-opacity-75"
                                >
                                    Ver más
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;