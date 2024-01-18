import React from 'react';
import cultpicone from "../assets/img/innovate_two.png";
import cultpictwo from "../assets/img/collaborate.png";
import cultpicthree from "../assets/img/excellence.png";
import cultpicfour from "../assets/img/growth.png";

import perksone from "../assets/img/salary_icon.png";
import perkstwo from "../assets/img/healthcare.png";
import perksthree from "../assets/img/businessman.png";
import perksfour from "../assets/img/office-hours.png";

import JobCard from '../components/shared/cards/JobCard';
import jobPostings from "../data/jobPostings.json";

import { Link } from 'react-router-dom';

const Careers = () => {
  return (
    <>
    {/* <!-- Hero Section --> */}
      <article class="hero">
        <section class="hero-container-careers">
          <div class="hero-content-careers">
            <h2 class="hero-heading-careers">
              Join Our Team, Ignite Your Future
            </h2>
            <p class="hero-desc-careers">
              Welcome to Phi Consulting Careers - where innovation meets
              opportunity. Explore a rewarding career journey with us and be a
              part of a dynamic team committed to reshaping industries and
              driving success.
            </p>
            {/* <!-- <div class="consult-button-careers">
              Schedule a Free Consultation
            </div> --> */}
          </div>
        </section>
      </article>

      {/* <!-- Work Culture Section --> */}
      <article class="culture">
        <section class="culture-container">
          <h2 class="culture-heading">Our Work Culture</h2>
          <p class="culture-desc">
            At Phi Consulting, we foster a work culture that inspires
            creativity, values collaboration, and celebrates excellence. Join a
            team where your ideas are heard, your skills are valued, and your
            career is nurtured. Discover what makes our workplace truly
            exceptional.
          </p>
          <div class="culture-poster-container">
            <div class="culture-poster">
              <div class="culture-poster-img">
                <img
                  src={cultpicone}
                  alt=""
                  width="210"
                  height="210"
                />
              </div>
              <div class="culture-poster-heading">Innovation</div>
              <div class="culture-poster-desc">
                We encourage fresh ideas and a pioneering spirit.
              </div>
            </div>
            <div class="culture-poster">
              <div class="culture-poster-img">
                <img
                  src={cultpictwo}
                  alt=""
                  width="210"
                  height="210"
                />
              </div>
              <div class="culture-poster-heading">Collaborate</div>
              <div class="culture-poster-desc">
                Teamwork is at the heart of our success.
              </div>
            </div>
            <div class="culture-poster">
              <div class="culture-poster-img">
                <img
                  src={cultpicthree}
                  alt=""
                  width="210"
                  height="210"
                />
              </div>
              <div class="culture-poster-heading">Excellence</div>
              <div class="culture-poster-desc">
                Striving for the highest standards in everything we do.
              </div>
            </div>
            <div class="culture-poster">
              <div class="culture-poster-img">
                <img
                  src={cultpicfour}
                  alt=""
                  width="210"
                  height="210"
                />
              </div>
              <div class="culture-poster-heading">Growth</div>
              <div class="culture-poster-desc">
                Continuous learning and professional development opportunities.
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* <!-- job opening section --> */}
      <article class="jobopenings">
        <section class="jobs-container">
          <h2 class="jobs-heading">Your Gateway to Professional Growth</h2>
          {/* <!-- <h3 class="jobs-subheading">Your Gateway to Professional Growth</h3> --> */}
          <p class="jobs-desc">
            Unlock a world of possibilities. Browse our current job openings and
            find the perfect match for your skills and aspirations. <br />
            We believe in investing in talent that fuels our transformative
            solutions. Your next career move starts here.
          </p>
          <div class="openings-container">
          {jobPostings.map(study => (
                <JobCard key={study.id} job={study} />
            ))}
          
            {/* <div class="job-card">
              <div class="job-info">
                <div class="job-heading">Lorem Ipsum Lorem</div>
                <div class="job-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  eligendi omnis recusandae
                </div>
              </div>
              <div class="apply-button-container">
                <div class="right-button">
                  <span>Apply Now</span>
                </div>
              </div>
            </div> */}
            {/* <div class="job-card">
              <div class="job-info">
                <div class="job-heading">Lorem Ipsum Lorem</div>
                <div class="job-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  eligendi omnis recusandae
                </div>
              </div>
              <div class="apply-button-container">
                <div class="right-button">
                  <span>Apply Now</span>
                </div>
              </div>
            </div>
            <div class="job-card">
              <div class="job-info">
                <div class="job-heading">Lorem Ipsum Lorem</div>
                <div class="job-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  eligendi omnis recusandae
                </div>
              </div>
              <div class="apply-button-container">
                <div class="right-button">
                  <span>Apply Now</span>
                </div>
              </div>
            </div>
            <div class="job-card">
              <div class="job-info">
                <div class="job-heading">Lorem Ipsum Lorem</div>
                <div class="job-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  eligendi omnis recusandae
                </div>
              </div>
              <div class="apply-button-container">
                <div class="right-button">
                  <span>Apply Now</span>
                </div>
              </div>
            </div> */}
            <div class="explore-button-container">
              <div class="right-button-header">
                <span>Explore More</span>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* <!-- perks Section --> */}
      <article class="perks">
        <section class="perks-container">
          <h2 class="perks-heading">Rewards Beyond the Job</h2>
          {/* <!-- <h3 class="perks-sub-heading"></h3> --> */}
          <p class="perks-desc">
            We believe in recognizing and rewarding the hard work and dedication
            of our team. <br />
            From competitive salaries to comprehensive benefits, discover the
            <br />
            perks that come with being a part of the Phi Consulting family.
          </p>
          <div class="benefits-container">
            <div class="benefit-couple">
              <div class="benefit">
                <div class="benefit-img-container">
                  <img
                    src={perksone}
                    alt=""
                    width="50"
                    class="ben"
                  />
                </div>
                <div class="benefit-desc">Competitive Salary Packages</div>
              </div>
              <div class="benefit">
                <div class="benefit-img-container">
                  <img
                    src={perkstwo}
                    alt=""
                    width="50"
                    class="ben"
                  />
                </div>
                <div class="benefit-desc">Health and Wellness Programs</div>
              </div>
            </div>
            <div class="benefit-couple">
              <div class="benefit">
                <div class="benefit-img-container">
                  <img
                    src={perksthree}
                    alt=""
                    width="50"
                    class="ben"
                  />
                </div>
                <div class="benefit-desc">
                  Professional Development Opportunities
                </div>
              </div>
              <div class="benefit">
                <div class="benefit-img-container">
                  <img
                    src={perksfour}
                    alt=""
                    width="50"
                    class="ben"
                  />
                </div>
                <div class="benefit-desc">Flexible Work Arrangements</div>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* <!-- Call to Action Section --> */}
      <article class="cta-container">
        <section class="cta-sections-container">
          <div class="cta-content">
            <div class="cta-heading">Start Your Career at Phi Consulting</div>
            <div class="cta-descrip">
              Ready to embark on a journey of professional growth and
              innovation? Explore our job openings, learn about our vibrant work
              culture, and discover the perks of being a part of the Phi team.
              Your future starts here.
            </div>
          </div>
          <div class="cta-button-section">
            <div class="right-button-header">
              <span
                ><Link to="/contact" class="inner-header"
                  >Contact Us</Link
                ></span
              >
            </div>
          </div>
        </section>
      </article>
    </>
  )
}

export default Careers;