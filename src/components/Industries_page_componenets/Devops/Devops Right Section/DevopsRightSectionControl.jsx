import React from 'react';
import { Tooltip } from 'antd';
import top from "../../../../assets/img/top Arrow.webp";

const DevopsRightSectionControl = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="right-section-control">
    {/* Back to Top Button */}
    <Tooltip placement="leftTop" title="back to top">
      <button className="back-to-top" onClick={scrollToTop}>
        <img src={top} alt="eye icon" width={25} height={25}/>
      </button>
    </Tooltip>
  </div>
  );
};

export default DevopsRightSectionControl;
