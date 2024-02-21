import React from 'react';



const FintechFourCardSection = ({ cardDetails }) => {
    return(
        <article className="four-card-container">
<section className="four-card-header">
    <h2 className="four-card-heading">
    {cardDetails.fourCardHeading}:
    </h2>
    </section>    
    <section className="four-card-cards">
        <div className="four-card-tab">
            <div className="four-card-inner-numeric">
                <h2 className="numeric-heading-four-card">{cardDetails.card1numericval}</h2>
            </div>
            <hr />
            <div className="inner-heading-four-card">
                <h3 className="card-four-title">{cardDetails.card1heading}</h3>

            </div>
            <div className="inner-four-card-description">
            {cardDetails.card1description}
            </div>
        </div>
        <div className="four-card-tab">
            <div className="four-card-inner-numeric">
                <h2 className="numeric-heading-four-card">{cardDetails.card2numericval}</h2>
            </div>
            <hr />
            <div className="inner-heading-four-card">
                <h3 className="card-four-title">{cardDetails.card2heading}</h3>

            </div>
            <div className="inner-four-card-description">
            {cardDetails.card2description}
            </div>
        </div>
        <div className="four-card-tab">
            <div className="four-card-inner-numeric">
                <h2 className="numeric-heading-four-card">{cardDetails.card3numericval}</h2>
            </div>
            <hr />
            <div className="inner-heading-four-card">
                <h3 className="card-four-title">{cardDetails.card3heading}</h3>

            </div>
            <div className="inner-four-card-description">
            {cardDetails.card3description}
            </div>
        </div>
        <div className="four-card-tab">
            <div className="four-card-inner-numeric">
                <h2 className="numeric-heading-four-card">{cardDetails.card4numericval}</h2>
            </div>
            <hr />
            <div className="inner-heading-four-card">
                <h3 className="card-four-title">{cardDetails.card4heading}</h3>

            </div>
            <div className="inner-four-card-description">
            {cardDetails.card4description}
            </div>
        </div>
        </section>        
        </article>
    )
}

export default FintechFourCardSection;