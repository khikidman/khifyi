export interface Post {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  content: string;
  readingTime?: number;
}

const modules = import.meta.glob("../content/blog/*.md", {
  eager: true,
  as: "raw",
});

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);

  if (!match) {
    return {
      metadata: {},
      content: raw,
    };
  }

  const frontmatter = match[1];
  const content = raw.replace(match[0], "").trim();

  const metadata: Record<string, any> = {};

  frontmatter.split("\n").forEach((line) => {
    const [key, value] = line.split(":");

    if (!key || !value) return;

    const trimmedValue = value.trim();

    if (trimmedValue.startsWith("[")) {
      metadata[key.trim()] = JSON.parse(trimmedValue);
    } else {
      metadata[key.trim()] = trimmedValue.replace(/"/g, "");
    }
  });

  return { metadata, content };
}

export const getPosts = (): Post[] => {
  const posts: Post[] = [];

  for (const path in modules) {
    const raw = modules[path] as string;

    const { metadata, content } = parseFrontmatter(raw);

    const slug =
      path.split("/").pop()?.replace(".md", "") ?? "";

    posts.push({
      slug,
      title: metadata.title || "Untitled",
      date: metadata.date || "",
      summary: metadata.summary || "",
      tags: metadata.tags || [],
      content,
      readingTime: estimateReadingTime(content),
    });
    
  }

  return posts.sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );
};

export const getAllTags = () => {
  const posts = getPosts();

  const tagSet = new Set<string>();

  posts.forEach((post) => {
    post.tags.forEach((tag) => tagSet.add(tag));
  });

  return Array.from(tagSet);
};

function estimateReadingTime(text: string) {
  const words = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}