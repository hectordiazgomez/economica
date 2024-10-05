import React from 'react';
import logo1 from "./assets/img/masonry-portfolio/johnNash.jpg";
import logo2 from "./assets/img/masonry-portfolio/estanflacion.jpg";
import logo3 from "./assets/img/masonry-portfolio/Belleza.jpg";
import logo4 from "./assets/img/masonry-portfolio/IA_en_la_academia.jpg";
import logo5 from "./assets/img/masonry-portfolio/Econext_2.jfif";

const portfolioItems = [
    {
        category: "App",
        title: "Publicación 1",
        description: "¿Quién fue John Nash?",
        imgSrc: logo1,
        detailLink: "portfolio-details.html",
    },
    {
        category: "Product",
        title: "Publicación 2",
        description: "¿Qué es estanflación?",
        imgSrc: logo2,
        detailLink: "portfolio-details.html",
    },
    {
        category: "Branding",
        title: "Publicación 3",
        description: "La industria de la belleza en la economía peruana",
        imgSrc: logo3,
        detailLink: "portfolio-details.html",
    },
    {
        category: "App",
        title: "Publicación 4",
        description: "La IA en la academia",
        imgSrc: logo4,
        detailLink: "portfolio-details.html",
    },
    {
        category: "Product",
        title: "Publicación 5",
        description: "Generación Z",
        imgSrc: logo5,
        detailLink: "portfolio-details.html",
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Publicaciones</h2>
                    <p className="text-lg text-gray-600">
                        Revisa nuestras <span className="text-green-500 font-semibold">Publicaciones</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white cursor-pointer rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
                            data-category={item.category}
                        >
                            <div className="relative">
                                <img
                                    src={item.imgSrc}
                                    alt={item.title}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <h4 className="text-lg font-semibold">{item.title}</h4>
                                        <p className="text-sm">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 text-center">
                                <a
                                    href={item.detailLink}
                                    className="text-green-500 font-semibold hover:text-green-600"
                                >
                                    View Details
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
