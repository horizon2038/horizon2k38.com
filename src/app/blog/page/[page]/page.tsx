import Link from 'next/link';
import {getSortedPostsData, POSTS_PER_PAGE} from '@/lib/posts';
import {format} from 'date-fns';
import {Pagination} from '@/components/ui/Pagination';

type Params = {
    params: {
        page: string;
    };
};

export const dynamic = 'force-static';

export function generateStaticParams() {
    const allPosts = getSortedPostsData();
    const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

    // If there's only 1 page or no posts, we still need to return something
    // for Next.js export to work. We'll generate page 2 anyway and handle it in the component
    if (totalPages <= 1) {
        return [{page: '2'}]; // Generate page 2 even if not needed - component will handle redirect
    }

    // Generate pages 2, 3, 4, ... (excluding page 1)
    return Array.from({length: totalPages - 1}, (_, i) => ({
        page: String(i + 2)
    }));
}

export default async function BlogPaginatedPage({params}: {params: Promise<{page: string}>}) {
    const {page} = await params;
    const allPosts = getSortedPostsData();
    const currentPage = parseInt(page, 10);
    const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

    // If the requested page doesn't exist (e.g., page 2 when there's only 1 page total),
    // redirect to the main blog page
    if (currentPage > totalPages || currentPage < 2) {
        // In a static export, we can't do server-side redirects, so we'll show a message
        // or handle this gracefully
        return (
            <section className="container mx-auto px-4 py-4">
                <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
                <p className="text-center">
                    This page doesn&apos;t exist. <Link href="/blog" className="text-blue-600 hover:underline">Go back to the blog</Link>.
                </p>
            </section>
        );
    }

    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const currentPosts = allPosts.slice(startIndex, endIndex);

    return (
        <section className="container mx-auto px-4 py-4">
            <h1 className="text-center">Blog</h1>
            <div className="space-y-6 max-w-2xl mx-auto">
                {currentPosts.map(({slug, date, title, tags}) => (
                    <div key={slug} className="border-b border-border pb-4">
                        <Link href={`/blog/${slug}`} className="block group">
                            <h2 className="text-2xl font-semibold text-text-default group-hover:underline group-hover:text-secondary">{title}</h2>
                            {tags && tags.length > 0 && (
                                <div className="mt-3 mb-3 flex flex-wrap gap-2 overflow-hidden">
                                    {tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-text-default/10 text-text-default px-2 py-2 rounded-lg text-xs font-medium"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                            <small className="text-text-default/60 block mt-2">
                                <time dateTime={date.toISOString()}>
                                    {format(date, 'yyyy-MM-dd H:mm:ss')}
                                </time>
                            </small>
                        </Link>
                    </div>
                ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </section>
    );
}
