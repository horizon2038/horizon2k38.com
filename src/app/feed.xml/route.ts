import { getSortedPostsData } from '@/lib/posts';

export const dynamic = 'force-static';

export async function GET() {
    const posts = getSortedPostsData();
    const siteUrl = process.env.SITE_URL || 'https://horizon2k38.com';
    
    const rssItems = posts.slice(0, 20).map(post => {
        const postUrl = `${siteUrl}/blog/${post.slug}`;
        return `
        <item>
            <title><![CDATA[${post.title}]]></title>
            <link>${postUrl}</link>
            <guid>${postUrl}</guid>
            <pubDate>${post.date.toUTCString()}</pubDate>
            <description><![CDATA[${post.title} - horizon2k38のブログ記事]]></description>
            ${post.tags.map(tag => `<category>${tag}</category>`).join('')}
        </item>`;
    }).join('');

    const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>horizon2k38 Blog</title>
        <link>${siteUrl}</link>
        <description>horizon2k38の個人ブログ</description>
        <language>ja</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
        ${rssItems}
    </channel>
</rss>`;

    return new Response(rssXml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600',
        },
    });
}