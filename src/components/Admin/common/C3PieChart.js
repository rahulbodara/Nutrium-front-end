import React, { useEffect } from 'react';
import c3 from 'c3';
import 'c3/c3.css';
import * as d3 from 'd3'; // Import the d3 library
const C3PieChart = (props) => {
    useEffect(() => {
        if (typeof window !== 'undefined' && props.data && props.data.length > 0) {
            const chart = c3.generate({
                bindto: `#${props.chartId}`,
               
                data: {
                    columns: props.data,
                    type: 'pie',
                    onclick: function (d, i) {
                        console.log('onclick', d, i);
                    },
                    onmouseover: function (d, i) {
                        console.log('onmouseover', d, i);
                    },
                    onmouseout: function (d, i) {
                        console.log('onmouseout', d, i);
                    },
                    // labels:true,
                    labels: {
                        show: true,
                       
                    }
                },
                color: { 
                    pattern: ['#1ab394', '#ea9f77', '#db4965',  '#336666' , '#a10020' , '#f4d2c8']
                },
                size: {
                    height: 240,
                    
                },  
                legend: {
                    show: true,
                    position: 'inset',
                    inset: {
                        anchor: 'top-right',
                        x: 11,
                        y: 1,
                        
                    }
                },
                pie: {
                    label: {
                        format: function (value, ratio, id) {
                            return d3.format('$')(value);
                        }
                    }
                }
            });

            return () => {
                if (chart) {
                    chart.destroy();
                }
            };
        }
    }, [props.chartId, props.data]);

    return <div id={props.chartId}></div>;
};

export default C3PieChart;
