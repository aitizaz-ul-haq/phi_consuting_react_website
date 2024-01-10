import React from 'react';
import blogHeader from "../../assets/img/b2b.webp";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import blogs from "../../data/blogs.json";

const BlogView = () => {
  const { id } = useParams();
  const blog = blogs.find(study => study.id === parseInt(id));
    return(
        <>
          <article className="blog-viewer">
            <section className="blog-content-container">
                <div className="blog-content">
                    <div className="blog-image-header-container">
                        <img src={blog.imageone} alt="" className='blog-image-in-reader' />
                    </div>
                   <div className="blog-heading-read-section">
                   {blog.title}
                   </div>
                   <div className="blog-desc-line-section">
                    {blog.summary}
                   </div>
                   <hr />
                   <div className="blog-content-text-section">
                   {blog.content.map((item, index) => (
                item.type === 'paragraph' ? 
                    <p key={index} className="blog-para-spacing">{item.text} </p> : <h3 key={index} className='study-heading'>{item.text}</h3>
                    
            ))}
                   </div>
                   <div class="blog-more-button-container">
                <div class="blog-button-study-page-back">
               
                <Link to="/" className='blog-study-button-back'
                  > &larr; Back</Link
                >
              
                     </div>
                <div class="blog-button-study-page"> <Link to="/insights" className='blog-study-button-back'
                  > View More Blogs &rarr;</Link
                > </div>
              </div>
                </div>
            </section>
          </article>
        </>
    )
}

export default BlogView;