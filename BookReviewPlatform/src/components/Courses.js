// src/components/Courses.js
import React, { useState, useEffect } from 'react';

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from your backend API (assuming API is set up)
    fetch('http://localhost:8000/api/courses') // Replace with your actual API URL
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.log('Error fetching courses:', error));
  }, []);

  return (
    <div>
      <h2>Available Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <h3>{course.name}</h3>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
