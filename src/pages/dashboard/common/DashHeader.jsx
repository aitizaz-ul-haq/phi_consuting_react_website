import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashHeader = () => {

    const navigate = useNavigate();

    const handleSignOut = () => {
        // Clear the token from localStorage
        localStorage.removeItem('token');

        // Redirect to the login page
        navigate('/phi-remote-login');
    };
    return(
        <>
        <div className="dash-header-section">
        <span className='dash-heading-label'>Phi Consulting CMS</span>

        <button className='dash-logout' onClick={handleSignOut}>Sign Out</button>
        </div>
       
        </>
    )
}

export default DashHeader;