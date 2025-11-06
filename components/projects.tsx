"use client";

import { ExternalLink, Github } from "lucide-react";
import { PROJECTS, SECTION_IDS, type Project } from "@/lib/constants";

const Projects = () => {
    return (
        <section id={SECTION_IDS.PROJECTS} className="min-h-screen flex items-center justify-center bg-white py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
                        <span className="font-semibold">Projects</span>
                    </h2>
                </div>

                {/* Projects List */}
                <div className="space-y-12">
                    {PROJECTS.map((project: Project) => (
                        <div key={project.id} className="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0">
                            {/* Project Header */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2 sm:mb-0">
                                    {project.name}
                                </h3>

                                {/* Links */}
                                <div className="flex gap-4">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-gray-600 hover:text-gray-900 transition-all duration-200 hover:underline underline-offset-2"
                                        >
                                            <ExternalLink className="h-4 w-4 mr-1" />
                                            <span className="text-sm font-medium">Try it</span>
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-gray-600 hover:text-gray-900 transition-all duration-200 hover:underline underline-offset-2"
                                        >
                                            <Github className="h-4 w-4 mr-1" />
                                            <span className="text-sm font-medium">GitHub</span>
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Project Description */}
                            <p className="text-gray-600 leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;