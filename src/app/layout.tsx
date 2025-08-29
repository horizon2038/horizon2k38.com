import type {Metadata} from "next";
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
            <body suppressHydrationWarning>
                <Header />
                <main className="flex flex-col min-h-screen bg-base">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
