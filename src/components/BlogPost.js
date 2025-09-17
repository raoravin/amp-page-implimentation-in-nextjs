'use client';

import Link from 'next/link';




export default function BlogPostComponent({ post }) {
  // Convert markdown-style content to JSX (simplified)
  const renderContent = (content) => {
    const lines = content.split('\n');
    const elements = [];
    let currentParagraph = [];
    
    lines.forEach((line, index) => {
      if (line.startsWith('## ')) {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`}>{currentParagraph.join(' ')}</p>);
          currentParagraph = [];
        }
        elements.push(<h2 key={`h2-${index}`} className="text-2xl font-bold mt-8 mb-4">{line.substring(3)}</h2>);
      } else if (line.startsWith('### ')) {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`}>{currentParagraph.join(' ')}</p>);
          currentParagraph = [];
        }
        elements.push(<h3 key={`h3-${index}`} className="text-xl font-semibold mt-6 mb-3">{line.substring(4)}</h3>);
      } else if (line.startsWith('```')) {
        // Skip code blocks for simplicity
      } else if (line.trim() === '') {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="mb-4">{currentParagraph.join(' ')}</p>);
          currentParagraph = [];
        }
      } else if (line.startsWith('- ')) {
        elements.push(<li key={`li-${index}`} className="ml-6 mb-2">{line.substring(2)}</li>);
      } else {
        currentParagraph.push(line);
      }
    });
    
    if (currentParagraph.length > 0) {
      elements.push(<p key="p-last" className="mb-4">{currentParagraph.join(' ')}</p>);
    }
    
    return elements;
  };

  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>
        <div className="flex items-center justify-between text-gray-600 mb-4">
          <div>
            <span className="font-medium">{post.author}</span>
            <span className="mx-2">•</span>
            <time>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          <Link
            href={`/amp/blog/${post.slug}`}
            className="text-green-600 hover:text-green-700 font-medium transition-colors flex items-center gap-1"
          >
            View AMP Version ⚡
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>
      
      <div className="prose prose-lg max-w-none text-gray-700">
        {renderContent(post.content)}
      </div>
      
      <footer className="mt-12 pt-8 border-t">
        <Link
          href="/blog"
          className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
        >
          ← Back to Blog
        </Link>
      </footer>
    </article>
  );
}