import React, { useEffect, useRef } from 'react';
// Import THREE and the specific Vanta.js effect
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

const VantaEffectComponent = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = React.useState(0); // Vanta effect holder

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: vantaRef.current,
        THREE: THREE, // Pass the THREE.js instance to Vanta
        // mouseControls: true,
        // touchControls: true,
        // gyroControls: false,
        // minHeight: 200.00,
        // minWidth: 200.00,
        // scale: 1.00,
        // scaleMobile: 1.00,
        color: "#1adffe", 
        backgroundColor: "#172955",
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]); // Only reinitialize if vantaEffect changes

  return <div ref={vantaRef} style={{ width: '100%', height: '100vh' }}>
    {/* Content on top of the Vanta effect here */}
  </div>;
};

export default VantaEffectComponent;
