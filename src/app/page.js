




import Link from 'next/link';
import Header from '@/components/Header';
import BlogCard from '@/components/BlogCard';
import { getAllPosts } from '@/lib/posts';

export default async function HomePage() {
  // const posts = await getAllPosts();
  // const recentPosts = posts.slice(0, 3);

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">
            Welcome to Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore articles about Next.js, React, and modern web development.
            Available in both standard and AMP formats for optimal performance.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link
              href="/blog"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              View All Posts
            </Link>
          </div>
        </section>
        
        {/* <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Recent Posts</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map(post => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section> */}
      </main>
    </>
  );
}