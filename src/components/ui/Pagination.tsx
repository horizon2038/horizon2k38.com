import Link from 'next/link';
import {Button} from '@/components/ui/Button';

type Props = {
    currentPage: number;
    totalPages: number;
};

export function Pagination({currentPage, totalPages}: Props) {
    const pages = Array.from({length: totalPages}, (_, i) => i + 1);

    return (
        <nav className="flex justify-center items-center gap-4 mt-12">
            {/* link to prev */}
            <Link
                href={currentPage > 2 ? `/blog/page/${currentPage - 1}` : '/blog'}
                className={
                    currentPage === 1
                        ? 'pointer-events-none no-underline'
                        : 'hover:text-primary no-underline'
                }
                aria-disabled={currentPage === 1}
            >
                <Button variant="primary" size="sm" className="pb-1">
                    &lt;
                </Button>
            </Link>

            { /* page numbers */}
            <div className="flex items-center gap-2">
                {pages.map((page) => (
                    <div key={page}>
                        <Link
                            href={page === 1 ? '/blog' : `/blog/page/${page}`}
                            className={`neu-surface neu-inset px-3 py-1 transition-colors ${currentPage === page
                                ? 'bg-primary text-text-default pointer-events-none'
                                : 'hover:bg-base/50'
                                } no-underline`}
                        >
                            {page}
                        </Link>
                    </div>
                ))}
            </div>

            {/* link to next */}
            <Link
                href={`/blog/page/${currentPage + 1}`}
                className={
                    currentPage === totalPages
                        ? 'pointer-events-none text-text-subtle no-underline'
                        : 'hover:text-primary no-underline'
                }
                aria-disabled={currentPage === totalPages}
            >
                <Button variant="primary" size="sm" className="pb-1">
                    &gt;
                </Button>
            </Link>
        </nav>
    );
}
