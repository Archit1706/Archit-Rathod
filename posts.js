// Central configuration for all blog posts
// Set isPublic to false to make a post private

export const postsConfig = [
    {
        slug: 'nextjs',
        title: 'Next.js Pages',
        date: '2021/3/18',
        description: 'Learn more about Next.js pages, routing, and pre-rendering techniques.',
        tag: 'web development',
        author: 'Archit Rathod',
        readTime: '5 min read',
        gradient: 'from-purple-500 to-pink-500',
        isPublic: true  // ← Change to false to make private
    },
    {
        slug: 'reactjs-crash-course',
        title: 'ReactJS Crash Course',
        date: '2024/1/15',
        description: 'A comprehensive guide to get started with React development.',
        tag: 'react',
        author: 'Archit Rathod',
        readTime: '10 min read',
        gradient: 'from-blue-500 to-purple-500',
        isPublic: true  // ← Change to false to make private
    },
    {
        slug: 'javascript_by_practice',
        title: 'JavaScript by Practice',
        date: '2024/2/20',
        description: 'Master JavaScript through practical examples and exercises.',
        tag: 'javascript',
        author: 'Archit Rathod',
        readTime: '15 min read',
        gradient: 'from-yellow-500 to-orange-500',
        isPublic: true  // ← Change to false to make private
    }
];

// Helper function to get only public posts
export const getPublicPosts = () => {
    return postsConfig.filter(post => post.isPublic);
};

// Helper function to get a specific post by slug
export const getPostBySlug = (slug) => {
    return postsConfig.find(post => post.slug === slug);
};

// Helper function to check if a post is public
export const isPostPublic = (slug) => {
    const post = getPostBySlug(slug);
    return post ? post.isPublic : false;
};