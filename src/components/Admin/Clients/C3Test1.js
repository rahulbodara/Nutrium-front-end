import React, { useEffect } from 'react';
import c3 from 'c3';
import 'c3/c3.css';


function DonutChart2({  data, chartId   }) {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const chart = c3.generate({
                bindto: `#${chartId}`, // The HTML element to bind the chart to
                data: {
                    columns: data,
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
                color: {
                    pattern: ['#1ab394', '#ea9f77', '#db4965', '#6a7d93']
                },
                legend: {
                    show: false,
                },
            });
        }
        }, []);

    return <div id={chartId} className='w-[100px] h-[100px]' />;
}

export default DonutChart2;
