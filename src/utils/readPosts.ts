export const markPostAsRead = (slug: string) => {
  const reads = JSON.parse(localStorage.getItem("readPosts") || "[]");

  if (!reads.includes(slug)) {
    reads.push(slug);
    localStorage.setItem("readPosts", JSON.stringify(reads));
  }
};

export const hasReadPost = (slug: string) => {
  const reads = JSON.parse(localStorage.getItem("readPosts") || "[]");
  return reads.includes(slug);
};