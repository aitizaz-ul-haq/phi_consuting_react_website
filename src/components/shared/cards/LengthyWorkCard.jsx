import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';


const LengthyWorkCard = ({caseStudy}) => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('card-animation');
            }
        });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.insights-bundle-our-work');
    cards.forEach(card => observer.observe(card));

    return () => cards.forEach(card => observer.unobserve(card));
}, []);
    return(
        <>
            <div class="insights-bundle-our-work">
            <div class="full-section-insights-our-work">
              <div class="overlay-container five-bui-consul">
                <div class="overlay"></div>
                <div class="content">
                  <div class="comp-logo-square-container">
                    <img
                      src={caseStudy.imagetwo}
                      alt=""
                      width="100"
                      height="100"
                    />
                    <h2 class="overlay-heading-our-work">{caseStudy.title}</h2>
                    <p class="overlay-desc-our-work">
                    {caseStudy.summary}
                    </p>
                    <div class="left-button-work-small our-work-bubbles">
                   <span> <Link className='work-card-button-link' to={`/viewcasestudy/${caseStudy.id}`}>Explore More</Link></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    );
}

export default LengthyWorkCard;