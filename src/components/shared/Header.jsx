import React from 'react';
import philogomainpage from '../../assets/img/phi_logo.webp';
import { Link } from 'react-router-dom';


const Header = () => {
    return(
        <header>
      <div className="logo-mobile-header">
      <Link to="/"><img className="logo-image" src={philogomainpage} alt="Logo"
        /></Link>
        {/* <a href="../index.html"
          ><img className="logo-image" src={philogomainpage} alt="Logo"
        /></a> */}
      </div>
      <div className="buttons">
        <div className="dropdown">
        <Link to="/services" className="dropdown-btn"><span className="dropdown-btn">Solutions</span></Link>
          <div className="dropdown-content">
            {/* <Link to="sales-consulting">Sales Consulting</Link> */}
            <Link to="sales-consulting">GTM advisory</Link>

            {/* <Link to="buisness-consulting">Buisness Consulting</Link> */}
            <Link to="financial-consulting">Financial Consulting</Link>
            <Link to="hr-consulting">HR & Recruitment Consulting</Link>
            {/* <Link to="customer-experience">Customer Experience Consulting</Link> */}
          </div>
        </div>
        <div className="dropdown">
        <Link to="/services" className="dropdown-btn"><span className="dropdown-btn">Insights</span></Link>
          <div className="dropdown-content">
            <Link to="/insights">Blogs</Link>

            <Link to="/spotlight">CaseStudies</Link>
          </div>
        </div>
        <span
          >
            <Link to="/" className="inner-header">Industry</Link>
          
          </span
        >
        <span>
            <Link to="/valuecreation" className="inner-header">Value Creation</Link>
            </span>
        <span
          > <Link to="/aboutus" className="inner-header">About us</Link></span
        >
        
        
        <span
          >
           <Link to="/careers" className="inner-header">Careers</Link>
          </span
        >
      </div>
      <div className="right-button-header">
        <span
          >
            <Link to="/contact" className="inner-header">Contact</Link>
          </span
        >
      </div>
    </header>
    )
}

export default Header;