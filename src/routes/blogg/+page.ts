export interface Post {
  title: string;
  slug: string;
  description: string;
  date: string;
  published: boolean;
}

export async function load() {
  const posts: Post[] = [];

  // Import all markdown files from src/posts
  const paths = import.meta.glob("/src/posts/*.md", { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split("/").at(-1)?.replace(".md", "");

    if (file && typeof file === "object" && "metadata" in file && slug) {
      const metadata = file.metadata as Omit<Post, "slug">;
      const post = { ...metadata, slug };

      // Only include published posts
      if (post.published) {
        posts.push(post);
      }
    }
  }

  // Sort by date (newest first)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return {
    posts,
  };
}
