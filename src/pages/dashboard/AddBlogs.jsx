// import React,{useState, useEffect} from 'react';
// import { Button, Card, Form, Input, Space, Select } from 'antd';
// import { CloseOutlined } from '@ant-design/icons';
// import axios from 'axios';
// import moment from 'moment';
// import { message } from 'antd';
// import { Navigate } from 'react-router-dom';
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { EditorState } from 'draft-js';

// const { Option } = Select;
// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 16 },
// };

// const tailLayout = {
//   wrapperCol: { offset: 8, span: 16 },
// };

// const AddBlog = () => {
//   const [form] = Form.useForm();
//   const [redirectToBlogs, setRedirectToBlogs] = useState(false);
//   const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

//   const onFinish = async (values) => {
//     const formattedData = {
//       title: values.title,
//       summary: values.summary,
//       companyName: values.companyName,
//       DatePosted: values.DatePosted,
//       ReadTime: values.ReadTime,
//       content: values.items.map(item => ({
//         type: item.type,
//         text: item.text
//       }))
//     };
  
//     try {
//       const response = await axios.post('https://prickle-balanced-archaeopteryx.glitch.me/blogs', formattedData);
//       console.log('Blog created successfully:', response.data);
//       message.success('Blog edited successfully');
//       setRedirectToBlogs(true); // This triggers redirection
//     } catch (error) {
//       console.error('Error creating blog:', error);
//       message.error('An error occurred while updating the blog');
//     }
//   };

//     // Correctly handle editor state changes
//     const onEditorStateChange = (newState) => {
//       setEditorState(newState);
//     };
//   const onReset = () => {
//     form.resetFields();
//   };

//   if (redirectToBlogs) {
//     return <Navigate to="/dashboard/Blogs" />;
// }

//   return (
//     <div className="form-container-dash">
//       <Editor
//         editorState={editorState}
//         toolbarClassName="toolbarClassName"
//         wrapperClassName="wrapperClassName"
//         editorClassName="editorClassName"
//         onEditorStateChange={onEditorStateChange}
//         toolbarStyle={{ backgroundColor: 'white', borderBottom: 'none' }}
//   wrapperStyle={{ justifyContent: 'center', border: '1px solid #F1F1F1' }}
//   editorStyle={{ minHeight: '200px', padding: '10px', border: '1px solid #F1F1F1' }}
//       />
//        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} style={{ maxWidth: 600 }}>
//         <Form.Item name="title" label="Title" rules={[{ required: true }]}>
//           <Input />
//         </Form.Item>
//         <Form.Item name="summary" label="Summary" rules={[{ required: true }]}>
//           <Input.TextArea />
//         </Form.Item>
//         <Form.Item name="companyName" label="Company Name" rules={[{ required: true }]}>
//           <Select placeholder="Select a company">
//             <Option value="Atob">Atob</Option>
//             <Option value="pallet">pallet</Option>
//             <Option value="truckx">truckx</Option>
//             <Option value="solar">solar</Option>
//             <Option value="bobtail">bobtail</Option>
//             <Option value="joyride">joyride</Option>
//             <Option value="mudflip">mudflip</Option>
//             <Option value="digital ocean">digital ocean</Option>
//           </Select>
//         </Form.Item>
//         <Form.Item name="DatePosted" label="Date Posted" initialValue={moment().format("DD/MM/YYYY")}>
//           <Input />
//         </Form.Item>
//         <Form.Item name="ReadTime" label="Read Time" rules={[{ required: true }]}>
//           <Select placeholder="Select read time">
//             <Option value="2 min">2 min</Option>
//             <Option value="3 min">3 min</Option>
//             <Option value="4 min">4 min</Option>
//             <Option value="5 min">5 min</Option>
//             <Option value="6 min">6 min</Option>
//             <Option value="7 min">7 min</Option>
//             <Option value="8 min">8 min</Option>
//           </Select>
//         </Form.Item>
//         {/* Dynamic Form List */}
//         <Form.List name="items">
//           {(fields, { add, remove }) => (
//             <div style={{ display: 'flex', rowGap: 16, flexDirection: 'column' }}>
//               {fields.map((field, index) => (
//                 <Card size="small" title={`Content Section ${index + 1}`} key={field.key} extra={
//                   <CloseOutlined onClick={() => remove(field.name)} />
//                 }>
//                   <Form.Item label="Type" name={[field.name, 'type']} rules={[{ required: true }]}>
//                     <Select placeholder="Select type">
//                       <Option value="subheading">Subheading</Option>
//                       <Option value="paragraph">Paragraph</Option>
//                     </Select>
//                   </Form.Item>
//                   <Form.Item label="Text" name={[field.name, 'text']} rules={[{ required: true }]}>
//                     <Input.TextArea placeholder="Text" />
//                   </Form.Item>
//                 </Card>
//               ))}
//               <Button type="dashed" onClick={() => add()} block>+ Add Content Section</Button>
//             </div>
//           )}
//         </Form.List>

//         <Form.Item {...tailLayout}>
//           <Space>
//             <Button type="primary" htmlType="submit">Submit</Button>
//             <Button htmlType="button" onClick={onReset}>Reset</Button>
//           </Space>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default AddBlog;


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
    const [companyName, setCompanyName] = useState('');
    const [readTime, setReadTime] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [summary, setSummary] = useState('');
    const [urlName, setUrlName] = useState('');
    const [dateCreated, setDateCreated] = useState(moment());
    const [redirectToBlogs, setRedirectToBlogs] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            title,
            blogContent,
            companyName,
            readTime,
            dateCreated: dateCreated.format("YYYY-MM-DD"),
            imageUrl,
            summary,
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
