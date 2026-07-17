import Link from "next/link";

const pages = [
    {
        href: "/otaku/archivement-generator",
        title: "Archivement Generator",
        description: "Generate achievements in the style of popular games",
    },
];

export default function OtakuPage() {
    return (
        <div className="container mx-auto px-4 py-4 text-text-default">
            <h1 className="text-center">Otaku</h1>
            <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
                {pages.map((page) => (
                    <Link
                        key={page.href}
                        href={page.href}
                        className="neu-surface neu-pressable block rounded-md p-4 no-underline"
                    >
                        <h2 className="m-0 text-lg font-semibold text-text-default">{page.title}</h2>
                        <p className="mb-0 mt-2 text-sm text-text-secondary">{page.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
