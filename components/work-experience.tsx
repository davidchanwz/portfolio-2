"use client";

import { WORK_EXPERIENCES, SECTION_IDS, type WorkExperience } from "@/lib/constants";

const WorkExperienceComponent = () => {
    return (
        <section id={SECTION_IDS.EXPERIENCE} className="min-h-screen flex items-center justify-center bg-white py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
                        Work <span className="font-semibold">Experience</span>
                    </h2>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-300"></div>

                    {/* Timeline Items */}
                    <div className="space-y-8">
                        {WORK_EXPERIENCES.map((exp: WorkExperience) => (
                            <div key={exp.id} className="relative flex items-start">
                                {/* Timeline Dot */}
                                <div className="absolute left-6 w-4 h-4 bg-gray-900 rounded-full border-4 border-white shadow-md"></div>

                                {/* Content */}
                                <div className="ml-16 bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                                    {/* Header */}
                                    <div className="mb-4">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {exp.title}
                                        </h3>
                                        <p className="text-lg text-gray-700 font-medium mb-1">{exp.company}</p>
                                        <span className="text-sm text-gray-500 font-medium">{exp.duration}</span>
                                    </div>

                                    {/* Description */}
                                    <ul className="space-y-2">
                                        {exp.description.map((item: string, idx: number) => (
                                            <li key={idx} className="text-gray-600 flex items-start">
                                                <span className="text-gray-400 mr-3 mt-2">•</span>
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperienceComponent;