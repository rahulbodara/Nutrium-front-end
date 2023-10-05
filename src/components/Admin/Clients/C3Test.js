import React, { useEffect } from 'react';
import c3 from 'c3';
import 'c3/c3.css'; // Import C3.css for styling (optional)
import * as d3 from 'd3';

function DonutChart() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const chart = c3.generate({
                bindto: '#donut-chart', // The HTML element to bind the chart to
                data: {
                    columns: [
                        ['data1', 30],
                        ['data2', 100],
                        ['data3', 80],
                    ],
                    type: 'donut',
                    onclick: function (d, i) {
                        console.log('onclick', d, i);
                    },
                    onmouseover: function (d, i) {
                        console.log('onmouseover', d, i);
                    },
                    onmouseout: function (d, i) {
                        console.log('onmouseout', d, i);
                    },
                },
                legend: {
                    show: false,
                },
                // donut: {
                //     title: 'Iris Petal Width',
                // },
            });
        }
    }, []);

    return <div id="donut-chart" className='w-[150px] h-[150px]' />;
}

export default DonutChart;
