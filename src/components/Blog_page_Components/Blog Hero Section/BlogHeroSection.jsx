import React from 'react';



const BlogHeroSection = ({ gotoContacts }) => {
    return(
        <article className="hero">
        <section className="hero-container-blog">
          <div className="hero-content-blog">
            <h1 className="hero-heading-blog">Explore the Phi Consulting Blog</h1>
            <p className="hero-desc-blog">
              Welcome to a reservoir of knowledge and expertise! Dive into the
              Phi Consulting Blog, where we unravel the intricacies of Sales,
              Customer Experience, Finance, Business, and HR & Recruitment
              Consulting. Gain valuable insights, stay updated on industry
              trends, and discover strategies to elevate your business to new
              heights.
            </p>
            <div className="consult-button-blog" onClick={gotoContacts}>Schedule a Free Consultation</div>
          </div>
        </section>
      </article>
    )
}

export default BlogHeroSection;