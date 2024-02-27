import React from 'react';
import cross from '../../../../assets/img/barcard-icons/close.webp';
import persons from '../../../../assets/img/barcard-icons/employee.webp';
import circular from '../../../../assets/img/barcard-icons/b2b.webp';
import stack from '../../../../assets/img/barcard-icons/coins-stack.webp';


const IaasBarCardSection = ({ cardDetails }) => {
    return(
        <article className="bar-card-container">
            <section className="bar-content-section">
               <div className="heading-of-barcard">
                <h2 className="barcard-title">
                {cardDetails.barCardHeading}
                </h2>
               </div>
               <div className="barcard-bar">
                <div className="barcard-bar-section">
                    <div className="icon-barcard-container">
                        <img src={cross} alt="barcard icon" className='barcard-icon-image' />
                    </div>
                    <div className="title-barcard-container">
                        <h3 className="barcard-description-inner">
                        {cardDetails.barcarddesone}
                        </h3>
                    </div>
                </div>
                <div className="barcard-bar-section border-left-and-right">
                    <div className="icon-barcard-container">
                        <img src={persons} alt="barcard icon" className='barcard-icon-image'/>
                    </div>
                    <div className="title-barcard-container">
                        <h3 className="barcard-description-inner">
                        {cardDetails.barcarddestwo}
                        </h3>
                    </div>
                </div>
                <div className="barcard-bar-section border-right">
                    <div className="icon-barcard-container">
                        <img src={circular} alt="barcard icon" className='barcard-icon-image'/>
                    </div>
                    <div className="title-barcard-container">
                        <h3 className="barcard-description-inner">
                        {cardDetails.barcarddesthree}
                        </h3>
                    </div>
                </div>
                <div className="barcard-bar-section">
                    <div className="icon-barcard-container">
                        <img src={stack} alt="barcard icon" className='barcard-icon-image'/>
                    </div>
                    <div className="title-barcard-container">
                        <h3 className="barcard-description-inner">
                        {cardDetails.barcarddesfour}
                        </h3>
                    </div>
                </div>
               </div>
            </section>
        </article>
    )
}

export default IaasBarCardSection;