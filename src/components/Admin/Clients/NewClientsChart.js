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

const labels = ['Jun', 'Jul', 'Jul', 'Jul', 'Jul', 'Jul', 'Aug',];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [0, 2, 0, 0, 0, 0, 0],
            borderColor: '#1ab394',
            borderWidth: 1,
            backgroundColor: '#1ab394',
        },

    ],
};

const NewClientsChart = () => {
    return (
        <div>
            <Line height={100} options={options} data={data} />
        </div>
    )
}

export default NewClientsChart
