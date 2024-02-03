import React, { useEffect, useRef, useState } from 'react';
import blogHeader from "../../assets/img/b2b.webp";
import { Link, useParams } from 'react-router-dom';
import { Tooltip, Spin } from 'antd';
import useScrollToTop from "../../hooks/useScrollToTop";
import eye from "../../assets/img/eye.png";
import top from "../../assets/img/top Arrow.png";
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const BlogView = () => {
 
  const [blog, setBlog] = useState(null);
  // const { id } = useParams();
  const blogId = localStorage.getItem('currentBlogId');
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(`https://prickle-balanced-archaeopteryx.glitch.me/blogs/${blogId}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        // Introduce a delay before hiding the spinner
        setTimeout(() => setLoading(false), 2000); // 2000ms = 2 seconds
      }
    };

    if (blogId) {
      fetchBlogData();
    }
  }, [blogId]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useScrollToTop();

  if (loading) {
    return <div className="spinner-container"><Spin size="large" /></div>;
  }

  if (!blog) {
    return <div>Loading blog data...</div>;
  }
    return(
        <>
         <div className={`overlayscreen ${darkMode ? 'activate' : ''}`}></div>
        <div className="left-section-control"></div>
            <div className="right-section-control">
            <Tooltip placement="leftTop" title="toggle eye protection">
            <button onClick={toggleDarkMode}> <img src={eye} alt="eye icon" width={25} height={25}/></button> 
            </Tooltip>
                 {/* Back to Top Button */}
                 <Tooltip placement="leftTop" title="back to top">
    <button className="back-to-top" onClick={scrollToTop}>
    <img src={top} alt="eye icon" width={25} height={25}/>
    </button>
    </Tooltip>
            </div>
          <article className="blog-viewer">
            <section className="blog-content-container">
                <div className="blog-content">
                    <div className="blog-image-header-container">
                        <img src={blogHeader} alt="" className='blog-image-in-reader' />
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
                <div class="blog-button-study-page"> <Link to="/blogs" className='blog-study-button-back'
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