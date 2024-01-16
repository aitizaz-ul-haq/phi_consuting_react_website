// MobileHeader.js
import React, { useState } from 'react';
import mobileLogo from '../../assets/img/phi_logo-filled.png';
// import './MobileHeader.css';

const MobileHeader = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen((prev) => !prev);
    };
  
    const closeMobileMenu = () => {
      setIsMobileMenuOpen(false);
    };
  
    return (
      <header className="mobile-header">
        <div className="logo">
          <img src={mobileLogo} alt="Mobile Logo" width="55" height="55" />
        </div>
        <button className="menu-toggle" onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        {isMobileMenuOpen && (
          <>
            <div className="overlay-rock" onClick={closeMobileMenu}></div>
            <nav className="mobile-menu" id="mobile-menu">
              <ul>
              <li>
                <a href="/" className="header-mobile-link" onClick={closeMobileMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="header-mobile-link" onClick={closeMobileMenu}>
                  Solutions
                </a>
              </li>
              
              <li>
                <a href="/GTM-advisory" className="header-mobile-link" onClick={closeMobileMenu}>
                GTM Strategy
                </a>
              </li>
              <li>
                <a href="/financial-consulting" className="header-mobile-link" onClick={closeMobileMenu}>
                Financial Consulting
                </a>
              </li>
              <li>
                <a href="/investor-relations" className="header-mobile-link" onClick={closeMobileMenu}>
                  Investor Relations
                </a>
              </li>
              {/* <li>
                <a href="/customer-experience" className="header-mobile-link" onClick={closeMobileMenu}>
                Customer Experience <br /> Consulting
                </a>
              </li> */}
              <li>
                <a href="/hr-consulting" className="header-mobile-link" onClick={closeMobileMenu}>
                  hr & Recruitment 
                </a>
              </li>
              <li>
                <a href="/valuecreation" className="header-mobile-link" onClick={closeMobileMenu}>
                  Value Creation
                </a>
              </li>
              <li>
                <a href="/aboutus" className="header-mobile-link" onClick={closeMobileMenu}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/blogs" className="header-mobile-link" onClick={closeMobileMenu}>
                Blogs
                </a>
              </li>
              <li>
                <a href="/casestudies" className="header-mobile-link" onClick={closeMobileMenu}>
                Case Studies
                </a>
              </li>
              <li>
                <a href="/careers" className="header-mobile-link" onClick={closeMobileMenu}>
                Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="header-mobile-link" onClick={closeMobileMenu}>
                  Contact
                </a>
              </li>
              </ul>
            </nav>
          </>
        )}
      </header>
    );
  };
  

export default MobileHeader;
