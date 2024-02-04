import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { message } from 'antd';
import { Navigate } from 'react-router-dom';


const EditBlog = () => {
    const [caseData, setCaseData] = useState({ content: [] });
    const [redirectToBlogs, setRedirectToBlogs] = useState(false);
    const { caseId } = useParams();
  
    useEffect(() => {
        const fetchCaseData = async () => {
            try {
                const response = await axios.get(`https://prickle-balanced-archaeopteryx.glitch.me/cases/${caseId}`);
                setCaseData(response.data);
            } catch (error) {
                console.error('Error fetching case:', error);
                message.error('Error fetching case data');
            }
        };

        if (caseId) {
            fetchCaseData();
        }
    }, [caseId]);

   const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Map through the content and create an updated structure
    const updatedContent = caseData.content.map((item, index) => ({
        type: item.type,
        text: formData.get(`content-text-${index}`)
    }));

    // Create the updated blog data object
    const updatedcaseData = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        imageone: formData.get('imageone'),
        DatePosted: formData.get('DatePosted'),
        ReadTime: formData.get('ReadTime'),
        content: updatedContent
    };

    try {
        // Make a PUT request to update the blog
        const response = await axios.put(`http://localhost:3000/cases/${caseId}`, updatedcaseData);
        console.log('case study updated successfully:', response.data);
        message.success('case study edited successfully');
        setRedirectToBlogs(true); // This triggers redirection
    } catch (error) {
        console.error('Error updating case study:', error);
        message.error('An error occurred while updating the blog');
    }
};

if (redirectToBlogs) {
    return <Navigate to="/dashboard/Cases" />;
}

    return (
        <div className="form-container-dash">
            <form onSubmit={handleSubmit} style={{ maxWidth: 600 }}>
                <div>
                    <label>Title</label>
                    <input name="title" defaultValue={caseData.title} />
                </div>
                <div>
                    <label>Summary</label>
                    <textarea name="summary" defaultValue={caseData.summary} />
                </div>
                <div>
                    <label>Image URL</label>
                    <input name="imageone" defaultValue={caseData.imageone} />
                </div>
                <div>
                    <label>Date Posted</label>
                    <input name="DatePosted" defaultValue={caseData.DatePosted} />
                </div>
                <div>
                    <label>Read Time</label>
                    <input name="ReadTime" defaultValue={caseData.ReadTime} />
                </div>
                {caseData.content.map((item, index) => (
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
