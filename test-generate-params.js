// Simple test to simulate the generateStaticParams function logic
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { globSync } = require('glob');

const POSTS_PER_PAGE = 20;
const postsDirectory = path.join(process.cwd(), 'posts');

function getSortedPostsData() {
    const filePaths = globSync('posts/**/*.md');
    console.log('Found file paths:', filePaths);
    
    const allPostsData = filePaths.map((filePath) => {
        const slug = path.relative(postsDirectory, filePath).replace(/\.md$/, '');
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const matterResult = matter(fileContents);

        const {title, date, tags} = matterResult.data;
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

function generateStaticParams() {
    console.log('Starting generateStaticParams...');
    const allPosts = getSortedPostsData();
    console.log('Posts found:', allPosts.length);
    console.log('Posts data:', allPosts);
    
    const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
    console.log('Total pages needed:', totalPages);

    const allParams = Array.from({length: totalPages}, (_, i) => ({page: String(i + 1)}));
    console.log('All params before filter:', allParams);
    
    const filteredParams = allParams.filter(p => p.page !== '1');
    console.log('Filtered params (excluding page 1):', filteredParams);
    
    return filteredParams;
}

try {
    const result = generateStaticParams();
    console.log('Final result:', result);
} catch (error) {
    console.error('Error in generateStaticParams:', error);
}