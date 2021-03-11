import React, { useState, useEffect } from "react";
import { BounceLoader, BarLoader, BeatLoader } from "react-spinners";
import {css} from '@emotion/react'
import CountUp from 'react-countup'
const loaderCSS = css`
margin-top:25px;
margin-bottom:25px
`

const FetchData = () => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);

  const url = "https://covid19.mathdro.id/api";

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
 const {confirmed, recovered, deaths, image, lastUpdate} = await response.json();
      setData({confirmed, recovered, deaths, image, lastUpdate});
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
   if (loading) {
    return (
      <div className="loading">
        <h1>Loading ....</h1>
        <br />
        <BounceLoader css={loaderCSS} size={24} color="red" loading />

        <BarLoader css={loaderCSS} size={48} color="orange" loading />

        <BeatLoader css={loaderCSS} size={72} color="maroon" loading />
      </div>
    );
  }
  
  if(!data.confirmed){
    return setLoading(true)
  }
  return (
    <>
    <h2 style={{textAlign:'center' , marginTop:'2rem', fontFamily:'sans-serif'}}>Global Data</h2>
    <div className='underline' ></div>
    <article className='cards'>
    <div className='card infected'>
      <h3>   Infected  </h3>
      <div className='underline'></div>
      <CountUp  start={-875.039}
  end={data.confirmed.value}
  duration={2.75}
  separator=", "
  className='c'
  />
  <p style={{color:'gray'}}>Currently Infected Patients</p>
<h5>{new Date(data.lastUpdate).toLocaleString()}</h5>
      </div>
      <div className='card recovered'>
      <h3>Recovered</h3>
      <div className='underline'></div>
      <CountUp  start={-875.039}
  end={data.recovered.value}
  duration={2.75}
  separator=","
  className='c'
  />
    <p style={{color:'gray'}}>Currently Recovered Patients</p>

<h5>{new Date(data.lastUpdate).toDateString()}</h5>
      </div>
      <div className='card death'>
      <h3>Deaths</h3>
      <div className='underline'></div>
      <CountUp start={-875.039}
  end={data.deaths.value}
  duration={2.75}
  separator=", "
  className='c'
  />
    <p style={{color:'gray'}}>Deaths</p>

  <h5>{new Date(data.lastUpdate).toDateString()}</h5>
      </div>
    </article>
      
    </>
  );
};

export default FetchData;
