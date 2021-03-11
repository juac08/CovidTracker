import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

function Example() {

  const container = useRef(null);
  const container1 = useRef(null);
  const container2 = useRef(null);
  const container3 = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./globe.json'),
    })
  }, [])
  useEffect(() => {
    lottie.loadAnimation({
      container: container1.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./20021-covid19-coronavirus-3d-model.json'),
    })
  }, [])
  useEffect(() => {
    lottie.loadAnimation({
      container: container2.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./28662-coronavirus-washing-hands-covid-19.json'),
    })
  }, [])
  useEffect(() => {
    lottie.loadAnimation({
      container: container3.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./mask.json'),
    })
  }, [])
  
  return (
    <header className='head'>
      <artical className='container bg'>
      <h1 className='box b1'>Covid Tracker</h1>
      <div className="box b2" ref={container}></div>
      <div className="box b3" ref={container2}></div>      
      <div className="box b4" ref={container3}></div>
      </artical>
      </header>
   
  );
}

export default Example;
