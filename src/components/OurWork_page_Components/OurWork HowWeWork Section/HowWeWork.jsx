import React from 'react';


const HowWeWork = ({ data }) => {
    return(
        <article className="how-work">
        <section className="how-work-section">
          <div className="how-work-container">
            <div className="how-work-section-left">
              <p className="how-we-top-line">HOW PHI CREATES VALUE</p>
              <h2 className="how-we-work-heading">
                {data.phicreatesheading}
              </h2>
              <div className="statement">
                <div className="heading-how-we">1. {data.ourwayoneheading}</div>
                <div className="description-how-we">
                  {data.ourwayonedescription}
                </div>
              </div>
              <div className="statement">
                <div className="heading-how-we">2. {data.ourwaytwoheading}</div>
                <div className="description-how-we">
                 {data.ourwaytwodescription}
                </div>
              </div>
              <div className="statement">
                <div className="heading-how-we">3. {data.ourwaythreeheading}</div>
                <div className="description-how-we">
                  {data.ourwaythreedescription}
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    )
}

export default HowWeWork;