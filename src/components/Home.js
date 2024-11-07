import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="hero-section">
        <h1>Welcome to E-Learn</h1>
        <p>Your gateway to quality online education. Discover a wide range of courses, interact with expert instructors, and learn at your own pace.</p>
        <button className="explore-btn">Explore Courses</button>
      </header>

      <section className="featured-courses">
        <h2>Featured Courses</h2>
        <div className="courses-list">
          <div className="course-card">
            <h3>Web Development Bootcamp</h3>
            <p>Learn HTML, CSS, JavaScript, and React to build modern, responsive websites.</p>
          </div>
          <div className="course-card">
            <h3>Data Science & Machine Learning</h3>
            <p>Master data analysis and machine learning algorithms with Python.</p>
          </div>
          <div className="course-card">
            <h3>Digital Marketing Essentials</h3>
            <p>Gain skills in SEO, social media, and content marketing strategies.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonials-list">
          <div className="testimonial-card">
            <p>"The Web Development Bootcamp transformed my career. Now, I work as a full-time developer!"</p>
            <p>- Alex J.</p>
          </div>
          <div className="testimonial-card">
            <p>"The Data Science course was comprehensive and hands-on. I learned so much!"</p>
            <p>- Priya K.</p>
          </div>
        </div>
      </section>

      <section className="call-to-action">
        <h2>Ready to Start Learning?</h2>
        <p>Sign up today and gain access to our full library of courses!</p>
        <button className="signup-btn">Get Started</button>
      </section>
    </div>
  );
};

export default Home;
