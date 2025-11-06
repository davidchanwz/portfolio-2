"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PERSONAL_INFO, CONTACT_INFO, CV_INFO, SECTION_IDS } from "@/lib/constants";

const Hero = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <section id={SECTION_IDS.HOME} className="min-h-screen flex items-center justify-center bg-white pt-16 sm:pt-20 lg:pt-0">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 sm:gap-10 lg:gap-16">
                    {/* Profile Image */}
                    <div className="shrink-0">
                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-80 lg:h-80">
                            <div className="w-full h-full rounded-full bg-gray-200 border-4 border-white shadow-lg overflow-hidden">
                                {/* Placeholder for profile image */}
                                <div className={`w-full h-full bg-linear-to-br from-gray-300 to-gray-400 flex items-center justify-center transition-opacity duration-500 ${imageLoaded ? 'opacity-0' : 'opacity-100'
                                    }`}>
                                    <span className="text-gray-600 font-semibold text-3xl sm:text-4xl lg:text-6xl">{PERSONAL_INFO.initials}</span>
                                </div>

                                <Image
                                    src={PERSONAL_INFO.profileImage}
                                    alt={PERSONAL_INFO.profileImageAlt}
                                    fill
                                    className={`object-cover rounded-full transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                                        }`}
                                    priority
                                    onLoad={() => setImageLoaded(true)}
                                />

                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center">
                        {/* Greeting and Title */}
                        <div className="mb-8">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
                                Hello, I&apos;m <span className="font-semibold">{PERSONAL_INFO.name}</span>
                            </h1>
                            <p className="text-xl sm:text-2xl text-gray-600 font-light">
                                {PERSONAL_INFO.title}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-4">
                            {/* Primary Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto px-8 py-3 bg-gray-900 hover:bg-gray-700 text-white font-medium rounded-full cursor-pointer transition-all duration-200 hover:scale-105"
                                    onClick={() => {
                                        const element = document.getElementById(SECTION_IDS.CONTACT);
                                        if (element) {
                                            element.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start',
                                            });
                                        }
                                    }}
                                >
                                    Contact Me
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full sm:w-auto px-8 py-3 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-medium rounded-full cursor-pointer transition-all duration-200 hover:scale-105"
                                    onClick={() => {
                                        // Google Drive direct download link
                                        const link = document.createElement('a');
                                        link.href = CV_INFO.downloadUrl;
                                        link.download = CV_INFO.filename;
                                        link.target = '_blank';
                                        link.click();
                                    }}
                                >
                                    Download CV
                                </Button>
                            </div>

                            {/* Secondary Buttons */}
                            <div className="flex gap-6 justify-center items-center">
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className="text-2xl text-blue-600 hover:text-blue-700 cursor-pointer transition-all duration-200 hover:scale-110"
                                    onClick={() => window.open(CONTACT_INFO.linkedin.url, '_blank')}
                                />
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="text-2xl text-gray-900 hover:text-black cursor-pointer transition-all duration-200 hover:scale-110"
                                    onClick={() => window.open(CONTACT_INFO.github.url, '_blank')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;