import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CaseStudyCollectionCard from '../components/shared/cards/caseStudyCollectionCard';
import useScrollToTop from '../hooks/useScrollToTop';

const Spotlight = () => {
    const [caseStudies, setCaseStudies] = useState([]);

    useScrollToTop();

    useEffect(() => {
        const fetchCaseStudies = async () => {
            try {
                const response = await axios.get('http://localhost:3000/cases'); // Adjust this URL to your API endpoint
                setCaseStudies(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching case studies:', error);
                // Optionally, handle the error, e.g., show a message to the user
            }
        };

        fetchCaseStudies();
    }, []);

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
