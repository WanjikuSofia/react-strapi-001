import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import motion
import { fetchPosts } from "../services/apis/fetchposts";
import "../index.css"; // Import the CSS file

interface Post {
  id: number;
  Title: string;
  Content: string[];
  Image?: string | null;
}

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      try {
        const postsData = await fetchPosts();
        console.log("Processed API Response:", postsData); // Debugging

        if (!Array.isArray(postsData)) {
          throw new Error("Invalid response format");
        }

        setPosts(
          postsData.map((item: any) => ({
            id: item.id,
            Title: item.Title || "Untitled",
            Content: item.Content
              ? item.Content.map((p: any) =>
                  p.children.map((c: any) => c.text).join("")
                ) // Extract text
              : ["No content available"],
            Image: item.Image?.[0]?.url
              ? `http://localhost:1337${item.Image[0].url}`
              : null,
          }))
        );
      } catch (error) {
        console.error("Failed to load posts:", error);
      }
      setLoading(false);
    };

    getPosts();
  }, []);

  return (
    <div className="post-container">
      <h1 className="title">Posts</h1>
      {loading ? (
        <motion.p
          className="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          Loading...
        </motion.p>
      ) : (
        posts.map((post) => (
          <motion.div
            key={post.id}
            className="post-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>{post.Title}</h2>
            {post.Content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            {post.Image && (
              <motion.img
                src={post.Image}
                alt={post.Title}
                className="post-image"
                whileHover={{ scale: 1.05 }}
              />
            )}
          </motion.div>
        ))
      )}
    </div>
  );
};

export default Posts;
