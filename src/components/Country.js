import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup'
import { BounceLoader, BarLoader, BeatLoader } from "react-spinners";
import {css} from '@emotion/react';

const loaderCSS = css`
margin-top:25px;
margin-bottom:25px
`
const Countries = ({name,setName,countryName,setCountryName,handleSubmit}) => {
  const [country,setCountry]=useState([]);
   const [loading,setLoading]=useState(false);
const url= 'https://covid19.mathdro.id/api/countries/'+countryName+'';

const getCountryData = async () => {
   
    setLoading(true);
    try {
      const response = await fetch(url);
      setCountry(await response.json());
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getCountryData();
  }, [url]);
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
  if (!country.lastUpdate) {
     return <h1 style={{textAlign:'center'}}>Data Not Available</h1>
  }

  return(
      <>
      
        <h2 style={{textAlign:'center', marginTop:'2rem', fontFamily:'sans-serif'}}>{countryName}</h2>
        <div className="underline"></div>
        <article className='cards'>
        
    <div className='card infected'>
      <h3>   Infected  </h3>
      <div className='underline'></div>
      <CountUp  start={-875.039}
  end={country.confirmed.value}
  duration={2.75}
  separator=", "
  className='c'
  />
    <p style={{color:'gray'}}>Currently Infected Patients</p>

<h5>{new Date(country.lastUpdate).toDateString()}</h5>
      </div>
      <div className='card recovered'>
      <h3>Recovered</h3>
      <div className='underline'></div>
      <CountUp  start={-875.039}
  end={country.recovered.value}
  duration={2.75}
  separator=","
  className='c'
  />
      <p style={{color:'gray'}}>Currently Recovered Patients</p>

<h5>{new Date(country.lastUpdate).toDateString()}</h5>
      </div>
      <div className='card death'>
      <h3>Deaths</h3>
      <div className='underline'></div>
      <CountUp start={-875.039}
  end={country.deaths.value}
  duration={2.75}
  separator=", "
  className='c'
  />
      <p style={{color:'gray'}}>Deaths</p>

  <h5>{new Date(country.lastUpdate).toDateString()}</h5>
      </div>
    </article>
      </>

  )
};

export default Countries;
