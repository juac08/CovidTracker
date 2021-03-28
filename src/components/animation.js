import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

function Example() {

  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./mask.json'),
    })
  }, [])
  return (
    <div className='head'>
      <div className='container bg'>
      <h1 className='box b1'>Covid Tracker</h1>
      <div className="box b2" ref={container}></div>
      
      </div>
      </div>
   
  );
}

export default Example;
