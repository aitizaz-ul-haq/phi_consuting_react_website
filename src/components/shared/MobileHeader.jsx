import React, { useState } from 'react';
import mobileLogo from '../../assets/img/phi_logo-filled.png';

import homeicon from "../../assets/img/mobile_menu icons/home.png";
import solutionsicon from "../../assets/img/mobile_menu icons/solutions.png";
import aboutusicon from "../../assets/img/mobile_menu icons/information-button.png";
import valuecreation from "../../assets/img/mobile_menu icons/creation.png";
import careersicon from "../../assets/img/mobile_menu icons/career.png";
import contactsicon from "../../assets/img/mobile_menu icons/contact-mail.png";

import gtnicon from "../../assets/img/solutions icons/GTM.png";
import finicon from "../../assets/img/solutions icons/fin.png";
import invicon from "../../assets/img/solutions icons/Investor Relations.png";

import blogicon from "../../assets/img/mobile_menu icons/blog.png";
import casestudy from "../../assets/img/mobile_menu icons/case-study.png"; 

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
              <li className='list-element-mobile-menu'>
                <a href="/" className="header-mobile-link" onClick={closeMobileMenu}>
                 <img src={homeicon} className='mobile-icons' alt="" width={30} height={30}/> Home
                </a>
              </li>
              <li className='list-element-mobile-menu'>
                <a href="/services" className="header-mobile-link" onClick={closeMobileMenu}>
                <img src={solutionsicon} className='mobile-icons' alt="" width={32} height={32}/> Solutions
                </a>
              </li>
              <li className='list-element-mobile-menu'>
                <a href="/GTM-advisory" className="header-mobile-link" onClick={closeMobileMenu}>
                <img src={gtnicon} className='mobile-icons' alt="" width={32} height={32}/> GTM Strategy
                </a>
              </li>
              <li className='list-element-mobile-menu'>
                <a href="/financial-consulting" className="header-mobile-link" onClick={closeMobileMenu}>
                <img src={finicon} className='mobile-icons' alt="" width={32} height={32}/> Financial Consulting
                </a>
              </li>
              <li className='list-element-mobile-menu'>
                <a href="/investor-relations" className="header-mobile-link" onClick={closeMobileMenu}>
                <img src={invicon} className='mobile-icons' alt="" width={32} height={32}/> Investor Relations
                </a>
              </li>
              <li className='list-element-mobile-menu'>
                <a href="/hr-consulting" className="header-mobile-link" onClick={closeMobileMenu}>
                <img src={solutionsicon} className='mobile-icons' alt="" width={32} height={32}/>  hr & Recruitment 
                </a>
              </li>
              <li className='list-element-mobile-menu'>
                <a href="/valuecreation" className="header-mobile-link" onClick={closeMobileMenu}>
                <img src={valuecreation} className='mobile-icons' alt="" width={32} height={32}/> Value Creation
                </a>
              </li>
              <li className='list-element-mobile-menu'>
                <a href="/aboutus" className="header-mobile-link" onClick={closeMobileMenu}>
                <img src={aboutusicon} className='mobile-icons' alt="" width={30} height={30}/> About Us
                </a>
              </li>
              <li className='list-element-mobile-menu'>
                <a href="/blogs" className="header-mobile-link" onClick={closeMobileMenu}>
                <img src={blogicon} className='mobile-icons' alt="" width={32} height={32}/> Blogs
                </a>
              </li>
              <li className='list-element-mobile-menu'>
                <a href="/casestudies" className="header-mobile-link" onClick={closeMobileMenu}>
                <img src={casestudy} className='mobile-icons' alt="" width={32} height={32}/> Case Studies
                </a>
              </li>
              <li className='list-element-mobile-menu'>
                <a href="/careers" className="header-mobile-link" onClick={closeMobileMenu}>
                <img src={careersicon} className='mobile-icons' alt="" width={32} height={32}/> Careers
                </a>
              </li>
              <li className='list-element-mobile-menu'>
                <a href="/contact" className="header-mobile-link" onClick={closeMobileMenu}>
                <img src={contactsicon} className='mobile-icons' alt="" width={32} height={32}/>  Contact
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
