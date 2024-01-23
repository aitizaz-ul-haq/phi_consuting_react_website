import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import caseStudies from '../../data/caseStudies.json';
import eye from "../../assets/img/eye.png"
import useScrollToTop from '../../hooks/useScrollToTop';
import { Tooltip } from 'antd';
import top from "../../assets/img/top Arrow.png"

const CaseStudyView = () => {
    const { id } = useParams();
    const caseStudy = caseStudies.find(study => study.id === parseInt(id));
    const headingSectionRef = useRef(null);
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode(!darkMode);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
  
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-casestudy');
                    entry.target.classList.remove('fade-out-casestudy');
                } else {
                    entry.target.classList.add('fade-out-casestudy');
                }
            });
        }, { threshold: 0.5 });

        if (headingSectionRef.current) {
            observer.observe(headingSectionRef.current);
        }

        return () => {
            if (headingSectionRef.current) {
                observer.unobserve(headingSectionRef.current);
            }
        };
    }, []);
    useScrollToTop();
    return(
        <>
       <div className={`overlayscreen ${darkMode ? 'activate' : ''}`}></div>
        <div className="left-section-control"></div>
            <div className="right-section-control">
            <Tooltip placement="leftTop" title="toggle eye protection">
            <button onClick={toggleDarkMode}> <img src={eye} alt="eye icon" width={42} height={42}/></button> 
            </Tooltip>
                 {/* Back to Top Button */}
                 <Tooltip placement="leftTop" title="back to top">
    <button className="back-to-top" onClick={scrollToTop}>
    <img src={top} alt="eye icon" width={42} height={42}/>
    </button>
    </Tooltip>
            </div>
<article className="study-container">
    <section className="study-material" ref={headingSectionRef}>
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
                <div class="case-button-study-page"> <Link to="/casestudies" className='read-study-button-back'
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