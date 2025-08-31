import type {Metadata} from 'next';
import Logo from '@/components/ui/Logo';
import Link from 'next/link';

const siteUrl = process.env.SITE_URL || "https://horizon2k38.com";
const og = `${siteUrl}/opengraph-image.png`;

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: "Home | horizon2k38",
    description: "Home - Kernel of horizon2k38",
    openGraph: {
        title: "Home | horizon2k38",
        description: "Home - Kernel of horizon2k38",
        url: siteUrl,
        siteName: "Kernel of horizon2k38",
        type: "website",
        images: [
            {url: og, width: 1200, height: 630, alt: "horizon2k38"},
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Home | horizon2k38",
        description: "Home - Kernel of horizon2k38",
        images: [
            {url: og, width: 1200, height: 630, alt: "horizon2k38"},
        ],
    },
};

export default function Home() {
    return (
        <div className="container mx-auto px-4 py-4 text-center">
            <div className="text-8xl mt-20 font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 from- via-blue-500 via- to-indigo-800 to-">Hello, World!</div>
            <div className="text-2xl py-4">
                Hello, I&#39;m <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 from- via-blue-500 via- to-indigo-400 to-">Rekka &quot;horizon&quot; IGUMI.</span><br />
            </div>
            <div className="mt-5 text-xl text-center">
                Welcome to my personal website. <br />
                More information about me can be found on the <Link href="/about">About</Link> page.<br />
            </div>
        </div>
    );
}
