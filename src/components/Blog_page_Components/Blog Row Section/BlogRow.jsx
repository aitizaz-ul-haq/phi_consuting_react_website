import React from 'react';
import BlogCard from '../../shared/cards/BlogCard';


const BlogRow = ({blogs}) => {
    return(
        <article className="bloged">
        <section className="bloged-container">
          <h2 className="bloged-heading">Blogs</h2>
          <div className="bloged-box-container">
            {blogs.map(blog => (
              <BlogCard key={blog._id} id={blog._id} blogs={blog} />
            ))}
          </div>
        </section>
      </article>
    )
}

export default BlogRow;