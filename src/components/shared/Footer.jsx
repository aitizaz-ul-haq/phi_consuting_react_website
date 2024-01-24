import React from 'react';
import { Link } from "react-router-dom";
import facebook from '../../assets/img/socil-media/facebook.png';
import instagram from '../../assets/img/socil-media/instagram.png';
import linkdin from '../../assets/img/socil-media/linkedin.png';
import twitter from '../../assets/img/socil-media/twitter.png';
import youtube from '../../assets/img/socil-media/youtube.png';
import footerphilogo from '../../assets/img/phi_logo.webp';
import emailtag from '../../assets/img/icons-footer/email.png';
import phonetag from '../../assets/img/icons-footer/phone-call.png';
import pintag from '../../assets/img/icons-footer/pin.png';
import { Tooltip } from 'antd';

const Footer = () => {
    return(
        // <!-- Footer -->
    <footer>
      <section class="footer-container">
        <div class="links-conatiner">
          <img src={footerphilogo} alt="" width="200" />
        </div>

        <div class="links-conatiner">
          <ul class="list-foolter">
            <h3 class="list-heading">Solutions</h3>
            <li>
              <Link to="/GTM-advisory" class="footer-links"
                >GTM Strategy</Link
              >
            </li>
            <li>
              <Link
                to="/hr-consulting"
                class="footer-links"
                >HR & Recruitment</Link
              >
            </li>
            <li>
              <Link
                to="/investor-relations"
                class="footer-links"
                >Investor Relations</Link
              >
            </li>
            <li>
              <Link
                to="/financial-consulting"
                class="footer-links"
                >Financial Consulting</Link
              >
            </li>
            
          </ul>
        </div>

        <div class="links-conatiner spacing-under">
          <ul class="list-foolter">
            <h3 class="list-heading">Navigation</h3>
            <li>
              <Link to="/contact" class="footer-links"
                >Contact us</Link
              >
            </li>
            <li>
              <Link
                to="/blogs"
                class="footer-links"
                >Blogs</Link
              >
            </li>
            <li>
              <Link
                to="/aboutus"
                class="footer-links"
                >About us</Link
              >
            </li>
            <li>
              <Link
                to="/careers"
                class="footer-links"
                >Careers</Link
              >
            </li>
          </ul>
        </div>

        <div class="links-conatiner">
          <ul class="list-foolter">
            {/* <!-- <h3 class="list-heading">Menu</h3> --> */}
            <li class="list-bold">
              <span
                ><img
                  src={pintag}
                  alt=""
                  width="20"
                  class="spacing" /></span
              >24615 East Applewood Drive, 80016, Aurora, Colorado, United
              States
            </li>
            <li class="list-bold">
              <span
                ><img
                  src={phonetag}
                  alt=""
                  width="20"
                  class="spacing" /></span
              >+12147781233
            </li>
            <li class="list-bold">
              <span
                ><img
                  src={emailtag}
                  alt=""
                  width="20"
                  class="spacing" /></span
              >info@phi.consulting
            </li>
          </ul>
        </div>
      </section>
      <section class="links-section">
        <div class="link-row">
        <Tooltip placement="left" title="Our Facebook">
        <a href="https://www.facebook.com/phisaasllc" target="_blank" rel="noopener noreferrer">
        <img src={facebook} className='social-icon' alt="" width="50" />
        </a>
        </Tooltip>
         
        </div>
        <div class="link-row">
        <Tooltip placement="bottom" title="Follow us on insta">
        <a href="https://www.instagram.com/phisaasllc/" target="_blank" rel="noopener noreferrer">
          <img src={instagram} className='social-icon' alt="" width="60" />
          </a>
          </Tooltip>
        </div>
        <div class="link-row">
        <Tooltip placement="top" title="Find us on Linkdin">
        <a href="https://www.linkedin.com/company/phisaas/" target="_blank" rel="noopener noreferrer">
          <img src={linkdin} className='social-icon' alt="" width="50" />
          </a>
          </Tooltip>
        </div>
        <div class="link-row">
        <Tooltip placement="bottom" title="Talk to us on Twitter">
        <a href="https://twitter.com/phisaasllc" target="_blank" rel="noopener noreferrer">
            <img src={twitter} className='social-icon' alt="" width="50" />
            </a>
            </Tooltip>
        </div>
        <div class="link-row">
        <Tooltip placement="right" title="Watch us on Youtube">
        <a href="https://www.youtube.com/@phiconsulting6257" target="_blank" rel="noopener noreferrer">
          <img src={youtube} className='social-icon' alt="" width="50" />
          </a>
          </Tooltip>
        </div>
      </section>
      <section class="allrights">
        <p class="rights">
          Privacy Policy | Terms of Service | © 2023 Phi Consulting. All rights
          reserved.
        </p>
      </section>
    </footer>
    )
}

export default Footer;