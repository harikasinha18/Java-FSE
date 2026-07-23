import React from "react";
import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {
  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  // Element Variable
  let blogComponent;
  if (showBlogs) {
    blogComponent = <BlogDetails />;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Blogger App</h1>

      {/* Conditional Rendering using && */}
      {showBooks && <BookDetails />}

      {/* Conditional Rendering using Element Variable */}
      {blogComponent}

      {/* Conditional Rendering using Ternary Operator */}
      {showCourses ? <CourseDetails /> : <h3>No Courses Available</h3>}
    </div>
  );
}

export default App;