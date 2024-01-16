import React from 'react';
import philogomainpage from '../../assets/img/phi_logo.webp';

import headericonone from "../../assets/img/Header-icons/human-resources.png";
import headericontwo from "../../assets/img/Header-icons/relations.png";
import headericonthree from "../../assets/img/Header-icons/research.png";
import headericonfour from "../../assets/img/Header-icons/risk.png";

import insughtsone from "../../assets/img/Header-icons/blog.png";
import insughtstwo from "../../assets/img/Header-icons/case-study.png";

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
            <Link to="GTM-advisory"><img src={headericonthree} alt="" width="34" height="34" className='header-icons-spacing' /><span>GTM Strategy</span> </Link>
            <Link to="hr-consulting"><img src={headericonone} alt="" width="34" height="34" className='header-icons-spacing' /> <span>HR & Recruitment</span></Link>
            <Link to="investor-relations"><img src={headericontwo} alt="" width="34" height="34" className='header-icons-spacing' /><span>Investor Relations</span></Link>
            <Link to="financial-consulting"><img src={headericonfour} alt="" width="34" height="34" className='header-icons-spacing' /><span>Financial Consulting</span></Link>
            
          </div>
        </div>
        <div className="dropdown">
        <Link className="dropdown-btn"><span className="dropdown-btn">Insights</span></Link>
          <div className="dropdown-content">
            <Link to="/blogs"> <img src={insughtsone} alt="" width="34" height="34" className='header-icons-spacing' /><span>Blogs</span></Link>
            <Link to="/casestudies"> <img src={insughtstwo} alt="" width="34" height="34" className='header-icons-spacing' /><span>Case Studies</span></Link>
          </div>
        </div>
        <span
          >
            <Link  className="inner-header">Industry</Link>
          
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