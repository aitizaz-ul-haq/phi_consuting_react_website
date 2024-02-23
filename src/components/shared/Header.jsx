import React from 'react';
import philogomainpage from '../../assets/img/phi_logo.webp';

import headericonone from "../../assets/img/Header-icons/human-resources.png";
import headericontwo from "../../assets/img/Header-icons/relations.png";
import headericonthree from "../../assets/img/Header-icons/research.png";
import headericonfour from "../../assets/img/Header-icons/risk.png";

import insughtsone from "../../assets/img/Header-icons/blog.png";
import insughtstwo from "../../assets/img/Header-icons/case-study.png";

import iot from "../../assets/img/industry_icons/internet-of-things.png";
import iaas from "../../assets/img/industry_icons/iaas.png";
import saas from "../../assets/img/industry_icons/saas.png";
import devops from "../../assets/img/industry_icons/devops.png";
import cloud from "../../assets/img/industry_icons/server.png";
import fintech from "../../assets/img/industry_icons/cloud-computing.png";

import { Link } from 'react-router-dom';
import { Tooltip } from 'antd';

const Header = () => {
    return(
        <header >
      <div className="logo-mobile-header">
      <Link to="/"><Tooltip title="Home"><img className="logo-image" src={philogomainpage} alt="Logo"
        /></Tooltip></Link>
      </div>
      <div className="buttons">
        <div className="dropdown">
        <Link to="/solutions" className="dropdown-btn"><span className="dropdown-btn-span">Solutions</span></Link>
          <div className="dropdown-content">
            <Link to="/solutions/go-to-market-strategy"><img src={headericonthree} alt="" width="34" height="34" className='header-icons-spacing' /><span>GTM Strategy</span> </Link>
            <Link to="/solutions/hr-recruitment"><img src={headericonone} alt="" width="34" height="34" className='header-icons-spacing' /> <span>HR & Recruitment</span></Link>
            <Link to="/solutions/investors-relation"><img src={headericontwo} alt="" width="34" height="34" className='header-icons-spacing' /><span>Investor Relations</span></Link>
            <Link to="/solutions/financial-consulting"><img src={headericonfour} alt="" width="34" height="34" className='header-icons-spacing' /><span>Financial Consulting</span></Link>
            
          </div>
        </div>
        <div className="dropdown">
        <Link className="dropdown-btn"><span className="dropdown-btn">Insights</span></Link>
          <div className="dropdown-content">
            <Link to="/blogs"> <img src={insughtsone} alt="" width="34" height="34" className='header-icons-spacing' /><span>Blogs</span></Link>
            {/* <Link to="/case-studies"> <img src={insughtstwo} alt="" width="34" height="34" className='header-icons-spacing' /><span>Case Studies</span></Link> */}
          </div>
        </div>

        <div className="dropdown">
        <Link className="dropdown-btn"><span className="dropdown-btn">Industries</span></Link>
          <div className="dropdown-content">
          <Link to="/fin-tech-consulting"> <img src={fintech} alt="" width="34" height="34" className='header-icons-spacing' /><span>FinTech Consulting</span></Link>
          <Link to="/cloud-consulting"> <img src={cloud} alt="" width="34" height="34" className='header-icons-spacing' /><span>Cloud Consulting</span></Link>
          <Link to="/saas-consulting"> <img src={saas} alt="" width="34" height="34" className='header-icons-spacing' /><span>SaaS Consulting</span></Link>
            <Link to="/iot-consulting"> <img src={iot} alt="" width="34" height="34" className='header-icons-spacing' /><span>IoT Consulting</span></Link>
            <Link to="/iaas-consulting"> <img src={iaas} alt="" width="34" height="34" className='header-icons-spacing' /><span>IaaS Consulting</span></Link>
            <Link to="/dev-ops-consulting"> <img src={devops} alt="" width="34" height="34" className='header-icons-spacing' /><span>DevOps Consulting</span></Link>
          </div>
        </div>
        {/* <span>
            <Link  className="inner-header">Industry</Link>
        </span> */}
        <span>
            <Link to="/case-studies" className="inner-header">Case Studies</Link>
            </span>
        <span
          > <Link to="/about-us" className="inner-header">About us</Link></span
        >
        <span
          >
           <Link to="/careers" className="inner-header">Careers</Link>
          </span
        >
      </div>
      <div className="right-button-header">
      <Tooltip title="Contact us Page"><span
          >
            <Link to="/contact-us" className="inner-header">Contact</Link>
          </span
        ></Tooltip>
      </div>
    </header>
    )
}

export default Header;



