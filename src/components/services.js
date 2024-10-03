import React from 'react';
import { FileSpreadsheetIcon, LucideBetweenHorizontalEnd, EqualSquareIcon, BoxSelectIcon, Calendar, MessageCircle } from 'lucide-react';

const services = [
    {
        icon: <FileSpreadsheetIcon size={40} className="text-yellow-500 mb-4" />,
        title: "Microsoft Excel",
        description: "Provident nihil minus qui consequatur non omnis maiores.",
    },
    {
        icon: <LucideBetweenHorizontalEnd size={40} className="text-yellow-500 mb-4" />,
        title: "Eosle Commodi",
        description: "Ut autem aut autem non a. Sint sit facilis nam iusto sint.",
    },
    {
        icon: <EqualSquareIcon size={40} className="text-yellow-500 mb-4" />,
        title: "Ledo Markt",
        description: "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.",
    },
    {
        icon: <BoxSelectIcon size={40} className="text-yellow-500 mb-4" />,
        title: "Asperiores Commodit",
        description: "Non et temporibus minus omnis sed dolor esse consequatur.",
    },
    {
        icon: <Calendar size={40} className="text-yellow-500 mb-4" />,
        title: "Velit Doloremque",
        description: "Cumque et suscipit saepe. Est maiores enim facilis.",
    },
    {
        icon: <MessageCircle size={40} className="text-yellow-500 mb-4" />,
        title: "Dolori Architecto",
        description: "Hic molestias ea quibusdam eos. Fugiat aut neque.",
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
                        Check Our <span className="text-yellow-500 font-semibold">Cursos</span>
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-lg shadow-lg p-8 text-center hover:bg-yellow-50 transition transform hover:-translate-y-2"
                        >
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
                                className="inline-block mt-4 text-yellow-500 font-semibold hover:text-yellow-600 border border-yellow-500 rounded-full px-6 py-2 transition-colors duration-200"
                            >
                                Learn More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
