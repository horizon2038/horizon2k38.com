import Link from 'next/link';
import {getSortedPostsData, POSTS_PER_PAGE} from '@/lib/posts';
import {format} from 'date-fns';
import {Pagination} from '@/components/ui/Pagination';

type Params = {
    params: {
        page: string;
    };
};

export const dynamicParams = false;
export const dynamic = 'force-static';

export function generateStaticParams() {
    const allPosts = getSortedPostsData();
    const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

    return Array.from({length: totalPages}, (_, i) => ({page: String(i + 1)}))
        .filter(p => p.page !== '1');
}

export default async function BlogPaginatedPage({params}: {params: Promise<{page: string}>}) {
    const {page} = await params;
    const allPosts = getSortedPostsData();
    const currentPage = parseInt(page, 10);
    const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const currentPosts = allPosts.slice(startIndex, endIndex);

    return (
        <section className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
            <ul className="space-y-6 max-w-2xl mx-auto">
                {currentPosts.map(({slug, date, title, tags}) => (
                    <li key={slug} className="border-b border-border pb-4">
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
                            <small className="text-text-subtle block mt-2">
                                <time dateTime={date.toISOString()}>
                                    {format(date, 'yyyy-MM-dd hh:mm:ss')}
                                </time>
                            </small>
                        </Link>
                    </li>
                ))}
            </ul>
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </section>
    );
}
