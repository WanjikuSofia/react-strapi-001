import { useEffect, useState } from "react";
import { fetchPosts } from "../api";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPosts(category, search).then(setPosts);
  }, [category, search]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Earth Movers Blog</h1>

      {/* Search and Filter Section */}
      <div className="flex space-x-4 mt-4">
        <input
          type="text"
          placeholder="Search by title..."
          className="border p-2 rounded"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Backhoe">Backhoe</option>
          <option value="Excavator">Excavator</option>
          <option value="Bulldozer">Bulldozer</option>
          <option value="Loader">Loader</option>
          <option value="Grader">Grader</option>
        </select>
      </div>

      {/* Blog List */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded-lg shadow">
            <img
              src={post.attributes.image.data.attributes.url}
              alt={post.attributes.title}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold">{post.attributes.title}</h2>
            <p className="text-gray-700">{post.attributes.category}</p>
            <a href={`/post/${post.attributes.slug}`} className="text-blue-500">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
