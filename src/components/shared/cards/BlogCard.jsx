import React from 'react';
import { Link } from 'react-router-dom';
import blogpic from "../../../assets/img/b2b.webp";

const BlogCard = ({blogs}) => {
    return(
        
        <div class="blog-card-one">
            <Link className='blog-phi-home' to={`/viewblog/${blogs._id}`}>
            <div class="blog-image">
              <img
                 src={blogpic}
                alt=""
                width="455"
                class="blog-image-home"
              />
            </div>
            <div class="date-and-read-time">
              <p class="date">{blogs.DatePosted}</p>
              <p class="read-time">{blogs.ReadTime}</p>
            </div>
            <div class="blog-heading">
             {blogs.title}
            </div>
            <div class="blog-desc-card">
             {blogs.summary}
            </div>
            </Link>
          </div>
         
    )
}

export default BlogCard;