// FourCard.jsx
import React from 'react';

const CloudFourCard = ({ numericVal, heading, description }) => {
    return (
        <div className="four-card-tab">
            <div className="four-card-inner-numeric">
                <h2 className="numeric-heading-four-card">{numericVal}</h2>
            </div>
            <hr />
            <div className="inner-heading-four-card">
                <h3 className="card-four-title">{heading}</h3>
            </div>
            <div className="inner-four-card-description">
                {description}
            </div>
        </div>
    );
}

export default CloudFourCard;
