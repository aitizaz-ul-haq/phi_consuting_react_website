import React from 'react';

function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button className="round-button" onClick={scrollToTop}>
      ↑ Back to top
    </button>
  );
}

export default ScrollToTopButton;
