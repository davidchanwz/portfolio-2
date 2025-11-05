"use client";

import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-white pt-16 sm:pt-20 lg:pt-0">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 sm:gap-10 lg:gap-16">
                    {/* Profile Image */}
                    <div className="shrink-0">
                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-80 lg:h-80">
                            <div className="w-full h-full rounded-full bg-gray-200 border-4 border-white shadow-lg overflow-hidden">
                                {/* Placeholder for profile image - you'll need to add your actual image */}
                                <div className="w-full h-full bg-linear-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                                    <span className="text-gray-600 font-semibold text-3xl sm:text-4xl lg:text-6xl">DC</span>
                                </div>

                                <Image
                                    src="/david.jpg"
                                    alt="David Chan"
                                    fill
                                    className="object-cover rounded-full"
                                    priority
                                />

                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center">
                        {/* Greeting and Title */}
                        <div className="mb-8">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
                                Hello, I&apos;m <span className="font-semibold">David</span>
                            </h1>
                            <p className="text-xl sm:text-2xl text-gray-600 font-light">
                                Software Engineer
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-6">
                            {/* Primary Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto px-8 py-3 bg-gray-900 hover:bg-gray-700 text-white font-medium rounded-full cursor-pointer transition-all duration-200 hover:scale-105"
                                    onClick={() => window.location.href = 'mailto:your-email@example.com'}
                                >
                                    Contact Me
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full sm:w-auto px-8 py-3 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-medium rounded-full cursor-pointer transition-all duration-200 hover:scale-105"
                                    onClick={() => {
                                        // Replace with your CV download link
                                        const link = document.createElement('a');
                                        link.href = '/davidchan_resume.pdf';
                                        link.download = 'David-Chan-CV.pdf';
                                        link.click();
                                    }}
                                >
                                    Download CV
                                </Button>
                            </div>

                            {/* Secondary Buttons */}
                            <div className="flex gap-4 justify-center items-center">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white hover:text-white rounded-full cursor-pointer transition-all duration-200 hover:scale-110"
                                    onClick={() => window.open('https://linkedin.com/in/davidchanwz', '_blank')}
                                >
                                    <Linkedin className="h-6 w-6" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="w-10 h-10 bg-gray-900 hover:bg-black text-white hover:text-white rounded-full cursor-pointer transition-all duration-200 hover:scale-110"
                                    onClick={() => window.open('https://github.com/davidchanwz', '_blank')}
                                >
                                    <Github className="h-6 w-6" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;