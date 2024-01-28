import React from 'react';
import { Link } from 'react-router-dom';
import atobproduct from "../../../assets/img/api_images/atob-card.png"; 
import truckxproduct from "../../../assets/img/api_images/truckx-case.png";
import palletproduct from "../../../assets/img/api_images/pallet.png";
import solarproduct from "../../../assets/img/api_images/solar_one.webp";
import bobtailproduct from "../../../assets/img/api_images/Bobtail.png";
import joyrideproduct from "../../../assets/img/api_images/joytwo.png";
import doproduct from "../../../assets/img/api_images/digitalocean-product.png";
 


const CaseStudyCollectionCard = ({ caseStudy }) => {
    const imageUrl = caseStudy.imageone.includes('Atob') ? atobproduct : caseStudy.imageone.includes('truckx') ? truckxproduct : caseStudy.imageone.includes('pallet') ? palletproduct : caseStudy.imageone.includes('solar') ? solarproduct : caseStudy.imageone.includes('bobtail') ? bobtailproduct : caseStudy.imageone.includes('joyride') ? joyrideproduct : caseStudy.imageone.includes('digital ocean') ? doproduct : caseStudy.imageone;

    return(
        <>
            <div className="case-study-card-collection">
                <div className="img-container">
                    <img src={imageUrl} alt={caseStudy.title} className='collection-card-img'/>
                </div>
                <div className="study-collection-title">
                    <h3 className='study-collection-title'>{caseStudy.title}</h3>
                </div>
                <div className="study-collection-desc">
                    <p className='study-collection-description'>{caseStudy.summary}</p>
                </div>
                <div className="right-button-work-small-collection">
                    <span>
                        <Link className='work-card-button-link' to={`/viewcasestudy/${caseStudy._id}`}>Read More</Link>
                    </span>
                </div>
            </div>
        </>
    );
};

export default CaseStudyCollectionCard;
