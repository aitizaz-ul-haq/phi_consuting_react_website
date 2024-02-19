import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Tooltip, Spin } from 'antd';
import useScrollToTop from "../../hooks/useScrollToTop";
import eye from "../../assets/img/eye.png";
import top from "../../assets/img/top Arrow.png";
import axios from 'axios';
import { Helmet } from 'react-helmet';

const BlogView = () => {
 
  const [blog, setBlog] = useState({});
    // const blogId = localStorage.getItem('currentBlogId'); // Ensure this is correctly set
    const [darkMode, setDarkMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const { urlName } = useParams(); // Destructure urlName from useParams

  useEffect(() => {
    
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(`https://prickle-balanced-archaeopteryx.glitch.me/blogs/${urlName}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        // Introduce a delay before hiding the spinner
        setTimeout(() => setLoading(false), 2000); // 2000ms = 2 seconds
      }
    };

    if (urlName) {
      fetchBlogData();
    }
  }, [urlName]);

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
          <Helmet>
        <title>Explore Insights and Updates on Phi Consulting's Blog</title>
        <meta name="description" content="Explore the latest insights, updates, and industry trends on Phi Consulting's blog. Stay informed about transformative projects, innovative solutions, and thought leadership articles across various industries." />
       
      </Helmet>

      <Helmet>
      <link rel="canonical" href={`https://phi-verse.com/blog/${urlName}`} />
      </Helmet>

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
          {/* <article className="blog-viewer">
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
          </article> */}

<article className="blog-viewer">
                <section className="blog-content-container">
                    <div className="blog-content">
                        <img src={blog.imageUrl} alt="Blog header" className='blog-image-in-reader' />
                        <h1 className="blog-heading-read-section">{blog.title}</h1>
                        <p className="blog-desc-line-section">{blog.summary}</p>
                        <hr />
                        <div className="blog-content-text-section" dangerouslySetInnerHTML={{ __html: blog.blogContent }} />
                        {/* Back and More Blogs Links */}
                    </div>
                </section>
            </article>
        </>
    )
}

export default BlogView;