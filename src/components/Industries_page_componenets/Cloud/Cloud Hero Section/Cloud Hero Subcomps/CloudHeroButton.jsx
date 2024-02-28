import React from 'react';
import { Link } from 'react-router-dom';

const CloudHeroButton = ({ to, buttonText }) => {
    return (
        <div className="consult-button-sales"> 
            <Link to={to} className='scheduler-set'>{buttonText}</Link> 
        </div>
    );
}

export default CloudHeroButton;
