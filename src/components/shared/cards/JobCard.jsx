import React from 'react';
import { Link } from 'react-router-dom';


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
                  <span><Link to="/apply" class="explore-more-services">Apply Now</Link></span>
                </div>
              </div>
            </div>
        </>
    );
}

export default JobCard;