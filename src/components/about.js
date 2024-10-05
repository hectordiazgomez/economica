import React from 'react';
import { Eye, Rocket } from 'lucide-react';
import logo from "./assets/img/hero-bg.jpg";

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">¿Qué es <span className="text-blue-600">Económica?</span></h2>
                </div>

                {/* Content Grid */}
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
                    {/* Image */}
                    <div className="md:w-1/2 flex justify-center" data-aos="fade-up">
                        <img
                            src={logo}
                            alt="About Económica"
                            className="w-full sm:w-5/6 rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="md:w-1/2 space-y-6" data-aos="fade-up" data-aos-delay="200">
                        <p className="italic text-gray-700 mb-4">
                            Económica es una organización promovida por estudiantes de la especialidad de economía de la Pontificia Universidad Católica del Perú (PUCP).
                        </p>
                        <p className="text-gray-700 mb-6">
                            Entre los productos académicos que ofrece Económica, presenta una revista física de publicación semestral y una versión digital de actualización diaria, así como artículos de opinión de sus miembros y boletines informativos de temas coyunturales de interés. El contenido de las publicaciones está relacionado a la ciencia económica, actualidad de la economía peruana y mundial, y a temas en los que dicha ciencia pueda aportar en su discusión.
                        </p>

                        {/* Mission and Vision */}
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <Eye className="text-blue-600 w-32 sm:w-20 h-auto mt-2 mr-4" />
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900">Misión</h4>
                                    <p className="text-gray-700">
                                        Somos una asociación de estudiantes sin fines de lucro orientados a ser un referente académico en temas de economía, caracterizado por su objetividad, imparcialidad y calidad informativa. Además, buscamos generar debate en torno a temas de interés público vinculados a la economía.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <Rocket className="text-blue-600 w-32 sm:w-16 h-auto mt-2 mr-2" />
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
