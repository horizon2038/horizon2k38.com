'use client';

import {Card, CardHeader, CardContent} from '@/components/ui/Card';

import {useState} from 'react';
import {Project, getAllProjects} from '@/lib/projects';
import {ProjectCard} from '@/components/ui/ProjectCard';
import {ProjectModal} from '@/components/ui/ProjectModal';

/*
const projects = [
    {
        title: 'A9N Microkernel',
        subtitle: '3rd-generation Capability-based Microkernel',
        description: 'A9N is a capability-based microkernel, primarily implemented in C++20. It features a highly portable Hardware Abstraction Layer (HAL) and leverages the object-capability model to ensure strong security. The kernel also achieves exceptionally high performance in inter-process communication (IPC).',
        href: '#',
    },
    {
        title: 'Nun',
        subtitle: 'User-mode OS framework and runtime for A9N Microkernel',
        description: 'Designed and implemented Nun, a framework and runtime for building user- mode operating systems on top of A9N Microkernel.',
        href: '#',
    },
    {
        title: 'A9NLoader',
        subtitle: 'Bootloader for A9N Microkernel',
        description: 'A9NLoader is a bootloader designed to launch the A9N Microkernel in accordance with the A9N Boot Protocol (x86_64). It properly loads the Kernel Executable and Init Executable, making the system operational. It is implemented using EDK2.',
        href: '#',
    },
    {
        title: 'A9NLoader-rs',
        subtitle: 'Rust-based Bootloader for A9N Microkernel',
        description: '',
        href: '#',
    },
];

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-center mb-8">Personal Projects</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <Card className="max-w-md" key={project.title}>
                        <CardHeader title={project.title} subtitle={project.subtitle} />
                        <CardContent>
                            <p>{project.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
*/

export default function ProjectsPage() {
    const projects = getAllProjects();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const openModal = (project: Project) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    return (
        <>
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-center mb-12">
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
