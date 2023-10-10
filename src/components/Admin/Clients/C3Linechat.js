


import React, { useEffect } from 'react';
import c3 from 'c3';
import 'c3/c3.css';

function DonutChart({ data, chartId }) {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            var chart = c3.generate({
                bindto: `#${chartId}`, // The HTML element to bind the chart to

                data: {
                    columns: [
                        ['data1', 30, 200, 100, 400, 150, 250, 50, 100, 250]
                    ]
                },
                axis: {
                    x: {
                        type: 'category',
                        categories: ['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6', 'cat7', 'cat8', 'cat9']
                    }
                }
            });

            return () => {
                chart.destroy();
            };
        }
    }, []);

    return <div id={chartId} className='w-[450px] h-[150px]' ></div>;
}

export default DonutChart;
