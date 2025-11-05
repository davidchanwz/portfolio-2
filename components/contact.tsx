"use client";

import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center bg-white py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
                        Contact <span className="font-semibold">Me</span>
                    </h2>
                </div>

                {/* Contact Items */}
                <div className="flex flex-col items-center space-y-8">
                    {/* Email */}
                    <a
                        href="mailto:david.chan@u.nus.edu"
                        className="flex items-center text-gray-700 hover:text-gray-900 transition-all duration-200 group hover:scale-105 hover:underline"
                    >
                        <Mail className="h-6 w-6 mr-4 text-gray-600 group-hover:text-gray-900" />
                        <span className="text-xl font-medium">david.chan@u.nus.edu</span>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/in/davidchanwz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-gray-900 transition-all duration-200 group hover:scale-105 hover:underline"
                    >
                        <Linkedin className="h-6 w-6 mr-4 text-gray-600 group-hover:text-gray-900" />
                        <span className="text-xl font-medium">linkedin.com/in/davidchanwz</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;