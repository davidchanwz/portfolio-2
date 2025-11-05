"use client";

interface WorkExperience {
    id: number;
    title: string;
    company: string;
    duration: string;
    description: string[];
    technologies?: string[];
}

const workExperiences: WorkExperience[] = [
    {
        id: 1,
        title: "Software Engineer Intern",
        company: "Synapxe",
        duration: "May 2025 - Dec 2025",
        description: [
            "Vibed some python and dart",
            "Played around with pytorch and tensorflow"
        ],
        technologies: ["Angular", "Flutter.js"]
    },
    {
        id: 2,
        title: "Data Analyst Intern",
        company: "China CITIC Bank International",
        duration: "May 2024 - Aug 2024",
        description: [
            "Wrote some VBA",
            "Fries"
        ],
        technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"]
    },
];

const WorkExperience = () => {
    return (
        <section id="experience" className="min-h-screen flex items-center justify-center bg-white py-16">
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
                        {workExperiences.map((exp) => (
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
                                        {exp.description.map((item, idx) => (
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

export default WorkExperience;