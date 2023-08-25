import React, { useEffect } from 'react';
import c3 from 'c3';
import 'c3/c3.css';

const C3BarChart = ({  data, chartId   }) => {
    useEffect(() => {
        const chart = c3.generate({
            bindto: `#${chartId}`,
            data: {
                columns: [data],
                colors: {
                    data1: '#1AB394',
                },
                types: {
                    data1: 'bar',
                },
                names: {
                    data1: 'Percentage calculated from the meal plan targets',
                },
            },
            legend: {
                show: false,
            },
            grid: {
                x: {
                    show: false,
                },
                y: {
                    show: false,
                    lines: [{ value: 100, class: 'grid4', text: 'Target' }],
                },
            },
            axis: {
                x: {
                    type: 'category',
                    categories: [
                        'Calcium',
                        'Choline',
                        'Copper',
                        'Fluoride',
                        'Folate',
                        'Iron',
                        'Magnesium',
                        'Manganese',
                        'Niacin',
                        'Pantothenic acid',
                        'Phosphorus',
                        'Potassium',
                    ],
                },
                y: {
                    tick: {
                        values: [0, 20, 40, 60, 80, 100],
                    },
                },
                rotated: true,
            },
        });

        // Apply custom styles to x-axis labels
        const xLabels = document.querySelectorAll(`#${chartId} .c3-axis-x .tick text`);
        xLabels.forEach(label => {
            label.style.fill = '#676a6c';         // Change text color
            label.style.fontSize = '10px';     // Change font size
            // Add any other desired styles here
        });

        return () => {
            chart.destroy();
        };
    }, []);


    return <div id={chartId}></div>;
};

export default C3BarChart;
