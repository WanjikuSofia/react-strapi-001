import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPost, fetchPosts } from "../api";

export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    fetchPost(slug).then(setPost);
  }, [slug]);

  useEffect(() => {
    if (post) {
      fetchPosts(post.attributes.category).then(setRelatedPosts);
    }
  }, [post]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <img
        src={post.attributes.image.data.attributes.url}
        alt={post.attributes.title}
        className="w-full h-64 object-cover rounded"
      />
      <h1 className="text-3xl font-bold mt-4">{post.attributes.title}</h1>
      <p className="text-gray-500">{post.attributes.category}</p>
      <div className="mt-4" dangerouslySetInnerHTML={{ __html: post.attributes.content }} />

      {/* Related Posts */}
      <h2 className="text-2xl font-semibold mt-6">Related Posts</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {relatedPosts
          .filter((related) => related.id !== post.id) // Exclude the current post
          .map((related) => (
            <div key={related.id} className="border p-4 rounded-lg shadow">
              <img
                src={related.attributes.image.data.attributes.url}
                alt={related.attributes.title}
                className="w-full h-32 object-cover rounded"
              />
              <h3 className="text-lg font-semibold">{related.attributes.title}</h3>
              <a href={`/post/${related.attributes.slug}`} className="text-blue-500">
                Read More
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}
