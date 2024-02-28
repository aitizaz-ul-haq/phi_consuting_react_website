import React from 'react';
import CloudFourCard from './Cloud FourCardSubComps/CloudFourCard';

const CloudFourCardSection = ({ cardDetails }) => {
    return(
        <article className="four-card-container">
        <section className="four-card-header">
          <h2 className="four-card-heading">
            {cardDetails.fourCardHeading}:
          </h2>
        </section>    
        <section className="four-card-cards">
            {/* Repeat for each card */}
            {[1, 2, 3, 4].map((cardNumber) => (
              <CloudFourCard
              key={cardNumber}
              numericVal={cardDetails[`card${cardNumber}numericval`]}
              heading={cardDetails[`card${cardNumber}heading`]}
              description={cardDetails[`card${cardNumber}description`]}
          />
            ))}
        </section>        
      </article>
    )
}

export default CloudFourCardSection;