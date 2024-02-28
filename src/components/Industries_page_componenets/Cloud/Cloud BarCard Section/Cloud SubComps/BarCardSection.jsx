// BarCardSection.jsx
import React from 'react';

const BarCardSection = ({ icon, title, additionalClass = '' }) => {
    return (
        <div className={`barcard-bar-section ${additionalClass}`}>
            <div className="icon-barcard-container">
                <img src={icon} alt="barcard icon" className='barcard-icon-image'/>
            </div>
            <div className="title-barcard-container">
                <h3 className="barcard-description-inner">{title}</h3>
            </div>
        </div>
    );
}

export default BarCardSection;
