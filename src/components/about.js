import React from 'react';
import logo from "./assets/img/hero-bg.jpg"

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">About</h2>
                    <p className="text-lg md:text-xl text-gray-600">
                        ¿Qué es <span className="text-yellow-500 font-semibold">Económica</span>?
                    </p>
                </div>

                {/* Content Grid */}
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
                    {/* Image */}
                    <div className="md:w-1/2 flex justify-center" data-aos="fade-up">
                        <img
                            src={logo}
                            alt="About Económica"
                            className="w-full max-w-md rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="md:w-1/2" data-aos="fade-up" data-aos-delay="200">
                        <p className="italic text-gray-700 mb-4">
                            Económica es una organización promovida por estudiantes de la especialidad de economía de la Pontificia Universidad Católica del Perú (PUCP).
                        </p>
                        <p className="text-gray-700 mb-6">
                            Entre los productos académicos que ofrece Económica, se encuentran una revista física de publicación semestral y una versión digital de actualización diaria, así como artículos de opinión y boletines informativos. Las publicaciones están relacionadas con la ciencia económica, actualidad de la economía peruana y mundial, y temas donde esta ciencia puede aportar a la discusión.
                        </p>

                        {/* Mission and Vision */}
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <i className="bi bi-eye-fill text-yellow-500 text-3xl mr-4"></i>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900">Misión</h4>
                                    <p className="text-gray-700">
                                        Somos una asociación de estudiantes sin fines de lucro, orientados a ser un referente académico en temas de economía, caracterizados por su objetividad, imparcialidad y calidad informativa. Además, buscamos generar debate en temas de interés público vinculados a la economía.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <i className="bi bi-rocket-fill text-yellow-500 text-3xl mr-4"></i>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900">Visión</h4>
                                    <p className="text-gray-700">
                                        Como organización, nos comprometemos con el desarrollo del pensamiento crítico frente a temas relacionados con la economía. De esa manera, aportaremos con el beneficio de la sociedad.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
