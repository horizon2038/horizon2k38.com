import {getPostData, getSortedPostsData} from '@/lib/posts';
import {notFound} from 'next/navigation';
import Link from 'next/link';
import {format} from 'date-fns';
import {Button} from '@/components/ui/Button';
import {SocialShare} from '@/components/blog/SocialShare';
import type {Metadata} from 'next';

type Params = {
    params: {
        slug: string[];
    };
};

export const dynamicParams = false;
export const dynamic = 'force-static';

export function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.slug.split('/'),
    }));
}

export async function generateMetadata({params}: {params: Promise<{slug: string[]}>}): Promise<Metadata> {
    const {slug} = await params;
    const joined = slug.join('/');
    
    try {
        const postData = await getPostData(joined);
        const siteUrl = process.env.SITE_URL || 'https://horizon2k38.com';
        const postUrl = `${siteUrl}/blog/${joined}`;
        
        return {
            title: `${postData.title} | horizon2k38`,
            description: `${postData.title} - horizon2k38のブログ記事`,
            openGraph: {
                title: postData.title,
                description: `${postData.title} - horizon2k38のブログ記事`,
                url: postUrl,
                siteName: 'horizon2k38',
                type: 'article',
                publishedTime: postData.date.toISOString(),
                tags: postData.tags,
            },
            twitter: {
                card: 'summary_large_image',
                title: postData.title,
                description: `${postData.title} - horizon2k38のブログ記事`,
            },
        };
    } catch {
        return {
            title: 'Post Not Found | horizon2k38',
            description: 'The requested blog post was not found.',
        };
    }
}

export default async function Post({params}: {params: Promise<{slug: string[]}>}) {
    const {slug} = await params;
    const joined = slug.join('/');

    const postData = await getPostData(joined);
    if (!postData) {
        notFound();
    }

    const date = new Date(postData.date);

    return (
        <article className="container prose lg:prose-xl mx-auto py-8 px-8">
            <h1>{postData.title}</h1>
            <div className="text-gray-500 mb-8">
                <time dateTime={postData.date.toDateString()}>
                    {format(postData.date, 'yyyy-MM-dd H:mm:ss')}
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

            <div className="" dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
            
            <SocialShare
                title={postData.title}
                url={`/blog/${joined}`}
                description={`${postData.title} - horizon2k38のブログ記事`}
            />
        </article>
    );
}
