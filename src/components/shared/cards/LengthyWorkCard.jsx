import React from 'react';
import { Link } from 'react-router-dom';


const LengthyWorkCard = ({caseStudy}) => {
    return(
        <>
            <div class="insights-bundle-our-work">
            <div class="full-section-insights-our-work">
              <div class="overlay-container five-bui-consul">
                <div class="overlay"></div>
                <div class="content">
                  <div class="comp-logo-square-container">
                    <img
                      src={caseStudy.imagetwo}
                      alt=""
                      width="100"
                      height="100"
                    />
                    <h2 class="overlay-heading-our-work">{caseStudy.title}</h2>
                    <p class="overlay-desc-our-work">
                    {caseStudy.summary}
                    </p>
                    <div class="left-button-work-small our-work-bubbles">
                   <span> <Link className='work-card-button-link' to={`/viewcasestudy/${caseStudy.id}`}>Explore More</Link></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    );
}

export default LengthyWorkCard;