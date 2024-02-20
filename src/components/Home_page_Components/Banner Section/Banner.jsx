import React from 'react';


const Banner = ({ boardHeading, boardDescription, gotoContacts }) => {
    return(
        <article id="banner" class="banner">
        <section class="banner-container">
          <h3 class="line-top">
            Proven Expertise | Personalized Service | Innovation at Core
          </h3>
          <h2 class="banner-title">
            {boardHeading}
          </h2>
          <p class="banner-desc"></p>
          <p class="banner-desc second-para">
            {boardDescription}
          </p>
          <div class="right-button" onClick={gotoContacts}>
            <span>Contact us</span>
          </div>
        </section>
      </article>
    )
}

export default Banner;