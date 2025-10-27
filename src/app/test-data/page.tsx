"use client";

import { useEffect, useState } from 'react';

const TestDataPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const blogsRes = await fetch('/api/blogs');
      const blogsData = await blogsRes.json();
      setBlogs(blogsData);

      const tagsRes = await fetch('/api/tags');
      const tagsData = await tagsRes.json();
      setTags(tagsData);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Test Data</h1>
      <h2>Blogs</h2>
      <pre>{JSON.stringify(blogs, null, 2)}</pre>
      <h2>Tags</h2>
      <pre>{JSON.stringify(tags, null, 2)}</pre>
    </div>
  );
};

export default TestDataPage;
