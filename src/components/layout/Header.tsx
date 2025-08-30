'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import Logo from '@/components/ui/Logo';
import Name from '@/components/ui/Name';

const navLinks = [
    {href: '/', label: 'Home'},
    {href: '/about', label: 'About'},
    {href: '/projects', label: 'Projects'},
    {href: '/blog', label: 'Blog'},
    {href: '/otaku', label: 'Otaku'},
];

export function Header() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

    useEffect(() => {setMounted(true);}, []);

    useEffect(() => {setOpen(false);}, [pathname]);

    useEffect(() => {
        if (!open) return;

        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(false);
        };
        window.addEventListener('keydown', onKey);

        const id = requestAnimationFrame(() => firstLinkRef.current?.focus());

        return () => {
            window.removeEventListener('keydown', onKey);
            cancelAnimationFrame(id);
        };
    }, [open]);

    useEffect(() => {
        if (!open) return;

        const doc = document.documentElement;
        const body = document.body;

        const scrollY = window.scrollY;
        const scrollbarW = window.innerWidth - doc.clientWidth; // 消えるバーの幅

        body.style.paddingRight = `${scrollbarW}px`;

        body.style.position = 'fixed';
        body.style.top = `-${scrollY}px`;
        body.style.width = '100%';

        return () => {
            body.style.paddingRight = '';
            body.style.position = '';
            body.style.top = '';
            body.style.width = '';
            window.scrollTo(0, scrollY); // 元の位置へ復帰
        };
    }, [open]);

    const isActive = (href: string) => pathname === href;

    return (
        <header className="bg-base backdrop-blur-md sticky top-0 z-50">
            <nav className="container mx-auto px-6 grid grid-cols-2 items-center py-6">
                <Link
                    href="/"
                    className="flex items-center gap-x-4 justify-self-start text-2xl font-thin text-text-default hover:text-text-default no-underline"
                >
                    <Logo className="fill-text-default hover:fill-primary" />
                    <Name className="" />
                </Link>

                <ul className="justify-self-end hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <div key={link.label}>
                            <Link
                                href={link.href}
                                className={`${isActive(link.href)
                                    ? 'text-text-default font-semibold'
                                    : 'text-text-default/50 hover:text-secondary'
                                    } transition-colors duration-200 no-underline`}
                            >
                                {link.label}
                            </Link>
                        </div>
                    ))}
                </ul>

                <button
                    aria-label="Open menu"
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    onClick={() => setOpen((v) => !v)}
                    className={[
                        'md:hidden justify-self-end inline-grid place-items-center',
                        'w-10 h-10 rounded-[var(--neu-radius)] neu-surface neu-pressable',
                        'text-text-default/80 hover:text-text-default',
                    ].join(' ')}
                >
                    <div className="py-2">
                        <span
                            className={[
                                'block w-5 h-0.5 bg-current transition-transform duration-300',
                            ].join(' ')}
                        />
                        <span
                            className={[
                                'block w-5 h-0.5 bg-current my-1 transition-opacity duration-200',
                            ].join(' ')}
                        />
                        <span
                            className={[
                                'block w-5 h-0.5 bg-current transition-transform duration-300',
                            ].join(' ')}
                        />
                    </div>
                </button>
            </nav>

            {mounted &&
                createPortal(
                    <div
                        className={[
                            'md:hidden fixed inset-0 z-[60]',
                            'bg-black/10 dark:bg-black/40 backdrop-blur-sm',
                            'transition-opacity duration-300 ease-out',
                            open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
                        ].join(' ')}
                        onClick={() => setOpen(false)}
                    >
                        <aside
                            id="mobile-menu"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Site navigation"
                            className={[
                                'absolute right-0 top-0 h-full w-[80%] max-w-sm',
                                'bg-base shadow-[-10px_-10px_20px_rgba(255,255,255,0.06),_10px_10px_28px_rgba(0,0,0,0.55)]',
                                'border-l border-white/5',
                                'p-6 flex flex-col gap-4',
                                'transition-transform duration-300 ease-out will-change-transform',
                                open ? 'translate-x-0' : 'translate-x-full',
                            ].join(' ')}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <Logo className="w-8 h-8 fill-text-default" />
                                <button
                                    aria-label="Close menu"
                                    onClick={() => setOpen(false)}
                                    className="w-9 h-9 grid place-items-center rounded-[var(--neu-radius)] neu-surface neu-pressable text-xl text-text-default/80 hover:text-text-default"
                                >
                                    &times;
                                </button>
                            </div>

                            <ul className="mt-2 space-y-4">
                                {navLinks.map((link, i) => (
                                    <div key={link.label}>
                                        <Link
                                            ref={i === 0 ? firstLinkRef : undefined}
                                            href={link.href}
                                            onClick={() => setOpen(false)}
                                            className={`block w-full rounded-[calc(var(--neu-radius)/1.5)] px-4 py-4 text-base no-underline
                    ${isActive(link.href)
                                                    ? 'text-text-default font-semibold neu-surface neu-inset'
                                                    : 'text-text-default/80 hover:text-text-default neu-surface'
                                                }
                    transition-colors no-underline`}
                                        >
                                            {link.label}
                                        </Link>
                                    </div>
                                ))}
                            </ul>

                            <div className="flex-1" />
                        </aside>
                    </div>,
                    document.body
                )}
        </header>
    );
}

