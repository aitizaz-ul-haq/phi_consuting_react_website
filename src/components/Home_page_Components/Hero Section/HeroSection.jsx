import React from 'react';
import { Tooltip } from 'antd';
import { TypeAnimation } from 'react-type-animation';
// import CustomVideo from '../../shared/videoComp/CustomVideo';
// import david from "../../../assets/video/world.mp4";

{/* <CustomVideo src={david}/> */}

const HeroSection = ({ heroHeading, heroDescription, windowWidth, gotoContacts }) => {
    return(
        <article className="hero">
        <section className="hero-container">
          <div className="hero-content">
            {windowWidth >= 1200 && '' }
            <h1 className="hero-heading">
              <span className="phi">
                {windowWidth >= 1200 ? (
                  <TypeAnimation
                    sequence={['Leadership Through Partnership', 7000]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '40px', display: 'inline-block' }}
                    repeat={Infinity}
                  />
                ) : (
                  'Leadership Through Partnership'
                )}
              </span>
            </h1>
            <p className="hero-desc">{heroDescription}</p>
            <div className="consult-button" onClick={gotoContacts}>
              <Tooltip title="Contact Page">Schedule a Free Consultation</Tooltip>
            </div>
          </div>
        </section>
      </article>
    )
}

export default HeroSection;