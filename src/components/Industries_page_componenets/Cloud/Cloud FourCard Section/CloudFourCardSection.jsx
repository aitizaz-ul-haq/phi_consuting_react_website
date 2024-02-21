import React from 'react';



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
              <div className="four-card-tab" key={cardNumber}>
                <div className="four-card-inner-numeric">
                    <h2 className="numeric-heading-four-card">{cardDetails[`card${cardNumber}numericval`]}</h2>
                </div>
                <hr />
                <div className="inner-heading-four-card">
                    <h3 className="card-four-title">{cardDetails[`card${cardNumber}heading`]}</h3>
                </div>
                <div className="inner-four-card-description">
                    {cardDetails[`card${cardNumber}description`]}
                </div>
              </div>
            ))}
        </section>        
      </article>
    )
}

export default CloudFourCardSection;