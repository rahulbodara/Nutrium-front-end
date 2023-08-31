import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: false,

        },
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

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug',"Sept","Oct","Nov","Dec"];

const NewClientsChart = (props) => {
    const monthlyCounts = Array(12).fill(0);
    props.data.forEach(item => {
        const createdAt = new Date(item.createdAt);
        const month = createdAt.getMonth();
        monthlyCounts[month]++;
      });
      const data = {
        labels,
        datasets: [
            {
                label: 'Monthly Client Count',
                data: monthlyCounts,
                borderColor: '#1ab394',
                borderWidth: 1,
                backgroundColor: '#1ab394',
            },
        ],
    };
    return (
        <div>
            <Line height={props.height} options={options} data={data} />
        </div>
    )
}

export default NewClientsChart
