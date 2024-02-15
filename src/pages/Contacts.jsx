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
        // Clear the form fields on successful submission
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
    // Function to handle the parallax effect
    const handleScroll = () => {
      const offset = window.pageYOffset;
      document.body.style.backgroundPositionY = offset * 0.5 + 'px'; // Adjust the speed of the parallax effect by changing the multiplier
    };

    // Set background image on mount
    document.body.style.backgroundImage = `url(${contactback})`;
    document.body.style.backgroundSize = 'cover no-repeat';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed'; // This is necessary for the parallax effect

    window.addEventListener('scroll', handleScroll);

    // Clean up function to remove the event listener and revert styles on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundAttachment = '';
    };
  }, []);

  useEffect(() => {
    // Setting the background color with a transparent effect for the services section
    const servicesSection = document.querySelector('.contact');
    
    if (servicesSection) {
      // Apply light blue background color with transparency
      servicesSection.style.backgroundColor = 'rgba(173, 216, 230, 0.5)';
      // Apply top and bottom borders
      servicesSection.style.borderTop = '2px solid #add8e6'; // Light blue color
      servicesSection.style.borderBottom = '2px solid #add8e6'; // Light blue color
      // Ensure content inside is not affected by the background color
      // This is inherently the case with the background color property
      // but ensure text and other elements have enough contrast
    }

    // Cleanup function to revert styles
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
                      {/* <div class="app-form">
                        <div class="app-form-group">
                          <input class="app-form-control" placeholder="NAME" />
                        </div>
                        <div class="app-form-group">
                          <input class="app-form-control" placeholder="EMAIL" />
                        </div>
                        <div class="app-form-group">
                          <input
                            class="app-form-control"
                            placeholder="CONTACT NO"
                          />
                        </div>
                        <div class="app-form-group">
                          <input
                            class="app-form-control"
                            placeholder="COMPANY NAME"
                          />
                        </div>
                        <div class="app-form-group message">
                          <input
                            class="app-form-control"
                            placeholder="MESSAGE"
                          />
                        </div>
                        <div class="app-form-group buttons">
                          <button class="app-form-button">CANCEL</button>
                          <button class="app-form-button">SEND</button>
                        </div>
                        <p class="alternaly">
                          Alternatively, you can reach us directly:
                        </p>
                        <div class="app-form-group">
                          <input class="app-form-control" placeholder="EMAIL" />
                        </div>
                        <div class="app-form-group">
                          <input
                            class="app-form-control"
                            placeholder="CONTACT NO"
                          />
                        </div>
                        <p class="alternaly">
                          We value your inquiry and look forward to connecting
                          with you. Thank you for considering Phi Consulting as
                          your partner in success.
                        </p>
                      </div> */}
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
