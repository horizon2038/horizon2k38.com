import Link from 'next/link';
import {getSortedPostsData, POSTS_PER_PAGE} from '@/lib/posts';
import {format} from 'date-fns';
import {Pagination} from '@/components/ui/Pagination';
import {TagList} from '@/components/blog/TagList';
import Feed from '@/components/ui/Feed';

export default function BlogPage() {
    const allPosts = getSortedPostsData();
    const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

    const currentPosts = allPosts.slice(0, POSTS_PER_PAGE);

    return (
        <section className="container mx-auto px-4 py-4">
            <h1 className="flex justify-center items-center gap-x-4">
                Blog
                <span className="neu-surface neu-pressable p-2 inline-block">
                    <a href="/feed.xml" className="no-underline">
                        <Feed className="fill-secondary" />
                    </a>
                </span>
            </h1>
            <div className="flex justify-center">
                <TagList />
            </div>

            <div className="space-y-6 max-w-2xl mx-auto">
                {currentPosts.map(({slug, date, title, tags}) => (
                    <div key={slug} className="neu-surface neu-pressable pb-4">
                        <Link href={`/blog/${slug}`} className="block group no-underline text-text-default px-6 py-2">
                            <h2 className="text-2xl font-semibold text-text-default">{title}</h2>

                            {tags && tags.length > 0 && (
                                <div className="mt-3 mb-3 flex flex-wrap gap-2 overflow-hidden">
                                    {tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-text-default/10 text-text-default px-3 py-2 rounded-lg text-xs font-medium neu-surface neu-inset"
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
            <Pagination currentPage={1} totalPages={totalPages} />
        </section >
    );
}
