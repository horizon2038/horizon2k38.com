import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from 'remark';
import {globSync} from 'glob';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export const POSTS_PER_PAGE = 20;

const postsDirectory = path.join(process.cwd(), 'posts');

export type PostData = {
    slug: string;
    title: string;
    date: Date;
    tags: string[];
    contentHtml: string;
}

export type PostMeta = Omit<PostData, 'contentHtml'>

export function getSortedPostsData(): PostMeta[] {
    const filePaths = globSync('posts/**/*.md');
    const allPostsData = filePaths.map((filePath) => {
        const slug = path.relative(postsDirectory, filePath).replace(/\.md$/, '');
        // const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const matterResult = matter(fileContents);

        const {title, date, tags} = matterResult.data as {title: string; date: string | Date; tags: string[]};
        const dateObj = date instanceof Date ? date : new Date(date);

        return {
            slug,
            title,
            date: dateObj,
            tags,
        };

    });

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(slug: string): Promise<PostData> {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(remarkRehype, {allowDangerousHtml: true})
        .use(remarkMath)
        .use(rehypeRaw)
        .use(rehypeHighlight)
        .use(rehypeKatex)
        .use(rehypeStringify, {allowDangerousHtml: true})
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    const {title, date, tags} = matterResult.data as {title: string; date: string | Date; tags: string[]};
    const dateObj = date instanceof Date ? date : new Date(date);

    return {
        slug,
        title,
        date: dateObj,
        tags,
        contentHtml,
    };
}

export function getAllTags(): string[] {
    const allPosts = getSortedPostsData();
    const tagsSet = new Set<string>();
    allPosts.forEach(post => {
        post.tags.forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet);
}

export function getPostsByTag(tag: string): PostMeta[] {
    const allPosts = getSortedPostsData();
    return allPosts.filter(post => post.tags.includes(tag));
}
