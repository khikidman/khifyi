import { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { getPosts, getAllTags } from "../blog/getPosts";
import PostScroller from "../components/PostScroller";
import { markPostAsRead, hasReadPost } from "../utils/readPosts";

const Blog = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const posts = getPosts();
  const tags = getAllTags();

  var filteredPosts = activeTag
    ? posts.filter((p) => p.tags.includes(activeTag))
    : posts;

  return (
    <Layout>
        
      <div className="mb-10">
  <h1 className="text-5xl font-bold tracking-tight flex items-center gap-2">
    
    {/* Opening Bracket */}
    <span className="bg-gradient-to-r from-blue-300 via-blue-300/90 to-blue-300/80 bg-clip-text text-transparent">
      &lt;
    </span>

    <span>Blog</span>

    {/* Closing Bracket */}
    <span className="bg-gradient-to-r from-blue-300/80 via-blue-300/70 to-blue-300/60 bg-clip-text text-transparent">
      /&gt;
    </span>

  </h1>
  <div className="mt-4 h-[3px] w-180 bg-gradient-to-r from-blue-300/80 to-transparent" />

  {/* <p className="text-zinc-500 mt-3 text-sm">
    Thoughts on code, systems, and design.
  </p> */}
</div>

      {/* Tag Filter */}
      <div className="flex flex-wrap gap-3 mb-10">
  <button
    onClick={() => setActiveTag(null)}
    className={`
      px-4 py-2 rounded-full text-sm
      transition-all duration-300
      border border-zinc-700
      hover:border-blue-500
      hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]
      ${activeTag === null
        ? "bg-blue-300 shadow-[0_0_25px_rgba(59,130,246,0.6)] font-bold"
        : "bg-transparent"}
    `}
  >
    All
  </button>

  {tags.map((tag) => {
    const isActive = activeTag === tag;

    return (
      <button
        key={tag}
        onClick={() => setActiveTag(tag)}
        className={`
          px-4 py-2 rounded-full text-sm
          border border-zinc-800
          transition-all duration-300
          hover:border-blue-500
          hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]
          ${isActive
            ? "bg-blue-300 shadow-[0_0_25px_rgba(59,130,246,0.3)] scale-105 font-semibold text-black"
            : "bg-zinc-900"}
        `}
      >
        {tag}
      </button>
    );
  })}
</div>

      <div className="space-y-8">
        {filteredPosts.map((post) => {
            const isRead = hasReadPost(post.slug);
  return (
  <article
  key={post.slug}
  className="relative p-[1.5px] rounded-xl overflow-hidden group"
>
  {/* Gradient Border — Only for unread posts */}
  {!isRead && (
    <div
      className="
        absolute inset-0
        rounded-xl
        bg-gradient-to-r
        from-transparent
        via-blue-300
        to-transparent
        animate-gradient-border
        opacity-80
      "
    />
  )}

  {/* Subtle Glow */}
  {!isRead && (
    <div
      className="
        absolute inset-0
        rounded-xl
        bg-blue-500/10
        blur-xl
        opacity-30
        group-hover:opacity-50
        transition duration-200
      "
    />
  )}

  {/* Card Content */}
  <div
    className={`
      relative z-10 p-6 rounded-xl
      bg-zinc-950
      border
      transition duration-500

      ${
        isRead
          ? "border-zinc-800"
          : "border-blue-400/60 group-hover:border-blue-400"
      }
    `}
    onClick={() => markPostAsRead(post.slug)}
  >
    <Link to={`/blog/${post.slug}`}>
      <h2 className="text-2xl font-semibold group-hover:text-blue-400 transition">
        {post.title}
      </h2>
    </Link>

    <p className="text-sm text-zinc-500 mt-2">
      {post.date} • {post.readingTime} min read
    </p>

    <p className="mt-4 text-zinc-300">{post.summary}</p>
  </div>
</article>
  )
})}
      </div>
      <PostScroller posts={filteredPosts} />
    </Layout>
  );
};

export default Blog;