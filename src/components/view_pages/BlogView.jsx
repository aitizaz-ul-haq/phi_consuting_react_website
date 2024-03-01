import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tooltip, Spin } from 'antd';
import useScrollToTop from "../../hooks/useScrollToTop";
import eye from "../../assets/img/eye.webp";
import top from "../../assets/img/top Arrow.webp";
import axios from 'axios';
import { Helmet } from 'react-helmet';
import twittericon from "../../assets/img/socil-media/twitter11.webp";
import linkdinicon from "../../assets/img/socil-media/linkedin.webp";
import facebookicon from "../../assets/img/socil-media/facebook.webp";

const BlogView = () => {
 
  const [blog, setBlog] = useState({});
    const [darkMode, setDarkMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const { urlName } = useParams(); 

    const copyToClipboard = () => {
        
      const textToCopy = `https://phiconsulting.org/blog/${urlName}`;
  
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
    <title>{blog.title || "Default Blog Title"}</title>
    <meta name="description" content={blog.summary || "Default blog summary."} />
    <link rel="canonical" href={`https://phiconsulting.org/blog/${urlName}`} />
    
    {/* Open Graph tags */}
    <meta property="og:title" content={blog.title || "Default Blog Title"} />
    <meta property="og:description" content={blog.summary || "Default blog summary."} />
    <meta property="og:image" content={blog.imageUrl || "https://example.com/default-image.jpg"} />
    <meta property="og:url" content={`https://phiconsulting.org/blog/${urlName}`} />
    <meta property="og:type" content="article" />
    
    {/* Additional tags for better handling and to specify image dimensions (optional but recommended) */}
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    
    {/* Ensure the site name is set for better branding */}
    <meta property="og:site_name" content="Your Site Name" />
    
    {/* If you have a Twitter account, also include Twitter Card tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={blog.title || "Default Blog Title"} />
    <meta name="twitter:description" content={blog.summary || "Default blog summary."} />
    <meta name="twitter:image" content={blog.imageUrl || "https://example.com/default-image.jpg"} />
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

             <article className="blog-viewer">
                <section className="blog-content-container">
                    <div className="blog-content">
                        <img src={blog.imageUrl} alt="Blog header" className='blog-image-in-reader' />
                        <div className="share-blog-social-row">
                        <Tooltip title="Share on Facebook" placement="bottom" color='blue'>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=https://phiconsulting.org/blog/${urlName}`} target="_blank" rel="noopener noreferrer">
                            <img src={facebookicon} alt='Facebook icon' width={40}/>
                       </a>
                       </Tooltip>
                       <Tooltip title="Share on Linkdin" placement="bottom" color='blue'>
                        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://phiconsulting.org/blog/${urlName}`} target="_blank" rel="noopener noreferrer" className='middle-blog-icon-share'>
                             <img src={linkdinicon} alt='LinkedIn icon' width={40}/>
                        </a>
                        </Tooltip>
                        <Tooltip title="share on X" placement="bottom" color='black'>
                        <a href={`https://twitter.com/intent/tweet?url=https://phiconsulting.org/blog/${urlName}`} target="_blank" rel="noopener noreferrer">
                             <img src={twittericon} alt='Twitter icon' width={40} />
                          </a>
                          </Tooltip>
                        </div>
                        
                        <h1 className="blog-heading-read-section">{blog.title}</h1>
                        <p className="blog-desc-line-section">{blog.summary}</p>
                        <hr />
                        <div className="blog-content-text-section" dangerouslySetInnerHTML={{ __html: blog.blogContent }} />
                       
                    </div>
                </section>
            </article>
        </>
    )
}

export default BlogView;