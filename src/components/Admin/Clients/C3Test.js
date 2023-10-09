import React, { useEffect } from 'react';
import c3 from 'c3';
import 'c3/c3.css';

function DonutChart({  data, chartId   }) {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const chart = c3.generate({
                bindto: `#${chartId}`, // The HTML element to bind the chart to
                data: {
                    columns: data,
                    type: 'donut',
                    types: {
                        data: 'donut',
                        data: 'donut',
                    },
                    groups: [
                        [data,data]
                    ],
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
                color: {
                    pattern: ['#1ab394', '#ea9f77', '#db4965', '#6a7d93']
                },
                legend: {
                    show: false,
                },
            });

            return () => {
                chart.destroy();
            };
        }
    }, []);

    return <div id={chartId} className='w-[150px] h-[150px]' ></div>;
}

export default DonutChart;
