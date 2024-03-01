import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button, Input, Select } from 'antd';
import axios from 'axios';
import { message, DatePicker } from 'antd';
import { Navigate } from 'react-router-dom';
import moment from 'moment';

const { Option } = Select;

const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [blogContent, setBlogContent] = useState('');
    // const [companyName, setCompanyName] = useState('');
    const [readTime, setReadTime] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [summary, setSummary] = useState('');
    const [urlName, setUrlName] = useState('');
    const [category, setCategory] = useState('');
    const [dateCreated, setDateCreated] = useState(moment());
    const [redirectToBlogs, setRedirectToBlogs] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            title,
            blogContent,
            // companyName,
            readTime,
            dateCreated: dateCreated.format("YYYY-MM-DD"),
            imageUrl,
            summary,
            category,
            urlName,
        };
        console.log("Submitting form data:", formData);
       
        try {
                   const response = await axios.post('https://prickle-balanced-archaeopteryx.glitch.me/blogs', formData);
                   console.log('Blog created successfully:', response.data);
               message.success('Blog created successfully');
                   setRedirectToBlogs(true); // This triggers redirection
                } catch (error) {
                  console.error('Error creating blog:', error);
                }
    };

  if (redirectToBlogs) {
     return <Navigate to="/dashboard/Blogs" />;
     }

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '60vw', margin: 'auto' }}>
            <div style={{ marginBottom: '20px' }}>
                <label>Title:</label><br />
                <Input value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label>Url Name:</label><br />
                <Input value={urlName} onChange={e => setUrlName(e.target.value)} />
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label>Category:</label><br />
                <Select value={category} onChange={setCategory} style={{ width: '100%' }}>
                    <Option value="GTM Strategy">GTM Strategy</Option>
                    <Option value="Customer Experience">Customer Experience</Option>
                </Select>
            </div>
            {/* <div style={{ marginBottom: '20px' }}>
                <label>Company Name:</label><br />
                <Select value={companyName} onChange={setCompanyName} style={{ width: '100%' }}>
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
                <label>Read Time (minutes):</label><br />
                <Select value={readTime} onChange={setReadTime} style={{ width: '100%' }}>
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
                    config={{
                        toolbar: [
                            'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList',
                            'blockQuote', 'undo', 'redo'
                        ],
                    }}
                />
            </div>
            
            <Button type="primary" htmlType="submit">Submit</Button>
        </form>
    );
};

export default AddBlog;
