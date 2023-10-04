import React, { useEffect } from 'react';
import c3 from 'c3';
import 'c3/c3.css'; // Import C3.css for styling (optional)
import * as d3 from 'd3';

function DonutChart4() {
    useEffect(() => {
        const chart = c3.generate({
            bindto: '#donut-chart4', // The HTML element to bind the chart to
            data: {
                columns: [
                    ['Fat', 30],
                    ['Carbohydrate', 120],
                    ['Protein', 60],
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
        });
    }, []);

    return <div id="donut-chart4" className='w-[150px] h-[150px]' />;
}

export default DonutChart4;
