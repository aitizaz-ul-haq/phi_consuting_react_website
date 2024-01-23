import React, { useEffect, useRef } from 'react';

const IndustrySpecialities = () => {
    const sectionsRef = useRef([]);

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
                rootMargin: '0px',
                threshold: 0.3
            }
        );

        const elements = sectionsRef.current;
        elements.forEach(el => observer.observe(el));

        return () => elements.forEach(el => observer.unobserve(el));
    }, []);

    const addToRefs = el => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
        }
    };

    return(
        <>
       <article className="industry-para-container">
        <section className="industry-para-collection" ref={addToRefs}>
        <div className="para-title-industry">
        <h2 className='title-special'>What is <span className='bluer'>IOT Consulting</span>?</h2>
        </div>
        <div className="para-desc-industry">
        IoT consulting services at Phi Consulting aim to empower companies by providing a deep understanding of IoT technologies, exploring relevant use cases, and crafting robust implementation strategies. This approach results in reduced operational costs, improved work environments, streamlined business processes, and enhanced products and services.
        </div>
        </section>
       

        {/* <section className="industry-para-collection" ref={addToRefs}>
        <div className="para-title-industry">
        <h2 className='title-special'>Tailored<span className='bluer'> Solutions</span>  for Your Unique Journey</h2>
        </div>
        <div className="para-desc-industry">
        Recognizing the distinctive challenges faced by startup leaders, our custom consulting services are designed to cater to specific needs. Phi Consulting ensures your startup scales efficiently while maintaining cost-effectiveness.
        </div>
        </section> */}

        <section className="industry-para-collection" ref={addToRefs}>
        <div className="para-title-industry">
        <h2 className='title-special'>Revolutionize Your <span className='bluer'>Go-To-Market</span> Strategy</h2>
        </div>
        <div className="para-desc-industry">
        In the dynamic world of IoT and tech startups, a well-crafted go-to-market (GTM) strategy is not just advantageous but essential. Our seasoned experts develop custom GTM strategies aligned with your vision, enabling you to not only enter the market but also make a lasting impact.
        </div>
        </section>

        <section className="industry-para-collection" ref={addToRefs}>
        <div className="para-title-industry">
        <h2 className='title-special'><span className='bluer'>Attract, Retain,</span> and <span className='bluer'>Nurture</span> the Best Talent</h2>
        </div>
        <div className="para-desc-industry">
        Your team is the backbone of success. Phi Consulting offers comprehensive HR and recruitment services, assisting you in building a talented workforce aligned with your startup's culture and objectives. From talent acquisition to development, we ensure your human capital is your strongest asset.
        </div>
        </section>

        <section className="industry-para-collection" ref={addToRefs}>
        <div className="para-title-industry">
        <h2 className='title-special'>Navigate <span className='bluer'>Financial Complexities</span> with Ease</h2>
        </div>
        <div className="para-desc-industry">
        Managing finances in a startup environment can be challenging. Our IoT consulting services provide clarity and direction, helping you make informed decisions that secure your company's financial health and fuel its growth.
        </div>
        </section>

        <section className="industry-para-collection" ref={addToRefs}>
        <div className="para-title-industry">
        <h2 className='title-special'><span className='bluer'>Building Bridges</span> Between You and Your Investors</h2>
        </div>
        <div className="para-desc-industry">
        Strong investor relations are vital for startup growth. Our team helps you communicate your vision and progress effectively, fostering trust and understanding with investors. This ensures not only continued financial support but also strategic partnerships that propel your IoT startup forward.
        </div>
        </section>
       </article>
        </>
    );
}

export default IndustrySpecialities;