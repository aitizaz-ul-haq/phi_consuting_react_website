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
    const [category, setCategory] = useState('');
    const [dateCreated, setDateCreated] = useState(moment()); // Initialized with current date
    const [redirectToBlogs, setRedirectToBlogs] = useState(false);
    const { blogId } = useParams();

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await axios.get(`https://prickle-balanced-archaeopteryx.glitch.me/blogs/${blogId}`);
                const blog = response.data;
            setTitle(blog.title);
            setCategory(blog.category);
            setBlogContent(blog.blogContent);
            // setCompanyName(blog.companyName);
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
            readTime,
            dateCreated: dateCreated.format("YYYY-MM-DD"),
            imageUrl,
            category,
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
                <label>Category:</label><br />
                <Select value={category} onChange={setCategory} style={{ width: '100%' }}>
                    <Option value="GTM Strategy">GTM Strategy</Option>
                    <Option value="Customer Experience">Customer Experience</Option>
                </Select>
            </div>
            {/* <div style={{ marginBottom: '20px' }}>
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
            </div> */}
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
