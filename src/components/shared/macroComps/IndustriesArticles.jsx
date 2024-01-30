import React, { useEffect, useRef } from 'react';

const IndustriesArticles = ({ data }) => {
    const diagonalDivRef = useRef(null);
    const sectionsRef = useRef([]);
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('fill-effect');
              }
            });
          },
          { threshold: 0.5 }
        );

        sectionsRef.current.forEach(el => observer.observe(el));

        return () => {
          sectionsRef.current.forEach(el => observer.unobserve(el));
        };
    }, []);

    const addToRefs = el => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
        }
      };

    if (!data) {
        return <div>Loading...</div>;
      }

    // Check if data is not null or undefined
    if (!Array.isArray(data)) {
        console.error('Data is not an array:', data);
        return <div>Error: Data is not in the correct format.</div>;
      }

    return (
      <>
        
        <article className="industry-para-container">
          <section className="industry-para-collection">
          {data.map((item, index) => (
            <>
            <div className="para-title-industry" key={index}>
              <h2 className='title-special'>{item.heading} <span className='bluer'>{item.highlight}</span></h2>
            </div>
            <div className="para-desc-industry">
              {item.paragraph}
            </div>
            </>
             ))}
          </section>
        </article>
     
      </>
    );
};

export default IndustriesArticles;
