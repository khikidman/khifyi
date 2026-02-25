import Layout from "../components/Layout";
import { useParams, Link } from "react-router-dom";
import { getPosts } from "../blog/getPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const posts = getPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <Layout>Post not found</Layout>;

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4">

        {/* Back */}
        <Link
          to="/blog"
          className="pt-10 text-zinc-500 hover:text-blue-300 transition"
        >
          ← Back to blog
        </Link>

        {/* Hero */}
        <header className="mt-10 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-zinc-500">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readingTime} min read</span>
          </div>

          <div className="mt-6 h-px bg-zinc-800" />
        </header>

        {/* Content */}
        <article className="prose prose-invert prose-zinc max-w-none">
          {post.content}
        </article>

        {/* Footer */}
        <div className="mt-20 pt-10 border-t border-zinc-800">
          <Link
            to="/blog"
            className="text-blue-300 hover:underline"
          >
            ← View all posts
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;