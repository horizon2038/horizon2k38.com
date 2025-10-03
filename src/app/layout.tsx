import type {Metadata} from "next";
import "./fonts.css";
import "./globals.css";
import 'highlight.js/styles/github-dark.css';

import {Header} from "@/components/layout/Header";
import {Footer} from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: "kernel of horizon2k38",
    description: "horizon2k38's personal website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja" suppressHydrationWarning>
            <head>
                <link
                    rel="alternate"
                    type="application/rss+xml"
                    title="horizon2k38 Blog RSS Feed"
                    href="/feed.xml"
                />
                <link href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" rel="stylesheet" />
                <meta name="format-detection" content="telephone=no" />
            </head>
            <body className="bg-base h-full" suppressHydrationWarning>
                <div className="relative z-10 min-h-screen">
                    <Header />
                    <main className="flex flex-col min-h-screen">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
