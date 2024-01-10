import React from 'react';
import blogpic from "../assets/img/bi.jpg";
import { Link } from 'react-router-dom';
import blogs from '../data/blogs.json';
import BlogCard from '../components/shared/cards/BlogCard';

const Blog = () => {

  const gotoContacts = () => {
    window.location.href = '/contact';
  }
  return (
    <>
    {/* <!-- Hero Section --> */}
      <article class="hero">
        <section class="hero-container-blog">
          <div class="hero-content-blog">
            <h2 class="hero-heading-blog">Explore the Phi Consulting Blog</h2>
            <p class="hero-desc-blog">
              Welcome to a reservoir of knowledge and expertise! Dive into the
              Phi Consulting Blog, where we unravel the intricacies of Sales,
              Customer Experience, Finance, Business, and HR & Recruitment
              Consulting. Gain valuable insights, stay updated on industry
              trends, and discover strategies to elevate your business to new
              heights.
            </p>
            <div class="consult-button-blog" onClick={gotoContacts}>Schedule a Free Consultation</div>
          </div>
        </section>
      </article>

      {/* <!-- Blog-Section --> */}
      <article class="bloged">
        <section class="bloged-container">
          <h2 class="bloged-heading">Blogs</h2>
          <div class="bloged-box-container">
          {blogs.map(study => (
                <BlogCard key={study.id} blogs={study} />
            ))}
          </div>
        </section>
      </article>

      {/* <!-- Call to Action Section --> */}
      <article class="cta-container">
        <section class="cta-sections-container">
          <div class="cta-content">
            <div class="cta-heading">
              Ready to delve deeper into the world of business success?
            </div>
            <div class="cta-descrip">
              Explore our blog for a wealth of knowledge and actionable
              insights. Whether you're a startup, SME, or industry enthusiast,
              Phi Consulting is your guide to unlocking unparalleled success.
            </div>
          </div>
          <div class="cta-button-section">
            <div class="right-button-header">
              <span
                ><Link to="/contact" class="inner-header"
                  >Get in Touch</Link
                ></span
              >
            </div>
          </div>
        </section>
      </article>
    </>
  )
}

export default Blog;
