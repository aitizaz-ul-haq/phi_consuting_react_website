import React from 'react'


const JobCard = ({job}) => {
    return (
        <>
        <div class="job-card">
              <div class="job-info">
                <div class="job-heading">{job.title}</div>
                <div class="job-desc">
                  {job.role}
                </div>
              </div>
              <div class="apply-button-container">
                <div class="right-button">
                  <span>Apply Now</span>
                </div>
              </div>
            </div>
        </>
    );
}

export default JobCard;