import React, { useState } from 'react';

import phicontactbanner from "../assets/img/phi_logo.webp";

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
      const response = await fetch('https://phi-email-service.vercel.app/send-email', {
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

  return (
    <>
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
                        CONTACT INFO : +62 81 314 928 595
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
            <button className="app-form-button" type="button">
              CANCEL
            </button>
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
