import React, { useState, useEffect } from "react";
import { Bar} from "react-chartjs-2";
import { BounceLoader, BarLoader, BeatLoader } from "react-spinners";
import { css } from "@emotion/react";
const loaderCSS = css`
  margin-top: 25px;
  margin-bottom: 25px;
`;

function Individual({countryName}) {
  const [dailyData, setDailyData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getD = async () => {
    const url = 'https://covid19.mathdro.id/api/countries/'+countryName+'/confirmed';
    setLoading(true);
    try {
      const response = await fetch(url);
      setDailyData(await response.json());
      //setDailyData({confirmed, recovered, deaths,lastUpdate});
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getD();
  }, [countryName]);
  console.log(dailyData)
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
  if (!dailyData) {
    return setLoading(true);
  }
  let y = dailyData.map((transaction) => transaction.provinceState);
  let x = dailyData.map((transaction) => transaction.confirmed);
  let z = dailyData.map((transaction) => transaction.deaths);
//   const w = dailyData.map((transaction) => (new Date(transaction.lastUpdate).toDateString()))

  const data = {
    labels: y.length>6 ? y : ['Data'],
    fill: true,
    datasets: [
      {
        label: "Infected",
        data: x,

        borderColor: ["rgba(255, 206, 86, 0.2)"],
        backgroundColor: ["rgba(212, 17, 230, 0.2)",
        "rgba(236, 14, 14, 0.2)",
        'rgba(255, 99, 132, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 159, 64, 1)',
      ],

        pointBackgroundColor: "rgba(255, 206, 86, 0.2)",
        pointBorderColor: "rgba(255, 206, 86, 0.2)",
        fill: true,
      },
      {
        label: "Death",
        data: z,
        borderColor: ["rgba(54, 162, 235, 0.2)"],
        backgroundColor: ["rgba(240, 53, 6, 0.938)",
        'rgba(255, 99, 132, 1)',
        'rgba(255, 205, 86, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 205, 86, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 205, 86, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 159, 64, 1)',],
        pointBackgroundColor: "rgba(54, 162, 235, 0.2)",
        pointBorderColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
      },
    ],
  }
  
  const data1 = {
    labels: y.length>6 ? y : ['Deaths'],
    datasets: [
        {
        label: 'Deaths',
        data: z,
        backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(153, 102, 255, 1)',]
        }]}
    const option = {
        title: {
          display: true,
          text: 'Deaths Chart',
         
        },
      };

  const options = {
    title: {
      display: true,
      text: "Covid Tracker Chart",
      
    },
  };
  return (
    <>
      <div className="chart">
      <div>
        <Bar  data={data} options={options} 
          
        />
        </div>
        <div>
        <Bar  data={data1} option={option} 
            
        />

        </div>
      </div>
    </>
  );
}

export default Individual;
