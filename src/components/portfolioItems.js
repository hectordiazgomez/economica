import React from 'react';
import logo1 from "./assets/img/masonry-portfolio/johnNash.jpg";
import logo2 from "./assets/img/masonry-portfolio/estanflacion.jpg";
import logo3 from "./assets/img/masonry-portfolio/Belleza.jpg";
import logo4 from "./assets/img/masonry-portfolio/IA_en_la_academia.jpg";
import logo5 from "./assets/img/masonry-portfolio/Econext_2.jfif";

const portfolioItems = [
    {
        category: "App",
        title: "App 1",
        description: "Lorem ipsum, dolor sit",
        imgSrc: logo1, // Removed the curly braces
        detailLink: "portfolio-details.html",
    },
    {
        category: "Product",
        title: "Product 1",
        description: "Lorem ipsum, dolor sit",
        imgSrc: logo2, // Removed the curly braces
        detailLink: "portfolio-details.html",
    },
    {
        category: "Branding",
        title: "Branding 1",
        description: "Lorem ipsum, dolor sit",
        imgSrc: logo3, // Removed the curly braces
        detailLink: "portfolio-details.html",
    },
    {
        category: "App",
        title: "App 2",
        description: "Lorem ipsum, dolor sit",
        imgSrc: logo4, // Removed the curly braces
        detailLink: "portfolio-details.html",
    },
    {
        category: "Product",
        title: "Product 2",
        description: "Lorem ipsum, dolor sit",
        imgSrc: logo5, // Removed the curly braces
        detailLink: "portfolio-details.html",
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
                    <p className="text-lg text-gray-600">
                        Check Our <span className="text-yellow-500 font-semibold">Portfolio</span>
                    </p>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
                            data-category={item.category}
                        >
                            {/* Portfolio Image */}
                            <div className="relative">
                                <img
                                    src={item.imgSrc}
                                    alt={item.title}
                                    className="w-full h-64 object-cover"
                                />
                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <h4 className="text-lg font-semibold">{item.title}</h4>
                                        <p className="text-sm">{item.description}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Portfolio Info */}
                            <div className="p-4 text-center">
                                <a
                                    href={item.detailLink}
                                    className="text-yellow-500 font-semibold hover:text-yellow-600"
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
