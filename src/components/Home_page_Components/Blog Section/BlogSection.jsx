import React from 'react';
import BlogCard from '../../shared/cards/BlogCard';
import { Link } from 'react-router-dom';


const BlogSection = ({ blogs, insightsHeading, insightsDescription }) => {
    return(
    <article id="blog" className="blog">
      <section className="blog-container">
        <h2 className="blog-title">{insightsHeading}</h2>
        <p className="blog-desc">{insightsDescription}</p>
      </section>
      <section className="blog-cards-container">
        {blogs.map(blog => (
          <BlogCard key={blog._id} id={blog._id} blogs={blog} />
        ))}
      </section>
      <section className="button-readmore">
        <div className="right-button">
          <span><Link to="/blogs" className='morcases'>Read More</Link></span>
        </div>
      </section>
    </article>
    )
}

export default BlogSection;