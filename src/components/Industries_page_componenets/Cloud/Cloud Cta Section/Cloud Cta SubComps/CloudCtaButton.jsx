import React from 'react';
import { Link } from 'react-router-dom';

const CloudCtaButton = ({ to, buttonText }) => {
    return (
        <div className="cta-button-section">
            <div className="right-button-header">
                <span>
                    <Link to={to} className="inner-header">{buttonText}</Link>
                </span>
            </div>
        </div>
    );
}

export default CloudCtaButton;
