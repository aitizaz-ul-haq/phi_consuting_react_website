import React from 'react';

const CustomVideo = ({ src }) => {
  // HTML for the video tag
  const videoHTML = {
    __html: `<video autoplay muted loop id="heroVideo">
                <source src="${src}" type="video/mp4"/>
                Your browser does not support HTML5 video.
             </video>`
  };

  return <div dangerouslySetInnerHTML={videoHTML} />;
};

export default CustomVideo;
