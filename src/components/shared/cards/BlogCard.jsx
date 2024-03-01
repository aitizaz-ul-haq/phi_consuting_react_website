import React from 'react';
import { Link } from 'react-router-dom';
import { Tag } from 'antd';
const BlogCard = ({blogs, id}) => {
  const { title, blogContent,category, companyName,summary, readTime, dateCreated, imageUrl,urlName } = blogs;

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
            <div className="blog-card-stuff-cont">
            <div class="blog-heading">
             {title}
            </div>
            {/* <div class="blog-desc-card">
             {summary}
            </div> */}
            <Tag color="cyan">{category}</Tag>
            </div>
           
            
            </Link>
          </div>
        
    )
}

export default BlogCard;