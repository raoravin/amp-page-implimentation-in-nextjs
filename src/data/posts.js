


export const data = [
  {
    "slug": "getting-started-nextjs-14",
    "title": "Getting Started with Next.js 14 and App Router",
    "excerpt": "Learn how to build modern web applications with Next.js 14's new App Router and React Server Components.",
    "content": "Next.js 14 introduces significant improvements to the App Router, making it the recommended way to build new applications. The App Router leverages React Server Components by default, providing better performance and a simpler mental model for data fetching.\n\n## Key Features\n\n### Server Components by Default\nWith the App Router, components are Server Components by default. This means they render on the server and send only the resulting HTML to the client, reducing the JavaScript bundle size.\n\n### Improved Data Fetching\nData fetching is simplified with async/await support directly in components. You can fetch data at the component level without worrying about waterfalls.\n\n### Built-in SEO Support\nThe App Router makes it easy to set metadata for better SEO. You can export metadata objects or generate them dynamically.\n\n## Getting Started\n\nTo create a new Next.js 14 project with the App Router:\n\n```bash\nnpx create-next-app@latest my-app\ncd my-app\nnpm run dev\n```\n\nThe App Router uses a file-system based routing mechanism where folders represent routes and special files like `page.tsx` define the UI.",
    "date": "2024-03-15",
    "author": "John Doe",
    "tags": ["Next.js", "React", "Web Development"],
    "image": "/api/placeholder/800/400"
  },
  {
    "slug": "implementing-amp-pages",
    "title": "Implementing AMP Pages in Modern Web Applications",
    "excerpt": "A comprehensive guide to creating Accelerated Mobile Pages (AMP) for better mobile performance and SEO.",
    "content": "AMP (Accelerated Mobile Pages) is an open-source framework designed to create fast-loading mobile web pages. While the web has evolved significantly, AMP still plays a crucial role in certain scenarios, particularly for content-heavy sites targeting mobile users.\n\n## Why AMP?\n\n### Lightning-Fast Performance\nAMP pages load almost instantly, providing an excellent user experience on mobile devices, especially on slower connections.\n\n### SEO Benefits\nGoogle and other search engines often prioritize AMP pages in mobile search results, potentially improving your site's visibility.\n\n### Reduced Complexity\nAMP's restrictions force developers to focus on content and performance, eliminating unnecessary JavaScript and complex layouts.\n\n## AMP Components\n\nAMP provides a set of optimized components:\n- `amp-img` for responsive images\n- `amp-video` for optimized video playback\n- `amp-analytics` for tracking\n- `amp-ad` for advertisements\n\n## Best Practices\n\n1. **Validate Your AMP Pages**: Always use the AMP validator to ensure compliance\n2. **Optimize Images**: Use appropriate sizing and formats\n3. **Minimize CSS**: Keep your CSS under 75KB\n4. **Structure Data**: Include structured data for better search appearance",
    "date": "2024-03-10",
    "author": "Jane Smith",
    "tags": ["AMP", "Performance", "Mobile", "SEO"],
    "image": "/api/placeholder/800/400"
  },
  {
    "slug": "react-server-components",
    "title": "Understanding React Server Components",
    "excerpt": "Deep dive into React Server Components and how they revolutionize the way we build React applications.",
    "content": "React Server Components (RSC) represent a paradigm shift in how we think about React applications. They allow components to render on the server while maintaining the interactivity we love about React.\n\n## What Are Server Components?\n\nServer Components are React components that render exclusively on the server. They never re-render on the client and don't add to your JavaScript bundle size.\n\n## Benefits\n\n### Zero Bundle Size\nServer Components don't send any JavaScript to the client. The component logic stays on the server, and only the rendered HTML is sent to the browser.\n\n### Direct Backend Access\nYou can directly access databases, file systems, or internal services without creating API endpoints.\n\n### Automatic Code Splitting\nClient Components are automatically code-split, loading only when needed.\n\n## Server vs Client Components\n\n### Use Server Components when:\n- Fetching data\n- Accessing backend resources\n- Keeping sensitive information on the server\n\n### Use Client Components when:\n- Adding interactivity (onClick, onChange)\n- Using browser APIs\n- Using state or effects\n\n## Example Implementation\n\n```jsx\n// This is a Server Component\nasync function BlogPost({ id }) {\n  const post = await fetchPost(id);\n  return <article>{post.content}</article>;\n}\n```",
    "date": "2024-03-05",
    "author": "Mike Johnson",
    "tags": ["React", "Server Components", "Next.js"],
    "image": "/api/placeholder/800/400"
  }
]