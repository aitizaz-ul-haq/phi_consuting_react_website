import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { message } from 'antd';
import { Navigate } from 'react-router-dom';


const EditBlog = () => {
    const [blogData, setBlogData] = useState({ content: [] });
    const [redirectToBlogs, setRedirectToBlogs] = useState(false);
    const { blogId } = useParams();
  
    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await axios.get(`https://prickle-balanced-archaeopteryx.glitch.me/blogs/${blogId}`);
                setBlogData(response.data);
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        };

        if (blogId) {
            fetchBlogData();
        }
    }, [blogId]);

   const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Map through the content and create an updated structure
    const updatedContent = blogData.content.map((item, index) => ({
        type: item.type,
        text: formData.get(`content-text-${index}`)
    }));

    // Create the updated blog data object
    const updatedBlogData = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        imageone: formData.get('imageone'),
        DatePosted: formData.get('DatePosted'),
        ReadTime: formData.get('ReadTime'),
        content: updatedContent
    };

    try {
        // Make a PUT request to update the blog
        const response = await axios.put(`https://prickle-balanced-archaeopteryx.glitch.me/blogs/${blogId}`, updatedBlogData);
        console.log('Blog updated successfully:', response.data);
        message.success('Blog edited successfully');
        setRedirectToBlogs(true); // This triggers redirection
    } catch (error) {
        console.error('Error updating blog:', error);
        message.error('An error occurred while updating the blog');
    }
};

if (redirectToBlogs) {
    return <Navigate to="/dashboard/Blogs" />;
}

    return (
        <div className="form-container-dash">
            <form onSubmit={handleSubmit} className='editform' style={{ maxWidth: 600 }}>
                <div>
                    <label>Title</label>
                    <input name="title" className='title-field' defaultValue={blogData.title} />
                </div>
                <div>
                    <label>Summary</label>
                    <textarea name="summary" className='textarea-field' defaultValue={blogData.summary} />
                </div>
                {/* <div>
                    <label>Image URL</label>
                    <input name="imageone" className='title-field' defaultValue={blogData.imageone} />
                </div> */}
                <div>
                    <label>Date Posted</label>
                    <input name="DatePosted" className='drop-field' defaultValue={blogData.DatePosted} />
                </div>
                {/* <div>
                    <label>Read Time</label>
                    <input name="ReadTime" className='drop-field' defaultValue={blogData.ReadTime} />
                </div> */}
                {blogData.content.map((item, index) => (
                    <div key={index}>
                        <label>{item.type}</label>
                        <textarea name={`content-text-${index}`} defaultValue={item.text} />
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EditBlog;
