import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LostBear = () => {
  const container = useRef(null)

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./bear.json')
    })
    return () => instance.destroy()
  }, [])
  
  return (
    <div className="container" ref={container}></div>
  );
}

export default LostBear;