// PostScroller.tsx
import { useEffect, useState } from "react";
import type { Post } from "../blog/getPosts";

interface Props {
  posts: Post[];
}

const PostScroller = ({ posts }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPercent = window.scrollY / docHeight;

      const index = Math.min(
        posts.length - 1,
        Math.floor(scrollPercent * posts.length)
      );

      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [posts.length]);

  const scrollToPost = (index: number) => {
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const targetScroll = (index / posts.length) * docHeight;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed right-[12vw] top-0 h-screen flex items-center justify-center z-50">
      <div className="relative flex flex-col items-center gap-6">
        <div className="absolute w-0.5 top-2 bottom-6 bg-zinc-800" />

        {posts.map((post, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={post.slug}
              className="relative group flex flex-col items-center cursor-pointer"
              onClick={() => scrollToPost(index)}
            >
              <div className="absolute right-10 opacity-0 group-hover:opacity-100 transition bg-zinc-900 border border-zinc-800 text-xs px-3 py-1 rounded-lg whitespace-nowrap">
                {post.title}
              </div>

              <div
                className={`
                  w-4 h-12 rounded-full transition-all duration-300
                  relative z-10
                  ${isActive
                    ? "bg-blue-300 shadow-lg shadow-blue-300/40 scale-125 animate-pulse"
                    : "bg-zinc-800 hover:bg-zinc-600"}
                `}
              />
            </div>
          );
        })}

        <div className="text-xs text-zinc-500 mt-4">{posts.length} posts</div>
      </div>
    </div>
  );
};

export default PostScroller;