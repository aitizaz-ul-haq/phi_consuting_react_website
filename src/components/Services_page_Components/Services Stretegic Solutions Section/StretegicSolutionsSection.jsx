import React from 'react';



const StretegicSolutionsSection = ({
    solutionsHeading,
    solutionsDescription,
    serviceOneDescription,
    serviceTwoDescription,
    serviceThreeDescription,
    serviceFourDescription,
    handleTabClickOne,
    handleTabClickThree,
    handleTabClickFour,
    handleTabClickFive,
    salesIcon,
    businessIcon,
    financialIcon,
    hrIcon
  }) => {
    return(
        <article className="strategic-solutions">
        <h2 className="strategic-heading">{solutionsHeading}</h2>
        <p className="work-desc">{solutionsDescription}</p>
        <div className="services-banner-container">
          <div className="card-row-top">
            <div className="card-service-show sales-tab-one" onClick={handleTabClickFive}>
              <div className="circleBasetwo typetwo">
                <img src={salesIcon} alt="Sales Icon" width="100" height="100" className="icon-adjuster" />
              </div>
              <h3 className="card-present-title">GTM Strategy</h3>
              <div className="card-present-desc">{serviceOneDescription}</div>
            </div>
            <div className="card-service-show sales-tab-two" onClick={handleTabClickOne}>
              <div className="circleBasetwo typetwo">
                <img src={businessIcon} alt="Business Icon" width="100" height="100" className="icon-adjuster" />
              </div>
              <h3 className="card-present-title">Investor Relations</h3>
              <div className="card-present-desc">{serviceTwoDescription}</div>
            </div>
            <div className="card-service-show sales-tab-three" onClick={handleTabClickThree}>
              <div className="circleBasetwo typetwo">
                <img src={financialIcon} alt="Financial Consulting Icon" width="100" height="100" className="icon-adjuster" />
              </div>
              <h3 className="card-present-title">Financial Consulting</h3>
              <div className="card-present-desc">{serviceThreeDescription}</div>
            </div>
            <div className="card-service-show sales-tab-four" onClick={handleTabClickFour}>
              <div className="circleBasetwo typetwo">
                <img src={hrIcon} alt="HR & Recruitment Icon" width="100" height="100" className="icon-adjuster" />
              </div>
              <h3 className="card-present-title">HR & Recruitment</h3>
              <div className="card-present-desc">{serviceFourDescription}</div>
            </div>
          </div>
        </div>
      </article>
    )
}

export default StretegicSolutionsSection;