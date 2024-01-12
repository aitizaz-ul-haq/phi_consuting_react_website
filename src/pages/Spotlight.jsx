import React from 'react';
import expimg from "../assets/img/bizdev.png";
import { Link } from 'react-router-dom';
import CaseStudyCollectionCard from '../components/shared/cards/caseStudyCollectionCard';
import caseStudies from "../../src/data/caseStudies.json";

import useScrollToTop from '../hooks/useScrollToTop';
const Spotlight = () => {

    useScrollToTop();
    return(
        <>
        <article className="case-study-row">
            <section className="case-study-container-view">
            {caseStudies.map(study => (
                <CaseStudyCollectionCard key={study.id} caseStudy={study} />
            ))}
                
            </section>
        </article>
        </>
    )
} 

export default Spotlight;