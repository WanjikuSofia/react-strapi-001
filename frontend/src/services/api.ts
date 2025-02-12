import axios from "axios";

const API_URL = "http://localhost:1337/api";

// Fetch all posts (with optional category or search query)
export const fetchPosts = async (category = "", search = "") => {
  let query = `${API_URL}/blogposts?populate=*`;

  if (category) {
    query += `&filters[category][$eq]=${category}`;
  }
  
  if (search) {
    query += `&filters[title][$contains]=${search}`;
  }

  const res = await axios.get(query);
  return res.data.data;
};

// Fetch a single post
export const fetchPost = async (slug: string) => {
  const res = await axios.get(
    `${API_URL}/blogposts?filters[slug][$eq]=${slug}&populate=*`
  );
  return res.data.data[0];
};