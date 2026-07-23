import React from "react";

function CourseDetails() {
  const courses = [
    { id: 1, name: "React", duration: "2 Months", trainer: "Harika" },
    { id: 2, name: "Spring Boot", duration: "3 Months", trainer: "Raj" },
    { id: 3, name: "Angular", duration: "2 Months", trainer: "Priya" }
  ];

  return (
    <div>
      <h2>Course Details</h2>

      {courses.map((course) => (
        <div key={course.id}>
          <p><b>Course:</b> {course.name}</p>
          <p><b>Duration:</b> {course.duration}</p>
          <p><b>Trainer:</b> {course.trainer}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;