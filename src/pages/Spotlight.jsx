import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CaseStudyCollectionCard from '../components/shared/cards/caseStudyCollectionCard';
import useScrollToTop from '../hooks/useScrollToTop';
import { Spin } from 'antd';
import { Helmet } from 'react-helmet';
import casestudybluebacl from "../assets/img/wrappers/casestudyblueback.jpg";

const Spotlight = () => {
    const [caseStudies, setCaseStudies] = useState([]);
    const [loading, setLoading] = useState(true);

    useScrollToTop();

    useEffect(() => {
        const fetchCaseStudies = async () => {
            try {
                const response = await axios.get('https://prickle-balanced-archaeopteryx.glitch.me/cases');
                setCaseStudies(response.data);
            } catch (error) {
                console.error('Error fetching case studies:', error);
            }
            setTimeout(() => setLoading(false), 2000);
        };

        fetchCaseStudies();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const caseStudyRow = document.querySelector('.case-study-row');
            if (caseStudyRow) {
                const speed = 0.5; 
                const yOffset = window.pageYOffset;
                caseStudyRow.style.backgroundPosition = `center ${yOffset * speed}px`;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loading]); 

    if (loading) {
        return <div className="spinner-container"><Spin size="large" /></div>;
    }

    return (
        <>
        <Helmet>
        <title>Success Stories: Phi Consulting Case Studies</title>
        <meta name="description" content="Explore Phi Consulting's transformative impact through detailed case studies. Dive into real-world success examples with ATOB Financials, TruckX, Digital Ocean, and more." />
        </Helmet>
         <Helmet>
             <link rel="canonical" href="https://phiconsulting.org/case-studies" />
        </Helmet>
            <article className="case-study-row" style={{ backgroundImage: `url(${casestudybluebacl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <section className="case-study-container-view">
                    {caseStudies.map(study => (
                        <CaseStudyCollectionCard key={study._id} caseStudy={study} />
                    ))}
                </section>
            </article>
        </>
    );
};

export default Spotlight;
