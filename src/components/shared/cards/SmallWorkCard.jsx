import React from 'react';
import { Link } from 'react-router-dom';

const SmallWorkCard = ({caseStudy, isVisible, id, image, logo}) => {

  const cardClassName = `work-card ${isVisible ? 'card-animate' : ''}`;    
    return(
        <>
        <div className={cardClassName}>
              <div class="work-card-image-container">
                <img
                  src={image}
                  alt=""
                  width="250"
                  height="250"
                />
              </div>
              <div class="logo-work-card-container">
                <img
                  src={logo}
                  alt=""
                  width="60"
                  height="60"
                />
              </div>
              <h3 class="work-card-heading">{caseStudy.title}</h3>
              {/* <p class="work-card-desc">
              {caseStudy.summary}
              </p> */}
              <div class="right-button-work-small">
                <span>
                <Link className='work-card-button-link' to={`/viewcasestudy/${id}`}>Explore More</Link></span>
              </div>
            </div>
        </>
    );
}

export default SmallWorkCard;