import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Tooltip, Spin } from 'antd';
import useScrollToTop from "../../hooks/useScrollToTop";
import eye from "../../assets/img/eye.png";
import top from "../../assets/img/top Arrow.png";
import axios from 'axios';
import { Helmet } from 'react-helmet';
import shareicon from "../../assets/img/shareicon/share.png";

const BlogView = () => {
 
  const [blog, setBlog] = useState({});
    const [darkMode, setDarkMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const { urlName } = useParams(); 

    const copyToClipboard = () => {
        
      const textToCopy = `https://phiconsulting.org//blog/${urlName}`;
  
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          // Success feedback
          alert('Link copied to clipboard!');
          console.log(textToCopy);
        })
        .catch(err => {
          // Error feedback
          console.error('Failed to copy link: ', err);
        });
    };


  useEffect(() => {
    
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(`https://prickle-balanced-archaeopteryx.glitch.me/blogs/name/${urlName}`);
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

            <Tooltip placement="leftTop" title="Share link">
            <button onClick={copyToClipboard}><img src={shareicon} alt="eye icon" width={25} height={25}/></button>
            </Tooltip>
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