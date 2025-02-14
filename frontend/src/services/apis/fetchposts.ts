export const fetchPosts = async () => {
  try {
    const response = await fetch("http://localhost:1337/api/posts?populate=*");
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const jsonData = await response.json();
    return jsonData.data || []; // Ensure an array is returned
  } catch (error) {
    console.error("Error fetching posts:", error);
    return []; // Return an empty array on failure
  }
};

