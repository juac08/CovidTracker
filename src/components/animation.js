import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

function Example() {

  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./globe.json')
    })
  }, [])
  
  return (
      <div className='bg'>
      <h1>Covid Tracker</h1>
      <div className="container" ref={container}></div>
      </div>
   
  );
}

export default Example;
