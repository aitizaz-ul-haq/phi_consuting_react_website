import React from 'react';
import { Link } from 'react-router-dom';
import blogpic from "../../../assets/img/b2b.webp";

const BlogCard = ({blogs, id}) => {
  const { title, blogContent, companyName,summary, readTime, dateCreated, imageUrl,urlName } = blogs;

  // const handleClick = () => {
  //   localStorage.setItem('currentBlogId', id);
  // };
    return(
        
        <div class="blog-card-one">
            <Link className='blog-phi-home' to={`/blog/${urlName}`}>
            <div class="blog-image">
              <img
                 src={imageUrl}
                alt=""
                width="455"
                class="blog-image-home"
              />
            </div>
            <div class="date-and-read-time">
              <p class="date">{dateCreated}</p>
              <p class="read-time">{readTime}</p>
            </div>
            <div class="blog-heading">
             {title}
            </div>
            <div class="blog-desc-card">
             {summary}
            </div>
            </Link>
          </div>
        
    )
}

export default BlogCard;