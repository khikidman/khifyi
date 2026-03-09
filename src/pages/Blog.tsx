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
        
      <div className="mb-10 sticky z-50">
  <h1 className="text-5xl font-bold tracking-tight flex items-center gap-2">
    
    {/* Opening Bracket */}
    <span className="bg-linear-to-r from-blue-300 via-blue-300/90 to-blue-300/80 bg-clip-text text-transparent">
      &lt;
    </span>

    <span>Blog</span>

    {/* Closing Bracket */}
    <span className="bg-linear-to-r from-blue-300/80 via-blue-300/70 to-blue-300/60 bg-clip-text text-transparent">
      /&gt;
    </span>

  </h1>
  <div className="mt-4 h-0.75 w-75 bg-linear-to-r from-blue-300/80 to-transparent" />

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
      hover:border-blue-300
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
          hover:border-blue-300
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

      <div className="flex flex-col gap-8 w-full">

  {filteredPosts.map((post) => {

    const isRead = hasReadPost(post.slug);

    return (
      <Link
  to={`/blog/${post.slug}`}
  onClick={() => markPostAsRead(post.slug)}
  className="block"
>
      <article
  key={post.slug}
  className="
    group
    relative

    p-0.5
    rounded-2xl

    transition-all duration-500 ease-out

    hover:-translate-y-1
    hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
  "
>

        {/* Unread Animated Border */}
        {!isRead && (
          <div
            className="
              absolute inset-0
              rounded-2xl
              bg-linear-to-r
              from-transparent
              via-blue-300
              to-transparent
              animate-gradient-border
              opacity-70
            "
          />
        )}

        {/* Glow Layer */}
        {!isRead && (
          <div
            className="
              absolute inset-0
              rounded-2xl
              bg-blue-500/10
              blur-xl
              opacity-0
              group-hover:opacity-40
            "
          />
        )}

        {/* Card Content */}
        <div
          className={`
            relative z-10

            flex flex-col
            justify-between

            p-6

            rounded-2xl
            backdrop-blur-xl

            transition-all duration-500 ease-out

            bg-linear-to-b
            from-zinc-900/90
            to-zinc-950

            border-2

            ${
              isRead
                ? "border-zinc-800 text-white/90"
                : "border-blue-400/50"
            }

            hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
            hover:border-blue-300/80
          `}
          onClick={() => markPostAsRead(post.slug)}
        >

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            {/* Left Content */}
            <div className="flex-1">
              <h2 className="
                text-2xl font-semibold
                tracking-tight
                group-hover:text-blue-300
                transition
              ">
                {post.title}
              </h2>

              <p className="text-sm text-zinc-500 mt-2">
                {post.date} • {post.readingTime} min read
              </p>

              <p className="mt-4 text-zinc-300 leading-relaxed max-w-xl">
                {post.summary}
              </p>
            </div>

          </div>

        </div>
      </article>
      </Link>
    );
  })}

</div>
      <PostScroller posts={filteredPosts} />
    </Layout>
  );
};

export default Blog;