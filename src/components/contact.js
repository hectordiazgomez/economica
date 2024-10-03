import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact</h2>
                    <p className="text-lg text-gray-600">
                        Need Help? <span className="text-yellow-500 font-semibold">Contact Us</span>
                    </p>
                </div>

                {/* Contact Content */}
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Contact Information */}
                    <div className="md:w-1/2 space-y-6">
                        {/* Address */}
                        <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
                            <i className="bi bi-geo-alt text-yellow-500 text-3xl"></i>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                                <p className="text-gray-600">A108 Adam Street, New York, NY 535022</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
                            <i className="bi bi-telephone text-yellow-500 text-3xl"></i>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                                <p className="text-gray-600">+1 5589 55488 55</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
                            <i className="bi bi-envelope text-yellow-500 text-3xl"></i>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                                <p className="text-gray-600">info@example.com</p>
                            </div>
                        </div>

                        {/* Google Map */}
                        <div className="rounded-lg shadow-md overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                                frameBorder="0"
                                style={{ border: 0, width: "100%", height: "270px" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="md:w-1/2 bg-white rounded-lg shadow-md p-8">
                        <form action="forms/contact.php" method="post" className="space-y-6">
                            {/* Name Input */}
                            <div>
                                <label htmlFor="name-field" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name-field"
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    required
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email-field" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email-field"
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    required
                                />
                            </div>

                            {/* Subject Input */}
                            <div>
                                <label htmlFor="subject-field" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject-field"
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    required
                                />
                            </div>

                            {/* Message Textarea */}
                            <div>
                                <label htmlFor="message-field" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    id="message-field"
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                    required
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-yellow-500 text-white px-6 py-3 rounded font-semibold hover:bg-yellow-600 transition"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
