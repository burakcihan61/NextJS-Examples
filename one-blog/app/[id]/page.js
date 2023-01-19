import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import { notFound } from "next/navigation";

async function getPost(id) {
  try {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    return response.json();
  } catch (error) {
    throw new Error(error);
  }
}

const Page = async ({ params }) => {
  const { title, id, body } = await getPost(params.id);

  if (!title) {
    return notFound();
  }

  return (
    <div className={styles.blogContainer}>
      <div className={styles.cardImage}>
        <Image
          src={`https://picsum.photos/200/300?random=${id}`}
          alt="Blog Card Image"
          fill
        />
      </div>

      <h1 className={styles.title}>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default Page;
