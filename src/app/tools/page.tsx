import type {Metadata} from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Tools | kernel of horizon2k38",
    description: "Small utilities by horizon2k38",
};

const tools = [
    {
        href: "/tools/cpu-clock-calculator",
        title: "CPU Clock Calculator",
        description: "Calculate execution time from CPU clock frequency and clock cycles",
    },
    {
        href: "/tools/archivement-generator",
        title: "Archivement Generator",
        description: "Generate achievements in the style of popular games",
    },
];

export default function ToolsPage() {
    return (
        <div className="container mx-auto px-4 py-4 text-text-default">
            <h1 className="text-center">Tools</h1>
            <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
                {tools.map((tool) => (
                    <Link
                        key={tool.href}
                        href={tool.href}
                        className="neu-surface neu-pressable block rounded-md p-4 no-underline"
                    >
                        <h2 className="m-0 text-lg font-semibold text-text-default">{tool.title}</h2>
                        <p className="mb-0 mt-2 text-sm text-text-secondary">{tool.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
