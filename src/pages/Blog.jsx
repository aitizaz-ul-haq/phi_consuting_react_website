import React,{useState, useEffect} from 'react';
import BlogHeroSection from '../components/Blog_page_Components/Blog Hero Section/BlogHeroSection';
import BlogCtaSection from '../components/Blog_page_Components/Blog CTA Section/BlogCtaSection';
import BlogRow from '../components/Blog_page_Components/Blog Row Section/BlogRow';
import BlogCard from '../components/shared/cards/BlogCard';
import axios from 'axios';
import useScrollToTop from '../hooks/useScrollToTop';
import { Spin } from 'antd';
import { Helmet } from 'react-helmet';

const Blog = ({blogpic}) => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    const blogedSection = document.querySelector('.bloged');
    if (!blogedSection) return; 
    const handleScroll = () => {
        const yOffset = window.pageYOffset;
        blogedSection.style.backgroundPosition = `center ${yOffset * 0.5}px`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, [isLoading]);

  const fetchBlogs = async () => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    try {
      const response = await axios.get('https://prickle-balanced-archaeopteryx.glitch.me/blogs');
      clearTimeout(timer);
      setBlogs(response.data.map(blog => ({ ...blog, key: blog._id.toString() })));
    } catch (error) {
      console.error('Error fetching blogs:', error);
      clearTimeout(timer);
    } finally {
      setIsLoading(false);
    }
  };

  const gotoContacts = () => {
    window.location.href = '/contact-us';
  }

  useScrollToTop();

  if (isLoading) {
    return (
      <div className="spinner-container">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <>
       <Helmet>
        <title>Informative Blogs - Phi Consulting</title>
        <meta name="description" content="Discover Phi Consulting's insightful business blogs covering industry trends, best practices, and expert insights. Stay informed, ahead of the curve, and drive success in the competitive business landscape." />
       </Helmet>

      <Helmet>
      <link rel="canonical" href="https://phi-verse.com/blogs" />
      </Helmet>

    {/* <!-- Hero Section --> */}
    <BlogHeroSection gotoContacts={gotoContacts} />

      {/* <!-- Blog-Section --> */}
     <BlogRow blogs={blogs}/>

      {/* <!-- Call to Action Section --> */}
      <BlogCtaSection />
    </>
  )
}

export default Blog;
