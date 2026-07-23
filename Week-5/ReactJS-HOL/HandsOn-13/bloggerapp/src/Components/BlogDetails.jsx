import React from "react";

function BlogDetails() {
  const blogs = [
    {
      id: 1,
      title: "Introduction to React",
      author: "John",
      description: "Learn the fundamentals of React."
    },
    {
      id: 2,
      title: "JavaScript ES6",
      author: "David",
      description: "Modern JavaScript features."
    }
  ];

  return (
    <div>
      <h2>Blog Details</h2>

      {blogs.map((blog) => (
        <div key={blog.id}>
          <p><b>Title:</b> {blog.title}</p>
          <p><b>Author:</b> {blog.author}</p>
          <p><b>Description:</b> {blog.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;