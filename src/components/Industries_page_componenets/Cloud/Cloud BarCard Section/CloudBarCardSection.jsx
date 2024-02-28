import React from 'react';
import cross from '../../../../assets/img/barcard-icons/close.webp';
import persons from '../../../../assets/img/barcard-icons/employee.webp';
import circular from '../../../../assets/img/barcard-icons/b2b.webp';
import stack from '../../../../assets/img/barcard-icons/coins-stack.webp';
import BarCardSection from './Cloud SubComps/BarCardSection';


const CloudBarCardSection = ({ cardDetails }) => {
    return(
        <article className="bar-card-container">
        <section className="bar-content-section">
  
          <div className="heading-of-barcard">
            <h2 className="barcard-title">
              {cardDetails.barCardHeading}
            </h2>
          </div>
  
          <div className="barcard-bar">
                     {/* No additional class for the first section */}
                    <BarCardSection icon={cross} title={cardDetails.barcarddesone} />
                    {/* "border-left-and-right" class for the second section */}
                    <BarCardSection icon={persons} title={cardDetails.barcarddestwo} additionalClass="border-left-and-right" />
                    {/* "border-right" class for the third section */}
                    <BarCardSection icon={circular} title={cardDetails.barcarddesthree} additionalClass="border-right" />
                    {/* No additional class for the fourth section */}
                    <BarCardSection icon={stack} title={cardDetails.barcarddesfour} />
          </div>
        </section>
      </article>
    )
}

export default CloudBarCardSection;