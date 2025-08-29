import {getPostData, getSortedPostsData} from '@/lib/posts';
import {notFound} from 'next/navigation';
import Link from 'next/link';
import {format} from 'date-fns';
import {Button} from '@/components/ui/Button';

type Params = {
    params: {
        slug: string[];
    };
};

export function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.slug.split('/'),
    }));
}

export default async function Post({params}: Params) {
    const {slug} = await params;
    const joined = slug.join('/');

    const postData = await getPostData(joined);
    if (!postData) {
        notFound();
    }

    const date = new Date(postData.date);

    return (
        <article className="prose lg:prose-xl mx-auto py-16 px-4">
            <h1>{postData.title}</h1>
            <div className="text-gray-500 mb-8">
                <time dateTime={postData.date.toDateString()}>
                    {format(postData.date, 'yyyy-MM-dd HH:mm:ss')}
                </time>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
                {postData.tags.map((tag) => (
                    <Link href={`/tags/${tag}`} key={tag}>
                        <Button variant="primary" size="sm" key={tag}>
                            #{tag}
                        </Button>
                    </Link>
                ))}
            </div>

            <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
        </article>
    );
}
