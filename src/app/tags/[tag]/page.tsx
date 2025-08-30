import {getAllTags, getPostsByTag} from '@/lib/posts';
import Link from 'next/link';
import {format} from 'date-fns';

type Params = {
    params: {
        tag: string;
    };
};

export const dynamicParams = false;
export const dynamic = 'error';

export function generateStaticParams() {
    const tags = getAllTags();
    return tags.map((tag) => ({
        tag: tag,
    }));
}

export default async function TagPage({params}: {params: Promise<{tag: string}>}) {
    const {tag: raw_tag} = await params;
    const tag = decodeURIComponent(raw_tag);
    const posts = getPostsByTag(tag);

    return (
        <section className="container mx-auto px-4 py-4">
            <h1 className="text-4xl font-bold text-center mb-12">
                Tag: <span className="text-secondary">#{tag}</span>
            </h1>
            <div className="space-y-6 max-w-2xl mx-auto">
                {posts.map(({slug, date, title}) => (
                    <div key={slug} className="neu-surface neu-pressable pb-4">
                        <Link href={`/blog/${slug}`} className="block no-underline text-text-default px-6 py-2">
                            <h2 className="text-2xl font-semibold text-text-default">{title}</h2>
                            <small className="text-text-default/60 block mt-2">
                                <time dateTime={date.toDateString()}>
                                    {format(date, 'yyyy-MM-dd HH:mm:ss')}
                                </time>
                            </small>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
