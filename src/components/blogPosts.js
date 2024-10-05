import React from 'react';

import blockchainImg from "./assets/img/articles/blockchain.webp";
import analogImg from "./assets/img/articles/analog.webp";
import saludMentalImg from "./assets/img/articles/salud_mental.webp";

const blogPosts = [
    {
        title: "Tecnologías blockchain y criptomonedas: explorando el futuro digital",
        author: "Paul Alexandro Flores Coapaza",
        category: "Economics",
        date: "abril 6, 2024",
        imgSrc: blockchainImg, 
        detailLink: "blog-details.html",
    },
    {
        title: "Analogía entre dos sistemas morales (político-económicos): comunismo y cristianismo",
        author: "Herick Varosvky Pacheco Saravia",
        category: "Economics",
        date: "marzo 30, 2024",
        imgSrc: analogImg, 
        detailLink: "blog-details.html",
    },
    {
        title: "Conexiones entre Salud Mental y Desempleo",
        author: "Favio Samillan Flores",
        category: "Economics",
        date: "mayo 29, 2024",
        imgSrc: saludMentalImg, // Use imported image
        detailLink: "blog-details.html",
    },
];


const BlogPosts = () => {
    return (
        <section id="recent-blog-posts" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Artículos</h2>
                    <p className="text-lg text-gray-600">Artículos recientes</p>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow"
                        >
                            {/* Post Image */}
                            <div className="relative">
                                <img
                                    src={post.imgSrc}
                                    alt={post.title}
                                    className="w-full h-64 object-cover group-hover:opacity-90 transition-opacity"
                                />
                                {/* Post Date */}
                                <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 text-sm font-semibold rounded shadow">
                                    {post.date}
                                </div>
                            </div>

                            {/* Post Content */}
                            <div className="p-6">
                                {/* Post Title */}
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-yellow-500 transition-colors">
                                    {post.title}
                                </h3>

                                {/* Post Meta */}
                                <div className="flex items-center text-sm text-gray-600 mb-4">
                                    <span className="flex items-center mr-4">
                                        <i className="bi bi-person mr-1"></i> {post.author}
                                    </span>
                                    <span className="flex items-center">
                                        <i className="bi bi-folder2 mr-1"></i> {post.category}
                                    </span>
                                </div>

                                {/* Read More Button */}
                                <a
                                    href={post.detailLink}
                                    className="inline-block text-yellow-500 font-semibold hover:text-yellow-600"
                                >
                                    Read More <i className="bi bi-arrow-right ml-1"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPosts;
