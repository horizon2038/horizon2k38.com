import type {Metadata} from "next";
import {ArchivementGenerator} from "./ArchivementGenerator";

export const metadata: Metadata = {
    title: "Archivement Generator | kernel of horizon2k38",
    description: "Minecraft advancement style image generator",
};

export default function ArchivementGeneratorPage() {
    return (
        <div className="container mx-auto px-4 py-4 text-text-default">
            <h1 className="text-center">Archivement Generator</h1>
            <ArchivementGenerator />
        </div>
    );
}
