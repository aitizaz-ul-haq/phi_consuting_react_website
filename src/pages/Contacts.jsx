import React, { useState, useEffect } from 'react';
import phicontactbanner from "../assets/img/phi_logo.webp";
import { Helmet } from 'react-helmet';
import contactback from '../assets/img/wrappers/jill.jpg';
import useScrollToTop from '../hooks/useScrollToTop';

const Contacts = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    companyName: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://prickle-balanced-archaeopteryx.glitch.me/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form data sent successfully');
        setFormData({
          name: '',
          email: '',
          contactNo: '',
          companyName: '',
          message: '',
        });
      } else {
        console.error('Failed to send form data');
      }
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      document.body.style.backgroundPositionY = offset * 0.5 + 'px'; 
    };
    document.body.style.backgroundImage = `url(${contactback})`;
    document.body.style.backgroundSize = 'cover no-repeat';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed'; 
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundAttachment = '';
    };
  }, []);

  useEffect(() => {
    const servicesSection = document.querySelector('.contact');
    if (servicesSection) {
      servicesSection.style.backgroundColor = 'rgba(173, 216, 230, 0.5)';
      servicesSection.style.borderTop = '2px solid #add8e6'; 
      servicesSection.style.borderBottom = '2px solid #add8e6'; 
    }
    return () => {
      if (servicesSection) {
        servicesSection.style.backgroundColor = '';
        servicesSection.style.borderTop = '';
        servicesSection.style.borderBottom = '';
      }
    };
  }, []); 

  
useScrollToTop();

  return (
    <>
      <Helmet>
        <title>Get in Touch with Phi Consulting - Let's Shape Success Together</title>
        <meta name="description" content="Contact Phi Consulting for strategic business solutions. Whether you have inquiries or collaboration ideas, we're here to assist you on your journey to success." />
      </Helmet>
    <Helmet>
      <link rel="canonical" href="https://phi-verse.com/contact-us" />
    </Helmet>


    {/* <!-- contact form  Section --> */}
      <article class="contact">
        <section class="contact-container">
          <div class="contact-title-container">
            <h2 class="contact-heading">
              Please fill out the form below, and our team will reach out to you
              shortly
            </h2>
          </div>
          <div class="contact-form-container">
            <div class="background">
              <div class="container">
                <div class="screen">
                  <div class="screen-header">
                    <div class="screen-header-left">
                      <div class="screen-header-button close"></div>
                      <div class="screen-header-button maximize"></div>
                      <div class="screen-header-button minimize"></div>
                    </div>
                    <div class="screen-header-right">
                      <div class="screen-header-ellipsis"></div>
                      <div class="screen-header-ellipsis"></div>
                      <div class="screen-header-ellipsis"></div>
                    </div>
                  </div>
                  <div class="screen-body">
                    <div class="screen-body-item left">
                      <div class="app-title">
                        <span>CONTACT</span>
                        <span>US</span>
                      </div>
                      <div class="phi-logo-contact">
                        <img src={phicontactbanner} alt="" />
                      </div>
                      <div class="app-contact">
                        CONTACT INFO : info@phi.consulting
                      </div>
                    </div>
                    <div class="screen-body-item">
                      
                      <div className="app-form">
          {/* Updated form with React state */}
          <div className="app-form-group">
            <input
              className="app-form-control"
              name="name"
              placeholder="NAME"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div className="app-form-group">
            <input
              className="app-form-control"
              name="email"
              type="email"
              placeholder="EMAIL"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="app-form-group">
            <input
              className="app-form-control"
              name="contactNo"
              placeholder="CONTACT NO"
              onChange={handleChange}
              value={formData.contactNo}
            />
          </div>
          <div className="app-form-group">
            <input
              className="app-form-control"
              name="companyName"
              placeholder="COMPANY NAME"
              onChange={handleChange}
              value={formData.companyName}
            />
          </div>
          <div className="app-form-group message">
            <input
              className="app-form-control"
              name="message"
              placeholder="MESSAGE"
              onChange={handleChange}
              value={formData.message}
            />
          </div>
          <div className="app-form-group buttons">
            {/* <button className="app-form-button" type="button">
              CANCEL
            </button> */}
            <button className="app-form-button" type="submit" onClick={handleSubmit}>
              SEND
            </button>
          </div>
                    </div>
      
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
      </article>
    </>
  )
}

export default Contacts;
