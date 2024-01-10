import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudyMacroComps = ({ id, title, summary, logo, image, isRight }) => {
    return(
        <>
        <div class="work-case-study-section">
            {isRight ? (
                <>
                   
            <div class="section-right">
              <img
                src={image}
                alt="case study picture"
                class="casestudy-img"
              />
            </div>
                   
                    <div class="section-left">
              <div class="company-icon">
                <img
                  src={logo}
                  alt="company icon"
                  width="100"
                  height="100"
                />
              </div>
              <div class="study-title">
                <h3 class="macro-title">
                {title}
                </h3>
              </div>
              <div class="study-macro-desc-main">
              {summary}
              </div>
              <div class="case-button-container">
                <div class="case-button">
                    <Link className='macro-button-link-remove' to={`/viewcasestudy/${id}`}> View Case Study</Link>
                   </div>
              </div>
            </div>

                    
                </>
            ) : (
                <>
                    
                     <div class="section-left">
              <div class="company-icon">
                <img
                  src={logo}
                  alt="company icon"
                  width="100"
                  height="100"
                />
              </div>
              <div class="study-title">
                <h3 class="macro-title">
                {title}
                </h3>
              </div>
              <div class="study-macro-desc-main">
              {summary}
              </div>
              <div class="case-button-container">
                <div class="case-button">
                    <Link className='macro-button-link-remove' to={`/viewcasestudy/${id}`}> View Case Study</Link>
                   </div>
              </div>
            </div>

         <div class="section-right">
              <img
                src={image}
                alt="case study picture"
                class="casestudy-img"
              />
            </div>


                </>
            )}
        </div>


        </>
    )
}

export default CaseStudyMacroComps;