import React, { useState, useEffect } from 'react';

import phicontactbanner from "../assets/img/phi_logo.webp";
import { Helmet } from 'react-helmet';
import contactback from '../assets/img/wrappers/jill.jpg';
import useScrollToTop from '../hooks/useScrollToTop';

const Apply = () => {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contactNo: '',
        address: '',
        resume: null,
        coverLetter: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, resume: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('fullName', formData.fullName);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('contactNo', formData.contactNo);
        formDataToSend.append('address', formData.address);
        formDataToSend.append('resume', formData.resume);
        formDataToSend.append('coverLetter', formData.coverLetter);

        try {
            const response = await fetch('https://prickle-balanced-archaeopteryx.glitch.me/submit-application', {
                method: 'POST',
                body: formDataToSend
            });

            if (response.ok) {
                console.log('Application submitted successfully');
                // Clear form data after successful submission
                setFormData({
                    fullName: '',
                    email: '',
                    contactNo: '',
                    address: '',
                    resume: null,
                    coverLetter: ''
                });
            } else {
                console.error('Failed to submit application');
            }
        } catch (error) {
            console.error('Error submitting application:', error);
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

    {/* <!-- contact form  Section --> */}
    <article class="contact">
  <section class="contact-container">
    <div class="contact-title-container">
      <h2 class="contact-heading">
        Please fill out the form below to apply for a job at our company
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
                  <span>APPLY FOR</span>
                  <span>JOB</span>
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
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      name="fullName"
                      placeholder="FULL NAME"
                      onChange={handleChange}
                      value={formData.fullName}
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
                      name="address"
                      placeholder="ADDRESS"
                      onChange={handleChange}
                      value={formData.address}
                    />
                  </div>
                  <div className="app-form-group">
                    <label htmlFor="resume" className="app-form-label">Resume:</label>
                    <input
                      id="resume"
                      className="app-form-control"
                      name="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className="app-form-group message">
                    <textarea
                      className="app-form-control"
                      name="coverLetter"
                      placeholder="COVER LETTER"
                      onChange={handleChange}
                      value={formData.coverLetter}
                    ></textarea>
                  </div>
                  <div className="app-form-group buttons">
                    <button className="app-form-button" type="submit" onClick={handleSubmit}>
                      APPLY NOW
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

export default Apply;
