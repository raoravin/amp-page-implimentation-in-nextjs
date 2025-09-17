import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import BlogPostComponent from '@/components/BlogPost';
import { getPostBySlug, getAllPosts } from '@/lib/posts';


export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - Next.js Blog`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <BlogPostComponent post={post} />
      </main>
    </>
  );
}