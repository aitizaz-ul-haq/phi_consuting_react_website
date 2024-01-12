import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import caseStudies from '../../data/caseStudies.json';

import useScrollToTop from '../../hooks/useScrollToTop';

const CaseStudyView = () => {
    const { id } = useParams();
    const caseStudy = caseStudies.find(study => study.id === parseInt(id));

    useScrollToTop();
    return(
        <>
<article className="study-container">
    <section className="study-material">
        <div className="study-info-container">
            {/* <div className="study-title">
                <img src={caseStudy.imagetwo} alt="" className="study-read-logo" />
                <h3 className='case-Study-Heading-reader'>{caseStudy.title}</h3>
                <p className="caese-styudy-description-reader">{caseStudy.summary}</p>
            </div> */}
            <div className="reader-casestudy-new-container">
            <div className="reader-casestudy-logo">
                    <img src={caseStudy.imagetwo} alt="" className='casestudyreaderimg' />
            </div> 
            <div className="reader-casestudy-heading">
            {caseStudy.title}
            </div>
            <div className="reader-casestudy-desc-new">
            {caseStudy.summary}
            </div>
            </div>


        </div>
        <div className="study-media-container">
            <img src={caseStudy.imageone} alt="" className='product-study-img'/>
        </div>       
    </section>
    <section className="study-details-container">
    <div className="study-content">
    {caseStudy.content.map((item, index) => (
                item.type === 'paragraph' ? 
                    <p key={index} className="study-details">{item.text} </p> : <h3 key={index} className='study-heading'>{item.text}</h3>
                    
            ))}
            <div class="case-more-button-container">
                <div class="case-button-study-page-back">
                <Link to="/" className='read-study-button-back'
                  > &larr; Back</Link
                >
               </div>
                <div class="case-button-study-page"> <Link to="/spotlight" className='read-study-button-back'
                  > View More Case Studies &rarr;</Link
                > </div>
              </div>
        </div>
    </section>
</article>

        </>
    )
}

export default CaseStudyView;