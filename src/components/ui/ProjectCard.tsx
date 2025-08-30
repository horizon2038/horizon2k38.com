import Image from 'next/image';
import {Project} from '@/lib/projects';
import {Card, CardContent} from '@/components/ui/Card'; // 既存のCardを再利用

type Props = {
    project: Project;
    onClick: (project: Project) => void;
};

function DefaultCardImage() {
    return (
        <div className="flex h-48 w-full items-center justify-center bg-primary/10 rounded-t-lg">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-primary/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
            </svg>
        </div>
    );
}

export function ProjectCard({project, onClick}: Props) {
    return (
        <Card
            className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.01] active:scale-[0.99] group"
            onClick={() => onClick(project)}
        >
            {project.image ? (
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            ) : (
                <DefaultCardImage />
            )}
            <CardContent className="pt-4">
                <h3 className="text-xl font-semibold text-text-default">{project.title}</h3>
                <p className="mt-1 text-sm text-text-default/60">{project.shortDescription}</p>
            </CardContent>
        </Card>
    );
}

