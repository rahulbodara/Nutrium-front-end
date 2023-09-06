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

const labels = ['0-5', '5-15', '15-25', '25-35', '35-45', '45-60', '>60'];
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
const AgeChart = ({data}) => {
  const maleCounts = Array(7).fill(0);
  const femaleCounts = Array(7).fill(0);

  data.forEach(item => {
    const DOB = new Date(item.dateOfBirth);
    const age = new Date().getFullYear() - DOB.getFullYear();
    const ageRange = Math.floor(age / 10);

    if (item.gender === 'Male') {
      maleCounts[ageRange]++;
    } else if (item.gender === 'Female') {
      femaleCounts[ageRange]++;
    }
  });

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Male',
        data: maleCounts,
        backgroundColor: 'rgb(255, 99, 132)',
        stack: 'Stack 0',
      },
      {
        label: 'Female',
        data: femaleCounts,
        backgroundColor: 'rgb(75, 192, 192)',
        stack: 'Stack 0',
      },
    ],
  };
  return (
    <div>
      <Bar height={100} options={options} data={chartData} />
    </div>
  )
}

export default AgeChart
