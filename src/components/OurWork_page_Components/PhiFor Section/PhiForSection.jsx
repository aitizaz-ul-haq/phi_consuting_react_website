import React from 'react';
import LengthyWorkCard from '../../shared/cards/LengthyWorkCard';


const PhiForSection = ({ title, description, caseStudies }) => {
    return(
    <article className="why-phi-for-sales">
      <h2 className="why-phi-heading">{title}</h2>
      <p className="why-phi-desc">{description}</p>
      <div className="insights-container">
        {caseStudies.map(study => (
          <LengthyWorkCard key={study._id} caseStudy={study} />
        ))}
      </div>
    </article>
    )
}

export default PhiForSection;