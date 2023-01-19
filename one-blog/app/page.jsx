import BlogCard from "@/components/BlogCard";
import React from "react";
import styles from "./page.module.css";

async function getPosts() {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  return response.json();
}

const Home = async () => {
  const { posts } = await getPosts();

  return (
    <div className={styles.blogsContainer}>
      {posts.map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Home;
