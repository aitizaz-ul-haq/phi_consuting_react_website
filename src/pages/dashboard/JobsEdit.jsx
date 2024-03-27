import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";

const EditJob = () => {
  const [jobData, setJobData] = useState({ content: [] });
  const [redirectToJobs, setRedirectToJobs] = useState(false);
  const { jobId } = useParams();

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await axios.get(
          `https://backend.phiconsulting.org/jobs/${jobId}`
        );
        setJobData(response.data);
      } catch (error) {
        console.error("Error fetching job:", error);
        message.error("Error fetching job data");
      }
    };

    if (jobId) {
      fetchJobData();
    }
  }, [jobId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Map through the content and create an updated structure
    const updatedContent = jobData.content.map((item, index) => ({
      type: item.type,
      text: formData.get(`content-text-${index}`),
    }));

    // Create the updated job data object
    const updatedJobData = {
      title: formData.get("title"),
      role: formData.get("role"),
      content: updatedContent,
    };

    try {
      await axios.put(
        `https://backend.phiconsulting.org/jobs/${jobId}`,
        updatedJobData
      );
      message.success("Job updated successfully");
      setRedirectToJobs(true);
    } catch (error) {
      console.error("Error updating job:", error);
      message.error("An error occurred while updating the job");
    }
  };

  if (redirectToJobs) {
    return <Navigate to="/dashboard/Jobs" />;
  }

  return (
    <div className="form-container-dash">
      <form
        className="editform"
        onSubmit={handleSubmit}
        style={{ maxWidth: 600 }}
      >
        <div>
          <label>Title</label>
          <input
            name="title"
            className="title-field"
            defaultValue={jobData.title}
          />
        </div>
        <div>
          <label>Role</label>
          <textarea
            name="role"
            className="textarea-field"
            defaultValue={jobData.role}
          />
        </div>
        {jobData.content.map((item, index) => (
          <div key={index}>
            <label>{item.type}</label>
            <textarea name={`content-text-${index}`} defaultValue={item.text} />
          </div>
        ))}
        <button type="submit">Update Job</button>
      </form>
    </div>
  );
};

export default EditJob;
