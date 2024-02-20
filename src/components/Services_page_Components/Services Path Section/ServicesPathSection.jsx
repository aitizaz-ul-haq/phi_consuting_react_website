import React from 'react';



const ServicesPathSection = (
    {
        servicesPathHeading,
        servicesPathDescription,
        processOneHeading,
        processOneDescription,
        processTwoHeading,
        processTwoDescription,
        processThreeHeading,
        processThreeDescription,
        processFourHeading,
        processFourDescription,
        processFiveHeading,
        processFiveDescription,
        processSixHeading,
        processSixDescription,
        processSevenHeading,
        processSevenDescription,
        processEightHeading,
        processEightDescription,
        goalIcon,
        planIcon,
        actionIcon,
        assignIcon,
        testIcon,
        implementIcon,
        monitorIcon,
        improveIcon
      }
) => {
    return(
<article className="path">
    <section className="path-container">
      <h2 className="path-heading">{servicesPathHeading}</h2>
      <p className="work-desc">{servicesPathDescription}</p>
      <div className="process-container">
        {/* Repeating structure for each process */}
        {[{
          heading: processOneHeading,
          description: processOneDescription,
          icon: goalIcon
        }, {
          heading: processTwoHeading,
          description: processTwoDescription,
          icon: planIcon
        }, {
          heading: processThreeHeading,
          description: processThreeDescription,
          icon: actionIcon
        }, {
          heading: processFourHeading,
          description: processFourDescription,
          icon: assignIcon
        }, {
          heading: processFiveHeading,
          description: processFiveDescription,
          icon: testIcon
        }, {
          heading: processSixHeading,
          description: processSixDescription,
          icon: implementIcon
        }, {
          heading: processSevenHeading,
          description: processSevenDescription,
          icon: monitorIcon
        }, {
          heading: processEightHeading,
          description: processEightDescription,
          icon: improveIcon
        }].map((process, index) => (
          <div key={index} className="circle-container">
            <div className="circle-content">
              <div className="icon-process-container">
                <img src={process.icon} alt="" width="60px" height="60px" />
              </div>
              <h2 className="circle-heading">{process.heading}</h2>
              <h3 className="circle-text">{process.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  </article>
    )
}

export default ServicesPathSection;