'use client';

import {Card, CardHeader, CardContent} from '@/components/ui/Card';

import {useState} from 'react';
import {Project, getAllProjects} from '@/lib/projects';
import {ProjectCard} from '@/components/ui/ProjectCard';
import {ProjectModal} from '@/components/ui/ProjectModal';

export default function ProjectsPage() {
    const projects = getAllProjects();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const openModal = (project: Project) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    return (
        <>
            <div className="container mx-auto px-4 py-4">
                <h1 className="text-center">
                    Projects
                </h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} onClick={openModal} />
                    ))}
                </div>
            </div>
            <ProjectModal project={selectedProject} onClose={closeModal} />
        </>);
}
