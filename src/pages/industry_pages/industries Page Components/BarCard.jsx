import React from 'react';
import cross from '../../../assets/img/barcard-icons/close.png';
import persons from '../../../assets/img/barcard-icons/employee.png';
import circular from '../../../assets/img/barcard-icons/b2b.png';
import stack from '../../../assets/img/barcard-icons/coins-stack.png';


const BarCard = () => {
    return(
        <>
        <article className="bar-card-container">
            <section className="bar-content-section">

               <div className="heading-of-barcard">
                <h2 className="barcard-title">
                Challenges Financial Service Companies Face
                </h2>
               </div>

               <div className="barcard-bar">
                <div className="barcard-bar-section">
                    <div className="icon-barcard-container">
                        <img src={cross} alt="barcard icon" className='barcard-icon-image' />
                    </div>
                    <div className="title-barcard-container">
                        <h3 className="barcard-description-inner">
                        Low quality of generated leads
                        </h3>
                    </div>
                </div>
                <div className="barcard-bar-section border-left-and-right">
                    <div className="icon-barcard-container">
                        <img src={persons} alt="barcard icon" className='barcard-icon-image'/>
                    </div>
                    <div className="title-barcard-container">
                        <h3 className="barcard-description-inner">
                       Hiring sales specialists with relevant expertise
                        </h3>
                    </div>
                </div>
                <div className="barcard-bar-section border-right">
                    <div className="icon-barcard-container">
                        <img src={circular} alt="barcard icon" className='barcard-icon-image'/>
                    </div>
                    <div className="title-barcard-container">
                        <h3 className="barcard-description-inner">
                        Maintaining a steady flow of opportunities
                        </h3>
                    </div>
                </div>
                <div className="barcard-bar-section">
                    <div className="icon-barcard-container">
                        <img src={stack} alt="barcard icon" className='barcard-icon-image'/>
                    </div>
                    <div className="title-barcard-container">
                        <h3 className="barcard-description-inner">
                        High lead acquisition cost
                        </h3>
                    </div>
                </div>
               </div>
            </section>
        </article>
        </>
    );
}

export default BarCard;