export interface PostMeta {
  title: string;
  date: string;
  slug: string;
  summary: string;
  file: string;
}

export const posts: PostMeta[] = [
  {
    title: "My First Real Blog Post",
    date: "Feb 2026",
    slug: "first-post",
    summary: "Lessons from building my first serious project.",
    file: "/src/content/first-post.md",
  },
];