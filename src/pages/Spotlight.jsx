import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CaseStudyCollectionCard from '../components/shared/cards/caseStudyCollectionCard';
import useScrollToTop from '../hooks/useScrollToTop';
import { Spin } from 'antd';
const Spotlight = () => {
    const [caseStudies, setCaseStudies] = useState([]);
    const [loading, setLoading] = useState(true);

    useScrollToTop();

    useEffect(() => {
        const fetchCaseStudies = async () => {
            try {
                const response = await axios.get('http://localhost:3000/cases'); // Your API endpoint
                setCaseStudies(response.data);
            } catch (error) {
                console.error('Error fetching case studies:', error);
            }
            // Introduce a delay before hiding the spinner
            setTimeout(() => setLoading(false), 2000); // 2000ms = 2 seconds
        };

        fetchCaseStudies();
    }, []);

    if (loading) {
        return <div className="spinner-container"><Spin size="large" /></div>;
    }


    return (
        <>
            <article className="case-study-row">
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
