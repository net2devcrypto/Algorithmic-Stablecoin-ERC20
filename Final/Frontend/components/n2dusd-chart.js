import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  PointElement,
  LineElement, 
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';


const backend = "http://localhost:8082";


ChartJS.register(
  CategoryScale,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export function N2dusdChart() {
  const [priceaction, getPrice] = useState([]);
  const [timeaction, getTime] = useState([]);
  const [status, colorStatus] = useState('');
  const [liveprice, getLivePrice] = useState('');

  useEffect(() => {
    const updateChart = setInterval(() => {
      getChart();
    }, 2000);
    return () => clearInterval(updateChart);
  }, [liveprice]);


  async function getChart() {
    let token = 'n2usd'
    const url = backend + "/getchartinfo";
    const config = {
      method: "POST",
      body: JSON.stringify({ token }),
      headers: {
        "content-type": "application/json",
      },
    };
    const response = await fetch(url, config);
    const output = await response.json();
    const pricearray = output.chartprice;
    const timearray = output.charttime;
    let price = []
    let time = []
    let i = 0
    for (i; i < pricearray.length; i++){
      let pricenum = (pricearray[i]).toFixed(4)
      price.push(pricenum)
      time.push(timearray[i])
    }
    price.reverse()
    time.reverse()
    getLivePrice(price[0])
    let previous = Number(price[1])
    let newvalue = Number(price[0]) 
    if (previous < newvalue) { 
      colorStatus('#39ff1450') 
    }
    else if (previous > newvalue){ 
      colorStatus('#dd00a980')  
    }
    else
    colorStatus('#00c0f935') 
    getPrice(price);
    getTime(time);
  }

  const data = {
    labels: [ timeaction[10],timeaction[9],timeaction[8], timeaction[7], timeaction[6],  timeaction[5],  timeaction[4],  timeaction[3],  timeaction[2], timeaction[1], timeaction[timeaction.length]],
    datasets: [
      {
        lineTension: 0.4,
        label: 'n2USD',
        borderColor: "#ffffff",
        borderWidth: 2,
        backgroundColor: status,
        borderDashOffset: 0.7,
        borderJoinStyle: 'round',
        pointBackgroundColor: "white",
        pointBorderWidth: 2,
        pointColor: 'black',
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "white",
        pointHoverBorderWidth: 1,
        pointRadius: 3,
        data: [priceaction[10],priceaction[9],priceaction[8], priceaction[7], priceaction[6],  priceaction[5],  priceaction[4],  priceaction[3],  priceaction[2], priceaction[1], priceaction[0]],
        fill: 'origin',
      }
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },           
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks:{
          display:true,
          beginAtZero: true,
          align: 'start',
          color: '#ffffff',
          font: {
            size: 14,
            family:'SF Pro Display'
        }
      }
      },
      y: {
        type: 'linear',
        position:'right',
        min: 0.8,
        max: 1.12,
        grid: {
          drawBorder:false,
          display: false,
        },
        ticks:{
          display: true,
          color: '#fff',
          font: {
            size: 16,
            family:'SF Pro Display'
        }
      }
      },
    },
}

  return (
    <div className="text-white rounded">
      <div className='card d-grid' style={{backgroundImage: "linear-gradient(to right top, #00183d, #0c266d, #3a309c, #712fc7, #b212eb);"  }}>
      <div className="row col-lg-3">
        <div className="d-grid px-4">
        <img src='n2usd-logo.png' width='120' style={{opacity:'0.7'}}/>
        </div>
        <div className="d-grid px-2">
        <h4 style={{color: "#fff", fontFamily:'SF Pro Display', fontWeight:'400'}}>{liveprice}</h4>
        </div>
      </div>
      <Line data={data} options={options} />
      </div>
      </div>
  );
}
