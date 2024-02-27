import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';

import atobsquare from "../../../assets/img/api_images/AToB-square.webp";
import bobsquare from "../../../assets/img/api_images/bob.webp";
import dosquare from "../../../assets/img/api_images/digitalocean-square.webp";
import joysquare from "../../../assets/img/api_images/joybox.webp";
import solarsquare from "../../../assets/img/api_images/Solarbox.webp";
import palletsquare from "../../../assets/img/api_images/palletbox.webp";
import truckxsquare from "../../../assets/img/api_images/truck-square.webp";


const LengthyWorkCard = ({caseStudy}) => {

  const handleClick = () => {
    localStorage.setItem('valId', caseStudy._id);
  };

  const imageUrl = caseStudy.imageone.includes('Atob') ? atobsquare : caseStudy.imageone.includes('truckx') ? truckxsquare : caseStudy.imageone.includes('pallet') ? palletsquare : caseStudy.imageone.includes('solar') ? solarsquare : caseStudy.imageone.includes('bobtail') ? bobsquare : caseStudy.imageone.includes('joyride') ? joysquare : caseStudy.imageone.includes('digitalocean') ? dosquare : caseStudy.imageone;

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
              <div class="overlay-container">
                {/* <div class="overlay"></div> */}
                <div class="content">
                  <div class="comp-logo-square-container">
                    <img
                      src={imageUrl}
                      alt=""
                      width="100"
                      height="100"
                    />
                    <h2 class="overlay-heading-our-work">{caseStudy.title}</h2>
                    <p class="overlay-desc-our-work">
                    {caseStudy.summary}
                    </p>
                    <div class="left-button-work-small our-work-bubbles">
                   <span> <Link className='work-card-button-link' onClick={handleClick} to={`/casestudy/${caseStudy.imageone}`}>Explore More</Link></span>
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