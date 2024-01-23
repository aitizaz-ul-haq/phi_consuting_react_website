import React, { useEffect, useRef } from 'react';

import gtmicon from "../../../assets/img/solutions icons/GTM.png";
import fin from "../../../assets/img/solutions icons/fin.png";
import invrelations from "../../../assets//img/solutions icons/Investor Relations.png"
import hricon from "../../../assets/img/white_icons/human-resources.png";
const IndustryServicesSection = () => {

    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            {
                threshold: 0.1 // Adjust this value based on when you want the fade effect to trigger
            }
        );

        const elements = ref.current.children;
        for (let el of elements) {
            observer.observe(el);
        }

        return () => {
            for (let el of elements) {
                observer.unobserve(el);
            }
        };
    }, []);
    return (
        <>
       <article className="services-industry-container">
        <h2 className='services-industry-heading'>Your Growth Blueprint</h2>
        <div className="service-cariers" ref={ref}>
            <div className="service-nugget">
                <div className="icon-carry">
                    <img src={gtmicon} alt="" className="icon-services-industry" />
                </div>
                <div className="services-industry-title">
                    GTM Advisory
                </div>
                <div className="services-industry-description">
                Scale your sales operations with precision and excellence, targeting the right customers and optimizing sales cycles.
                </div>
            </div>

            <div className="service-nugget">
                <div className="icon-carry">
                    <img src={fin} alt="" className="icon-services-industry" />
                </div>
                <div className="services-industry-title">
                    Financial Consulting
                </div>
                <div className="services-industry-description">
                Drive profitability and fiscal responsibility through strategic financial guidance.
                </div>
            </div>

            <div className="service-nugget">
                <div className="icon-carry">
                    <img src={invrelations} alt="" className="icon-services-industry" />
                </div>
                <div className="services-industry-title">
                    Investor Relations
                </div>
                <div className="services-industry-description">
                Navigate challenges, optimize strategies, and achieve sustainable growth with our proven expertise.
                </div>
            </div>

            <div className="service-nugget">
                <div className="icon-carry">
                    <img src={hricon} alt="" className="icon-services-industry" />
                </div>
                <div className="services-industry-title">
                Hr & Recruitment
                </div>
                <div className="services-industry-description">
                Build a dynamic and skilled workforce with our specialized HR solutions.
                </div>
            </div>
        </div>
       </article>
        </>
    )
}

export default IndustryServicesSection;