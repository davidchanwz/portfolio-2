"use client";

"use client";

const About = () => {
    // Calculate years of experience dynamically from 2022 to current year
    const currentYear = new Date().getFullYear();
    const startYear = 2023;
    const yearsOfExperience = currentYear - startYear;

    return (
        <section id="about" className="min-h-screen flex items-center justify-center bg-white py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
                        About <span className="font-semibold">Me</span>
                    </h2>
                </div>

                {/* Content with Vertical Divider */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black transform -translate-x-1/2 hidden lg:block"></div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-0">
                        {/* Education Section - Left Side */}
                        <div className="flex flex-col items-center lg:items-end lg:pr-8">
                            <div className="text-center lg:text-right">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-8">Education</h3>
                                <h4 className="text-xl font-medium text-gray-900 whitespace-nowrap">BSc Business Analytics</h4>
                                <p className="text-lg text-gray-600">NUS</p>
                            </div>
                        </div>

                        {/* Experience Section - Right Side */}
                        <div className="flex flex-col items-center lg:items-start lg:pl-8">
                            <div className="text-center lg:text-left">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-8">Experience</h3>
                                <h4 className="text-xl font-medium text-gray-900">{yearsOfExperience}+ Years</h4>
                                <p className="text-lg text-gray-600">SWE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;