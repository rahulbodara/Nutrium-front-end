import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: false,

    },
    legend: {
        position: 'bottom' 
    },
  },
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  scales: {
    x: {
        grid: {
            display: false
        },
        border: {
            display: false
        }

    },
    y:{
       
        ticks: {
            beginAtZero: true,
          stepSize: 1
        },
        gridLines: {
            display: false,
            drawBorder: false //<- set this
         }
    }
},
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const data = {
    labels,
    datasets: [
      {
        label: 'Male',
        data:[0,1,0,0,0,0],
        backgroundColor: 'rgb(255, 99, 132)',
        stack: 'Stack 0',
      },
      {
        label: 'Female',
        data: [0,0,0,0,1,0],
        backgroundColor: 'rgb(75, 192, 192)',
        stack: 'Stack 0',
      },
     
    ],
  };
const AgeChart = () => {
  return (
    <div>
      <Bar height={100} options={options} data={data} />
    </div>
  )
}

export default AgeChart
