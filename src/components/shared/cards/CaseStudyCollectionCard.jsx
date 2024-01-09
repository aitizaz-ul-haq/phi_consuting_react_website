import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudyCollectionCard = ({caseStudy}) => {
    return(
        <>
         <div className="case-study-card-collection">
                    <div className="img-container">
                        <img src={caseStudy.imageone} alt="" className='collection-card-img'/>
                    </div>
                    <div className="study-collection-title">
                        <h3 className='study-collection-title'>{caseStudy.title}</h3>
                    </div>
                    <div className="study-collection-desc">
                        <p className='study-collection-description'>{caseStudy.summary}</p>
                    </div>
                    <div class="right-button-work-small-collection">
                <span>
                <Link className='work-card-button-link' to={`/viewcasestudy/${caseStudy.id}`}>Read More</Link></span>
              </div>
                </div>
        </>
    )
}

export default CaseStudyCollectionCard;