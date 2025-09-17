import { data } from "@/data/posts";



export async function getAllPosts() {
  // Simulate async operation
  return data;
}

export async function getPostBySlug(slug) {

    console.log(slug);
    
  const posts = await getAllPosts();
  return posts.find(post => post.slug === slug) || null;
}

export async function getPostSlugs() {
  const posts = await getAllPosts();
  return posts.map(post => post.slug);
}

export function calculateReadingTime(content) {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}