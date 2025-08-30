import {Project} from '@/lib/projects';
import Image from 'next/image';
import {Button} from '@/components/ui/Button';

import rehypRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';

type Props = {
    project: Project | null;
    onClose: () => void;
};

function DefaultModalImage() {
    return (
        <div className="flex w-full h-60 md:h-80 mb-6 rounded-lg items-center justify-center bg-primary/10">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-primary/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        </div>
    );
}

export function ProjectModal({project, onClose}: Props) {
    if (!project) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-opacity-50 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg bg-base shadow-xl p-6 md:p-8"
                onClick={(e) => e.stopPropagation()} // モーダル内クリックで閉じないようにする
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-text-subtle hover:text-text-default text-2xl"
                    aria-label="Close Modal"
                >
                    &times;
                </button>

                {project.image ? (
                    <div className="relative w-full h-60 md:h-80 mb-6 rounded-lg overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="100vw"
                        />
                    </div>
                ) : (
                    <DefaultModalImage />
                )}

                <h2 className="text-3xl font-bold text-text-default">{project.title}</h2>
                <p className="text-lg text-text-default/60 mt-1 mb-4">{project.shortDescription}</p>
                { /* <p className="text-text-default leading-relaxed whitespace-pre-wrap">{project.longDescription}</p> */}
                <div className="flex gap-4">
                    {project.demoLink && (
                        <Button variant="primary" size="sm">
                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="no-underline">
                                Project Page
                            </a>
                        </Button>
                    )}

                    <Button
                        variant="primary"
                        size="sm"
                        disabled={!project.githubLink}
                        onClick={() => {
                            if (project.githubLink) {
                                window.open(project.githubLink, '_blank', 'noopener,noreferrer');
                            }
                        }}
                    >
                        GitHub
                    </Button>
                </div>
                <div className="prose psose-sm md:prose-base max-w-none">
                    <ReactMarkdown rehypePlugins={[rehypRaw]}>
                        {project.longDescription}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
}

