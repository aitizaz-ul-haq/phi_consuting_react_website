import React, { useState, useEffect } from "react";
import phicontactbanner from "../assets/img/phi_logo.webp";
import { Helmet } from "react-helmet";
import contactback from "../assets/img/wrappers/jill.webp";
import useScrollToTop from "../hooks/useScrollToTop";

const Apply = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNo: "",
    address: "",
    resume: null,
    coverLetter: "",
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
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("contactNo", formData.contactNo);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("resume", formData.resume);
    formDataToSend.append("coverLetter", formData.coverLetter);

    try {
      const response = await fetch(
        "https://backend.phiconsulting.org/submit-application",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (response.ok) {
        console.log("Application submitted successfully");
        // Clear form data after successful submission
        setFormData({
          fullName: "",
          email: "",
          contactNo: "",
          address: "",
          resume: null,
          coverLetter: "",
        });
      } else {
        console.error("Failed to submit application");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      document.body.style.backgroundPositionY = offset * 0.5 + "px";
    };
    document.body.style.backgroundImage = `url(${contactback})`;
    document.body.style.backgroundSize = "cover no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundAttachment = "";
    };
  }, []);

  useEffect(() => {
    const servicesSection = document.querySelector(".contact");
    if (servicesSection) {
      servicesSection.style.backgroundColor = "rgba(173, 216, 230, 0.5)";
      servicesSection.style.borderTop = "2px solid #add8e6";
      servicesSection.style.borderBottom = "2px solid #add8e6";
    }
    return () => {
      if (servicesSection) {
        servicesSection.style.backgroundColor = "";
        servicesSection.style.borderTop = "";
        servicesSection.style.borderBottom = "";
      }
    };
  }, []);

  useScrollToTop();

  return (
    <>
      <Helmet>
        <title>Apply for Job Opportunities at Phi Consulting</title>
        <meta
          name="description"
          content="Apply for exciting job opportunities at Phi Consulting. Join our team of dedicated professionals and contribute to transformative projects across various industries."
        />
      </Helmet>

      <Helmet>
        <link rel="canonical" href="https://phiconsulting.org/apply" />
      </Helmet>

      {/* <!-- contact form  Section --> */}
      <article class="contact">
        <section class="contact-container">
          <div class="contact-title-container">
            <h1 class="contact-heading">
              Please fill out the form below to apply for a job at our company
            </h1>
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
                          <label htmlFor="resume" className="app-form-label">
                            Resume:
                          </label>
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
                          <button
                            className="app-form-button"
                            type="submit"
                            onClick={handleSubmit}
                          >
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
  );
};

export default Apply;
