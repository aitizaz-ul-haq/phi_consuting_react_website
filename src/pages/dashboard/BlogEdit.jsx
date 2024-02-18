// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { message } from 'antd';
// import { Navigate } from 'react-router-dom';


// const EditBlog = () => {
//     const [blogData, setBlogData] = useState({ content: [] });
//     const [redirectToBlogs, setRedirectToBlogs] = useState(false);
//     const { blogId } = useParams();
  
//     useEffect(() => {
//         const fetchBlogData = async () => {
//             try {
//                 const response = await axios.get(`https://prickle-balanced-archaeopteryx.glitch.me/blogs/${blogId}`);
//                 setBlogData(response.data);
//             } catch (error) {
//                 console.error('Error fetching blog:', error);
//             }
//         };

//         if (blogId) {
//             fetchBlogData();
//         }
//     }, [blogId]);

//    const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);

//     // Map through the content and create an updated structure
//     const updatedContent = blogData.content.map((item, index) => ({
//         type: item.type,
//         text: formData.get(`content-text-${index}`)
//     }));

//     // Create the updated blog data object
//     const updatedBlogData = {
//         title: formData.get('title'),
//         summary: formData.get('summary'),
//         imageone: formData.get('imageone'),
//         DatePosted: formData.get('DatePosted'),
//         ReadTime: formData.get('ReadTime'),
//         content: updatedContent
//     };

//     try {
//         // Make a PUT request to update the blog
//         const response = await axios.put(`https://prickle-balanced-archaeopteryx.glitch.me/blogs/${blogId}`, updatedBlogData);
//         console.log('Blog updated successfully:', response.data);
//         message.success('Blog edited successfully');
//         setRedirectToBlogs(true); // This triggers redirection
//     } catch (error) {
//         console.error('Error updating blog:', error);
//         message.error('An error occurred while updating the blog');
//     }
// };

// if (redirectToBlogs) {
//     return <Navigate to="/dashboard/Blogs" />;
// }

//     return (
//         <div className="form-container-dash">
//             <form onSubmit={handleSubmit} className='editform' style={{ maxWidth: 600 }}>
//                 <div>
//                     <label>Title</label>
//                     <input name="title" className='title-field' defaultValue={blogData.title} />
//                 </div>
//                 <div>
//                     <label>Summary</label>
//                     <textarea name="summary" className='textarea-field' defaultValue={blogData.summary} />
//                 </div>
//                 {/* <div>
//                     <label>Image URL</label>
//                     <input name="imageone" className='title-field' defaultValue={blogData.imageone} />
//                 </div> */}
//                 <div>
//                     <label>Date Posted</label>
//                     <input name="DatePosted" className='drop-field' defaultValue={blogData.DatePosted} />
//                 </div>
//                 {/* <div>
//                     <label>Read Time</label>
//                     <input name="ReadTime" className='drop-field' defaultValue={blogData.ReadTime} />
//                 </div> */}
//                 {blogData.content.map((item, index) => (
//                     <div key={index}>
//                         <label>{item.type}</label>
//                         <textarea name={`content-text-${index}`} defaultValue={item.text} />
//                     </div>
//                 ))}
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default EditBlog;


import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import axios from 'axios';
import { message, Input, Button, Select, DatePicker } from 'antd';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import moment from 'moment'; // Make sure you have imported moment

const { Option } = Select;

const EditBlog = () => {
    const [title, setTitle] = useState('');
    const [blogContent, setBlogContent] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [readTime, setReadTime] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [summary, setSummary] = useState('');
    const [dateCreated, setDateCreated] = useState(moment()); // Initialized with current date
    const [redirectToBlogs, setRedirectToBlogs] = useState(false);
    const { blogId } = useParams();

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await axios.get(`https://prickle-balanced-archaeopteryx.glitch.me/blogs/${blogId}`);
                const blog = response.data;
            setTitle(blog.title);
            setBlogContent(blog.blogContent);
            setCompanyName(blog.companyName);
            setReadTime(blog.readTime);
            setImageUrl(blog.imageUrl); // Ensure this matches the property name returned by your API
            setSummary(blog.summary); // Ensure this matches the property name returned by your API
            setDateCreated(moment(blog.dateCreated || moment()));
            } catch (error) {
                console.error('Error fetching blog:', error);
                message.error('Error fetching blog data');
            }
        };

        fetchBlogData();
    }, [blogId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedBlogData = {
            title,
            blogContent,
            companyName,
            readTime,
            dateCreated: dateCreated.format("YYYY-MM-DD"),
            imageUrl,
            summary,
        };

        try {
            const response = await axios.put(`https://prickle-balanced-archaeopteryx.glitch.me/blogs/${blogId}`, updatedBlogData);
            console.log('Blog updated successfully:', response.data);
            message.success('Blog updated successfully');
            setRedirectToBlogs(true);
        } catch (error) {
            console.error('Error updating blog:', error);
            message.error('An error occurred while updating the blog');
        }
    };

    if (redirectToBlogs) {
        return <Navigate to="/dashboard/Blogs" />;
    }

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto' }}>
            <div style={{ marginBottom: '20px' }}>
                <label>Title:</label>
                <Input value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label>Company Name:</label>
                <Select value={companyName} onChange={value => setCompanyName(value)} style={{ width: '100%' }}>
                <Option value="Atob">Atob</Option>
                    <Option value="pallet">pallet</Option>
                    <Option value="truckx">truckx</Option>
                    <Option value="solar">solar</Option>
                    <Option value="bobtail">bobtail</Option>
                    <Option value="joyride">joyride</Option>
                    <Option value="mudflip">mudflip</Option>
                    <Option value="digital ocean">digital ocean</Option>
                </Select>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label>Date Created:</label><br />
                <DatePicker 
                    value={dateCreated}
                    onChange={setDateCreated}
                    style={{ width: '100%' }}
                />
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label>Image URL:</label>
                <Input value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label>Summary:</label>
                <Input.TextArea value={summary} onChange={e => setSummary(e.target.value)} />
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label>Read Time (minutes):</label>
                <Select value={readTime} onChange={value => setReadTime(value)} style={{ width: '100%' }}>
                <Option value="2 min">2 min</Option>
                    <Option value="3 min">3 min</Option>
                    <Option value="4 min">4 min</Option>
                    <Option value="5 min">5 min</Option>
                    <Option value="6 min">6 min</Option>
                </Select>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label>Blog Content:</label>
                <CKEditor
                    editor={ClassicEditor}
                    data={blogContent}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setBlogContent(data);
                    }}
                />
            </div>
            <Button type="primary" htmlType="submit">Update Blog</Button>
        </form>
    );
};

export default EditBlog;
