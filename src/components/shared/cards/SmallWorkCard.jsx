import React from 'react';
import { Link } from 'react-router-dom';

const SmallWorkCard = ({caseStudy}) => {

    
    return(
        <>
        <div class="work-card">
              <div class="work-card-image-container">
                <img
                  src={caseStudy.imageone}
                  alt=""
                  width="250"
                  height="250"
                />
              </div>
              <div class="logo-work-card-container">
                <img
                  src={caseStudy.imagetwo}
                  alt=""
                  width="60"
                  height="60"
                />
              </div>
              <h3 class="work-card-heading">{caseStudy.title}</h3>
              <p class="work-card-desc">
              {caseStudy.summary}
              </p>
              <div class="right-button-work-small">
                <span>
                <Link className='work-card-button-link' to={`/viewcasestudy/${caseStudy.id}`}>Explore More</Link></span>
              </div>
            </div>
        </>
    );
}

export default SmallWorkCard;