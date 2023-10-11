import React, { useEffect } from 'react';
import c3 from 'c3';
import 'c3/c3.css';

const C3LineChart = ({ data, chartId   }) => {
    console.log("🚀 ~ file: C3LineChart.js:6 ~ C3LineChart ~ data:", data)
    useEffect(() => {
        const chart = c3.generate({
            bindto: `#${chartId}`,
            data: {
                columns: data,
                colors: {
                    data1: '#1AB394',
                },
                types: {
                    data1: 'line',
                },
                names: {
                    data1: 'Percentage calculated from the meal plan targets',
                },
            },
            size: {
                height: 200
              },
            legend: {
                show: false,
            },
            grid: {
                x: {
                    show: false,
                },
                y: {
                    show: true,
                    
                   
                },
            },
            axis: {
                
                y: {
                    tick: {
                        values: [0, 0.25, 0.5, 0.75, 1],
                    },
                },
              
            },
            
        });

        // Apply custom styles to x-axis labels
        const xLabels = document.querySelectorAll(`#${chartId} .c3-axis-x .tick text`);
        xLabels.forEach(label => {
            label.style.color = '#676a6c';
            label.style.fontSize = '10px';    
           
        });
        const yLine = document.querySelectorAll(`#${chartId}  .c3-axis-y .tick line`);
        yLine.forEach(line => {
            line.style.opacity = '0';    
        });
        const yMainLine = document.querySelectorAll(`#${chartId}  .c3-axis-y path.domain`);
        yMainLine.forEach(line => {
            line.style.opacity = '0';    
        });
        const xLine = document.querySelectorAll(`#${chartId}  .c3-axis-x .tick line`);
        xLine.forEach(line => {
            line.style.opacity = '0';    
        });
        const xMainLine = document.querySelectorAll(`#${chartId}  .c3-axis-x path.domain`);
        xMainLine.forEach(line => {
            line.style.opacity = '0';    
        });
        const yGridLines = document.querySelectorAll(`#${chartId} .c3-ygrid-lines .c3-line`);
        yGridLines.forEach(line => {
            line.style.stroke = '#yourCustomColor'; // Replace with your desired color
            line.style.stroke = '#676a6c';
            line.style.fill = '#676a6c';

        });
        return () => {
            chart.destroy();
        };
    }, []);


    return <div id={chartId}></div>;
};

export default C3LineChart;
